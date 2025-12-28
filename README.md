# Date Utilities

日付処理に関するユーティリティ関数を提供します。

## 概要

`lib/utils/dataUtils.ts` は、日付の加算、月末判定などの日付処理ユーティリティを提供します。

## 機能

### addDays(date: Date, days: number): Date
指定した日数を日付に追加します。

```typescript
const date = new Date(2024, 0, 15); // 2024年1月15日
const result = addDays(date, 10); // 2024年1月25日
```

### addMonths(date: Date, months: number): Date
指定した月数を日付に追加します。月末の境界値処理を適切に行います。

```typescript
const date = new Date(2024, 0, 31); // 2024年1月31日
const result = addMonths(date, 1); // 2024年2月29日（閏年）
```

**修正内容**: 元の日付が月末で、加算後の月に同じ日が存在しない場合、その月の最終日に調整されます。

### getMonthEnd(year: number, month: number): Date
指定した年月の月末日付を取得します。

```typescript
const monthEnd = getMonthEnd(2024, 2); // 2024年2月29日
```

### getLastDayOfMonth(date: Date): Date
指定した日付の月の最終日を取得します。

```typescript
const date = new Date(2024, 1, 15); // 2024年2月15日
const lastDay = getLastDayOfMonth(date); // 2024年2月29日
```

### isMonthEnd(date: Date): boolean
指定した日付が月末かどうかを判定します。

```typescript
const date = new Date(2024, 0, 31); // 2024年1月31日
console.log(isMonthEnd(date)); // true
```

### getFirstDayOfMonth(date: Date): Date
指定した日付の月の初日を取得します。

```typescript
const date = new Date(2024, 0, 15); // 2024年1月15日
const firstDay = getFirstDayOfMonth(date); // 2024年1月1日
```

## BUG-001: 月末処理の境界値エラー

### 問題
`addMonths` 関数において、月末日に月を加算した場合、目標の月に同じ日が存在しない場合に次月に繰り越されてしまう問題がありました。

例: 1月31日に1ヶ月を加算すると、2月31日（存在しない）→ 3月2日または3日になってしまう

### 解決方法
加算後の日付が元の日付と異なる場合、その月の最終日に調整するロジックを追加しました。

```typescript
if (result.getDate() !== originalDay) {
  result.setDate(0); // 前月の最終日に設定
}
```

## テスト

```bash
npm test
```

全14件のテストが正常にパスすることを確認してください。

## ビルド

```bash
npm run build
```

TypeScriptコードをJavaScriptにコンパイルします。

## インストール

```bash
npm install
```
