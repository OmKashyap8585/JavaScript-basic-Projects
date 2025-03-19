const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');

dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropZone.classList.remove('dragover');
    const files = event.dataTransfer.files;
    displayFiles(files);
    
});

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    displayFiles(files);
});

function displayFiles(files) {
    // fileList.innerHTML = ''; // Clear previous files
    Array.from(files).forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');
        fileItem.textContent = `Name: ${file.name} | Size: ${(file.size / 1024).toFixed(2)} KB | Type: ${file.type || 'Unknown'}`;
        fileList.appendChild(fileItem);
    });
}
