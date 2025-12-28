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
  // BUG: getDate() + days で直接設定すると月末で問題が発生
  // 例: 1月31日に1日追加すると、2月31日(存在しない)になり、3月3日になってしまう
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
  // BUG: 月をそのまま使うと次月の0日目になり、意図した動作になる
  // しかし、month=12の時に13月0日となり、翌年の1月0日(12月31日)を返してしまう
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
  // BUG: 次月の0日を取得する方法は正しいが、
  // 時刻情報が引き継がれないため、時刻が00:00:00になる
  return new Date(year, month + 1, 0);
}

/**
 * 指定した日が月末かどうかを判定する
 * @param date 判定する日付
 * @returns 月末の場合true、それ以外false
 */
export function isMonthEnd(date: Date): boolean {
  const nextDay = addDays(date, 1);
  // BUG: addDays関数のバグの影響を受ける
  // 月末日に1日追加した場合、正しく翌月1日にならない可能性がある
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
  result.setMonth(result.getMonth() + months);
  // BUG: 月末日の処理が不適切
  // 例: 1月31日に1ヶ月追加すると、2月31日(存在しない)になり、3月3日or3月2日になる
  return result;
}
