async function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a file!');
    return;
  }

  const reader = new FileReader();
  reader.onload = async function(e) {
    const content = e.target.result;
    const base64Content = btoa(content);

    const response = await fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/PATH_TO_FILE.xlsx', {
      method: 'PUT',
      headers: {
        'Authorization': 'token YOUR_GITHUB_TOKEN',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Replace Excel file',
        content: base64Content,
        sha: 'SHA_OF_THE_EXISTING_FILE'
      })
    });

    if (response.ok) {
      alert('File uploaded successfully!');
    } else {
      alert('Failed to upload file!');
    }
  };

  reader.readAsBinaryString(file);
}
