'use strict';

const JAMENDO_CLIENT_ID = window.JAMENDO_CLIENT_ID || '';
const audio = document.querySelector('#audioPlayer');
const $ = (selector) => document.querySelector(selector);
let tracks = [];
let currentIndex = -1;
let shuffle = false;
let repeat = false;
let searchTimer;

const formatTime = (seconds) => Number.isFinite(seconds) ? `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}` : '0:00';
const setStatus = (message, visible = true) => {
  $('#searchStatus').textContent = message;
  $('#searchStatus').hidden = !visible;
};
const setPlayIcon = (playing) => {
  $('#playButton').textContent = playing ? 'Ⅱ' : '▶';
  $('#playButton').setAttribute('aria-label', playing ? 'Jeda' : 'Putar');
};

function render() {
  const list = $('#trackList');
  list.replaceChildren();
  $('#emptyState').hidden = tracks.length !== 0;
  $('#trackListWrap').hidden = tracks.length === 0;
  $('#trackCount').textContent = `${tracks.length} LAGU`;
  $('#sidebarTracks').replaceChildren();

  tracks.forEach((track, index) => {
    const row = document.createElement('div');
    row.className = `track-row${index === currentIndex ? ' playing' : ''}`;
    row.innerHTML = `<span class="row-number">${index === currentIndex && !audio.paused ? '♫' : String(index + 1).padStart(2, '0')}</span><div class="row-main"><span class="row-art" aria-hidden="true">♫</span><div class="row-main-copy"><span class="row-title"></span><span class="row-subtitle"></span></div></div><span class="row-album"></span><span class="row-duration">${formatTime(Number(track.duration))}</span><button class="row-play" aria-label="Putar lagu">▶</button>`;
    row.querySelector('.row-title').textContent = track.name || 'Tanpa judul';
    row.querySelector('.row-subtitle').textContent = track.album_name || 'Jamendo';
    row.querySelector('.row-album').textContent = track.artist_name || 'Artis tidak diketahui';
    row.querySelector('.row-main').addEventListener('click', () => play(index));
    row.querySelector('.row-play').addEventListener('click', () => play(index));
    list.append(row);

    const side = document.createElement('button');
    side.className = `side-track${index === currentIndex ? ' selected' : ''}`;
    side.innerHTML = '<span class="side-track-art">♫</span><span class="side-track-copy"><strong></strong><span></span></span>';
    side.querySelector('strong').textContent = track.name || 'Tanpa judul';
    side.querySelector('span span').textContent = track.artist_name || 'Jamendo';
    side.addEventListener('click', () => play(index));
    $('#sidebarTracks').append(side);
  });
}

function showEmpty(title, message) {
  $('#emptyTitle').textContent = title;
  $('#emptyMessage').textContent = message;
  $('#emptyState').hidden = false;
  $('#trackListWrap').hidden = true;
}

async function search(query) {
  const term = query.trim();
  if (!term) {
    tracks = [];
    render();
    $('#resultsTitle').textContent = 'Lagu pilihan';
    $('#trackCount').textContent = 'Cari untuk mulai';
    showEmpty('Cari musik online', 'Masukkan judul lagu atau nama artis pada kotak pencarian.');
    setStatus('');
    return;
  }
  if (!JAMENDO_CLIENT_ID) {
    setStatus('Pencarian online perlu Jamendo Client ID. Buat ID gratis di developer.jamendo.com, lalu masukkan ke spotx/config.js.');
    showEmpty('API belum dikonfigurasi', 'Spot X tidak punya Client ID Jamendo. Ikuti petunjuk di atas untuk mengaktifkan pencarian.');
    return;
  }

  setStatus('Mencari lagu…');
  $('#resultsTitle').textContent = `Hasil untuk “${term}”`;
  try {
    const params = new URLSearchParams({
      client_id: JAMENDO_CLIENT_ID,
      format: 'json',
      limit: '25',
      search: term,
      include: 'licenses',
      audioformat: 'mp31',
    });
    const response = await fetch(`https://api.jamendo.com/v3.0/tracks/?${params}`);
    if (!response.ok) throw new Error(`Jamendo mengembalikan HTTP ${response.status}`);
    const data = await response.json();
    if (data.headers?.status !== 'success') throw new Error(data.headers?.error_message || 'Respons API tidak valid');
    tracks = (data.results || []).filter((track) => track.audio);
    currentIndex = -1;
    audio.pause();
    audio.removeAttribute('src');
    $('#nowTitle').textContent = 'Pilih sebuah lagu';
    $('#nowArtist').textContent = 'Musik gratis dari Jamendo';
    setPlayIcon(false);
    render();
    if (tracks.length) {
      setStatus('', false);
      $('#resultsEyebrow').textContent = 'HASIL JAMENDO · CEK LISENSI TIAP LAGU';
    } else {
      setStatus('');
      showEmpty('Tidak ada hasil yang bisa diputar', 'Coba kata kunci lain. Track yang tidak menyediakan audio streaming tidak ditampilkan.');
    }
  } catch (error) {
    tracks = [];
    render();
    showEmpty('Pencarian gagal', 'Periksa koneksi internet dan Client ID. Jika dipasang di GitHub Pages, pastikan file config.js ikut dipublikasikan.');
    setStatus(error.message || 'Terjadi kesalahan saat mencari.');
  }
}

