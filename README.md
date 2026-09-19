# hp-biz

整体院・治療院向けホームページ制作の営業用サンプルサイト集です。実在の事業者ではありません。

## ⚠️ 公開前に必ず差し替えてください

営業トップ `index.html` のお問い合わせセクションには、まだ本番用の値が入っていません。
以下のプレースホルダを実際の値に差し替えてから、営業目的で案内・共有してください。

| プレースホルダ | 場所 | 差し替える値 |
|---|---|---|
| `CONTACT_EMAIL_PLACEHOLDER` | `index.html` の `mailto:` リンク | 実際に受信できるメールアドレス |
| `FORM_ID_PLACEHOLDER` | `index.html` のお問い合わせフォーム `action` | [Formspree](https://formspree.io/) で作成したフォームのID（無料枠あり） |

Formspreeでフォームを作成したら、`action="https://formspree.io/f/FORM_ID_PLACEHOLDER"` の
`FORM_ID_PLACEHOLDER` 部分をFormspreeが発行するIDに置き換え、フォーム下の注記文言（「送信先は準備中です」）も削除してください。
また「あおい制作所」は仮の屋号です。正式名称が決まり次第、`index.html` 内のテキストを置き換えてください。

## 構成

- `index.html` — 営業トップ（制作の特徴・料金プラン・制作事例・お問い合わせ）
- `samples/seitai-full/` — 整体院サンプルサイト「みどり整体院」全5ページ
  - トップ／症状別（腰痛）／料金・施術の流れ／院・院長紹介／アクセス・予約
- `specs/seitai-site-spec.md` — 整体院サンプルサイトの制作仕様書
- `specs/sales-top-fix-spec.md` — 営業トップページの修正仕様書

## 技術構成

静的HTML＋共通CSS（`samples/seitai-full/assets/style.css`）のみ。外部ライブラリは使用していません。

## 公開

`main` ブランチへのpushで GitHub Actions が自動的に GitHub Pages へデプロイします（`.github/workflows/pages.yml`）。
