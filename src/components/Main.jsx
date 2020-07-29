import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
    this.fileUploadData = this.fileUploadData.bind(this);
  }

  async fileUploadData(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    const fileData = await fetch("http://localhost:4000/upload", {
      method: "POST",
      body: data,
    });
    const fileDataObject = await fileData.json();
    if(fileDataObject.code === 200){
      const csvData = await fetch("http://localhost:4000/");
      const csvDataJson = await csvData.json()
      this.setState({data:csvDataJson})
    }
  }

  render() {
    return (
      <form onSubmit={this.fileUploadData}>
        <div>
          <input
            ref={(ref) => {
              this.uploadInput = ref;
            }}
            type="file"
          />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
      </form>
    );
  }
}

export default Main;