function play(index = currentIndex) {
  const track = tracks[index];
  if (!track || !track.audio) return;
  currentIndex = index;
  audio.src = track.audio;
  audio.play().catch(() => setStatus('Browser menolak pemutaran. Coba tekan tombol putar lagi.'));
  $('#nowTitle').textContent = track.name || 'Tanpa judul';
  $('#nowArtist').textContent = track.artist_name || 'Artis tidak diketahui';
  $('#miniArt').textContent = '♫';
  $('#currentTime').textContent = '0:00';
  $('#duration').textContent = formatTime(Number(track.duration));
  $('#seekBar').value = '0';
  $('#nowLike').hidden = true;
  $('#currentAttribution').replaceChildren();
  const license = document.createElement('a');
  license.href = track.license_ccurl || track.shareurl || 'https://www.jamendo.com/';
  license.target = '_blank';
  license.rel = 'noopener noreferrer';
  license.textContent = track.license_ccurl ? 'Lihat lisensi track' : 'Buka di Jamendo';
  $('#currentAttribution').append(license);
  render();
}
function next() {
  if (!tracks.length) return;
  const nextIndex = shuffle && tracks.length > 1
    ? (currentIndex + 1 + Math.floor(Math.random() * (tracks.length - 1))) % tracks.length
    : (currentIndex + 1) % tracks.length;
  play(nextIndex);
}
function previous() {
  if (!tracks.length) return;
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  play((currentIndex - 1 + tracks.length) % tracks.length);
}

$('#searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  clearTimeout(searchTimer);
  search($('#searchInput').value);
});
$('#searchInput').addEventListener('input', () => {
  clearTimeout(searchTimer);
  const value = $('#searchInput').value.trim();
  if (value.length >= 3) searchTimer = setTimeout(() => search(value), 450);
});
$('#searchButton').addEventListener('click', () => {
  $('#searchInput').focus();
  $('#searchPanel').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
$('#heroSearchButton').addEventListener('click', () => {
  $('#searchInput').focus();
  $('#searchPanel').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
$('#libraryButton').addEventListener('click', () => $('#librarySection').scrollIntoView({ behavior: 'smooth' }));
$('#playButton').addEventListener('click', () => audio.paused ? play() : audio.pause());
$('#nextButton').addEventListener('click', next);
$('#prevButton').addEventListener('click', previous);
$('#shuffleButton').addEventListener('click', (event) => {
  shuffle = !shuffle;
  event.currentTarget.classList.toggle('enabled', shuffle);
  event.currentTarget.setAttribute('aria-pressed', String(shuffle));
});
$('#repeatButton').addEventListener('click', (event) => {
  repeat = !repeat;
  audio.loop = repeat;
  event.currentTarget.classList.toggle('enabled', repeat);
  event.currentTarget.setAttribute('aria-pressed', String(repeat));
});
$('#volumeBar').addEventListener('input', (event) => { audio.volume = Number(event.target.value); });
$('#seekBar').addEventListener('input', (event) => {
  if (Number.isFinite(audio.duration) && audio.duration > 0) audio.currentTime = Number(event.target.value) / 1000 * audio.duration;
});
audio.addEventListener('play', () => { setPlayIcon(true); render(); });
audio.addEventListener('pause', () => { setPlayIcon(false); render(); });
audio.addEventListener('ended', () => { if (!repeat) next(); });
audio.addEventListener('loadedmetadata', () => { $('#duration').textContent = formatTime(audio.duration); });
audio.addEventListener('timeupdate', () => {
  $('#currentTime').textContent = formatTime(audio.currentTime);
  $('#seekBar').value = audio.duration ? String(Math.floor(audio.currentTime / audio.duration * 1000)) : '0';
});
document.addEventListener('keydown', (event) => {
  if (event.target.matches('input, textarea, button')) return;
  if (event.code === 'Space') { event.preventDefault(); audio.paused ? play() : audio.pause(); }
  if (event.code === 'ArrowRight' && audio.src) audio.currentTime = Math.min(audio.currentTime + 5, audio.duration || audio.currentTime + 5);
  if (event.code === 'ArrowLeft' && audio.src) audio.currentTime = Math.max(audio.currentTime - 5, 0);
});

render();
if (!JAMENDO_CLIENT_ID) setStatus('Tambahkan Jamendo Client ID ke spotx/config.js untuk mengaktifkan pencarian online.');
else {
  tracks = [];
  render();
  setStatus('Cari lagu atau artis untuk menemukan musik gratis.');
  showEmpty('Cari musik online', 'Masukkan judul lagu atau nama artis pada kotak pencarian.');
}
