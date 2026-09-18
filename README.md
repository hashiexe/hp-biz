# hp-biz

整体院・治療院向けホームページ制作の営業用サンプルサイト集です。実在の事業者ではありません。

## 構成

- `index.html` — 営業トップ（制作事例の紹介）
- `samples/seitai-full/` — 整体院サンプルサイト「みどり整体院」全5ページ
  - トップ／症状別（腰痛）／料金・施術の流れ／院・院長紹介／アクセス・予約
- `specs/seitai-site-spec.md` — 制作仕様書

## 技術構成

静的HTML＋共通CSS（`samples/seitai-full/assets/style.css`）のみ。外部ライブラリは使用していません。

## 公開

`main` ブランチへのpushで GitHub Actions が自動的に GitHub Pages へデプロイします（`.github/workflows/pages.yml`）。
