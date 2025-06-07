# 動作サンプル


```bash
curl \
  --request POST http://localhost:3000/forms/libreoffice/convert \
  --form files=@./test.docx \
  -o my.pdf
```