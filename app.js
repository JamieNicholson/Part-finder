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

    const getShaResponse = await fetch('https://api.github.com/repos/JamieNicholson/Part-finder/contents/excel.xlsx', {
      method: 'GET',
      headers: {
        'Authorization': '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',
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!getShaResponse.ok) {
      alert('Failed to get file SHA!');
      return;
    }

    const fileData = await getShaResponse.json();
    const sha = fileData.sha;

    const response = await fetch('https://api.github.com/repos/JamieNicholson/Part-finder/contents/excel.xlsx', {
      method: 'PUT',
      headers: {
        'Authorization': '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',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Replace Excel file',
        content: base64Content,
        sha: sha
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
