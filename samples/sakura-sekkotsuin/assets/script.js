/*
  さくら接骨院（デモサイト） script.js

  JSは以下の2つの必要最小限の用途にのみ使用する（指示書の「JSは可能な限り使わない」方針に基づく判断）。
  1. モバイル用ハンバーガーメニューの開閉（CSSだけでは開閉状態を制御できないため）
  2. 「本日の営業時間」の自動判定・表示（指示書 §4 の要件。曜日ごとに固定文言を書くと
     更新漏れで誤情報になるため、今日の曜日をJSで判定して表示する）
     ※祝日は判定していない（祝日データを持たないため）。休診である旨は各ページに固定文言で明記している。

  JSが無効な環境でも情報は欠落しない設計にしている：
  - メニューはJS無効時はフッターのリンクとページ内ナビ相当のリンクから移動できる
  - 「本日の営業時間」表示が動かない場合でも、直下の営業時間表そのものは静的に全曜日を表示している
*/
(function () {
  "use strict";

  // ---- 1. モバイルメニュー開閉 ----
  var toggleBtn = document.querySelector(".nav-toggle");
  var closeBtn = document.querySelector(".nav-close");
  var mobileNav = document.querySelector(".mobile-nav");

  function openNav() {
    if (!mobileNav) return;
    mobileNav.classList.add("is-open");
    toggleBtn.setAttribute("aria-expanded", "true");
  }

  function closeNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove("is-open");
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener("click", function () {
      if (mobileNav.classList.contains("is-open")) {
        closeNav();
      } else {
        openNav();
      }
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeNav);
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  // ---- 2. 本日の営業時間 ----
  // 曜日ごとの営業時間データ（院の設定と完全一致させること。変更時はここだけを直せばよい）
  var HOURS = {
    0: null, // 日曜・休診
    1: ["9:00-12:30", "15:00-20:00"],
    2: ["9:00-12:30", "15:00-20:00"],
    3: ["9:00-12:30", "15:00-20:00"],
    4: ["9:00-12:30", "15:00-20:00"],
    5: ["9:00-12:30", "15:00-20:00"],
    6: ["9:00-14:00"]
  };
  var DAY_LABEL = ["日", "月", "火", "水", "木", "金", "土"];

  function todayText() {
    var d = new Date().getDay();
    var hours = HOURS[d];
    if (!hours) {
      return "本日は休診日です";
    }
    return "本日(" + DAY_LABEL[d] + ") " + hours.join(" / ");
  }

  document.querySelectorAll("[data-today-hours]").forEach(function (el) {
    el.textContent = todayText();
  });

  // 営業時間表の「本日」行に印を付ける
  var todayRow = document.querySelector('.hours-table tr[data-day="' + new Date().getDay() + '"]');
  if (todayRow) {
    todayRow.classList.add("is-today");
    var cell = todayRow.querySelector(".day-cell");
    if (cell && !cell.querySelector(".today-badge")) {
      var badge = document.createElement("span");
      badge.className = "today-badge";
      badge.textContent = "本日";
      cell.appendChild(badge);
    }
  }
})();
