# GitHub Pages 部署說明

這個資料夾目前是一個可直接部署到 GitHub Pages 的靜態網站。

## 本機檔案

- `index.html`: 首頁
- `style.css`: 樣式

## 1. 先安裝 Git

如果你的電腦還沒有 Git，先安裝：

- Git for Windows: https://git-scm.com/download/win

安裝後重新開啟終端機，再確認：

```powershell
git --version
```

## 2. 在 GitHub 建立新的 repository

建議建立一個新的公開 repository，例如：

- `cathay-site`

建立後會得到一個網址，像這樣：

```text
https://github.com/你的帳號/cathay-site.git
```

## 3. 在這個資料夾執行以下指令

```powershell
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/你的帳號/cathay-site.git
git push -u origin main
```

## 4. 啟用 GitHub Pages

到 GitHub 上的 repository 頁面：

- `Settings`
- `Pages`

設定：

- `Source`: `Deploy from a branch`
- `Branch`: `main`
- `Folder`: `/ (root)`

儲存後，稍等幾分鐘，網站就會出現在：

```text
https://你的帳號.github.io/cathay-site/
```

## 5. 之後更新網站

每次改完檔案後，重新執行：

```powershell
git add .
git commit -m "Update site"
git push
```

GitHub Pages 會自動更新。
