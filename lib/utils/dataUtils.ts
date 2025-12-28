/**
 * データユーティリティ関数
 * 日付処理に関する各種ユーティリティを提供
 */

/**
 * 指定した日数を追加した日付を返す
 * @param date 基準日
 * @param days 追加する日数
 * @returns 日数を追加した新しい日付
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  // JavaScriptのsetDate()は月境界を自動的に処理する
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * 月末の日付を取得する
 * @param year 年
 * @param month 月 (1-12)
 * @returns 指定した年月の月末日付
 */
export function getMonthEnd(year: number, month: number): Date {
  // 次月の0日目は前月の最終日を返す
  return new Date(year, month, 0);
}

/**
 * 月の最終日を取得する
 * @param date 日付
 * @returns その月の最終日の日付
 */
export function getLastDayOfMonth(date: Date): Date {
  const year = date.getFullYear();
  const month = date.getMonth();
  // 次月の0日を取得することで、その月の最終日を取得
  return new Date(year, month + 1, 0);
}

/**
 * 指定した日が月末かどうかを判定する
 * @param date 判定する日付
 * @returns 月末の場合true、それ以外false
 */
export function isMonthEnd(date: Date): boolean {
  const nextDay = addDays(date, 1);
  // 翌日の月が異なる場合、その日は月末
  return nextDay.getMonth() !== date.getMonth();
}

/**
 * 月初の日付を取得する
 * @param date 日付
 * @returns その月の初日の日付
 */
export function getFirstDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * 指定した月数を追加した日付を返す
 * @param date 基準日
 * @param months 追加する月数
 * @returns 月数を追加した新しい日付
 */
export function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  const originalDay = date.getDate();
  result.setMonth(result.getMonth() + months);
  
  // FIX: 月末日の処理を適切に処理
  // 目的の月に元の日が存在しない場合（例: 1月31日→2月）、
  // その月の最終日に調整する
  if (result.getDate() !== originalDay) {
    // setDateが原因で日付が繰り越された場合、前月の最終日に設定
    result.setDate(0);
  }
  return result;
}
