# 動かし方

```bash
docker compose up -d --build
```

ブラウザでhttp://localhostにアクセスすると、docx -> pdfの変換を体験できます。

# 動作サンプル


```bash
curl \
  --request POST http://localhost:3000/forms/libreoffice/convert \
  --form files=@./test.docx \
  -o my.pdf
```

