import './App.css'

function App() {

  return (
      <>
        <h1>ドキュメントをPDFに変換</h1>

        <form action="http://localhost:3000/forms/libreoffice/convert" method="POST" encType="multipart/form-data">
          <label htmlFor="fileUpload">変換するファイルを選択してください (.docx):</label><br/>
          <input type="file" id="fileUpload" name="files" accept=".docx"/><br/><br/>
          <input type="submit" value="変換してPDFをダウンロード"/>
        </form>

        <p>
          注: このフォームは、ローカルで動作している変換サービス (例: Node.js サーバーなど) を想定しています。<br/>
          サーバー側の実装によって、ダウンロードの挙動が異なる場合があります。
        </p>
      </>
  )
}

export default App
