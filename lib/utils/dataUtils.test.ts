import { describe, it, expect } from '@jest/globals';
import {
  addDays,
  getMonthEnd,
  getLastDayOfMonth,
  isMonthEnd,
  getFirstDayOfMonth,
  addMonths
} from './dataUtils';

describe('dataUtils', () => {
  describe('addDays', () => {
    it('通常の日付に日数を追加できる', () => {
      const date = new Date(2024, 0, 15); // 2024年1月15日
      const result = addDays(date, 5);
      expect(result.getDate()).toBe(20);
      expect(result.getMonth()).toBe(0);
    });

    it('月末に日数を追加すると次月に移行する', () => {
      const date = new Date(2024, 0, 31); // 2024年1月31日
      const result = addDays(date, 1);
      expect(result.getDate()).toBe(1);
      expect(result.getMonth()).toBe(1); // 2月
    });

    it('月末境界値: 1月31日に1日追加', () => {
      const date = new Date(2024, 0, 31); // 2024年1月31日
      const result = addDays(date, 1);
      // 期待値: 2024年2月1日
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(1); // 2月
      expect(result.getDate()).toBe(1);
    });
  });

  describe('getMonthEnd', () => {
    it('1月の月末を取得できる', () => {
      const result = getMonthEnd(2024, 1);
      expect(result.getDate()).toBe(31);
      expect(result.getMonth()).toBe(0);
    });

    it('2月(閏年)の月末を取得できる', () => {
      const result = getMonthEnd(2024, 2);
      expect(result.getDate()).toBe(29);
      expect(result.getMonth()).toBe(1);
    });

    it('12月の月末を取得できる', () => {
      const result = getMonthEnd(2024, 12);
      expect(result.getDate()).toBe(31);
      expect(result.getMonth()).toBe(11); // 12月
      expect(result.getFullYear()).toBe(2024);
    });
  });

  describe('getLastDayOfMonth', () => {
    it('1月の最終日を取得できる', () => {
      const date = new Date(2024, 0, 15);
      const result = getLastDayOfMonth(date);
      expect(result.getDate()).toBe(31);
    });

    it('2月(閏年)の最終日を取得できる', () => {
      const date = new Date(2024, 1, 15);
      const result = getLastDayOfMonth(date);
      expect(result.getDate()).toBe(29);
    });
  });

  describe('isMonthEnd', () => {
    it('月末の日付でtrueを返す', () => {
      const date = new Date(2024, 0, 31); // 1月31日
      expect(isMonthEnd(date)).toBe(true);
    });

    it('月末ではない日付でfalseを返す', () => {
      const date = new Date(2024, 0, 15);
      expect(isMonthEnd(date)).toBe(false);
    });

    it('2月29日(閏年)でtrueを返す', () => {
      const date = new Date(2024, 1, 29);
      expect(isMonthEnd(date)).toBe(true);
    });
  });

  describe('getFirstDayOfMonth', () => {
    it('月初を取得できる', () => {
      const date = new Date(2024, 0, 15);
      const result = getFirstDayOfMonth(date);
      expect(result.getDate()).toBe(1);
      expect(result.getMonth()).toBe(0);
    });
  });

  describe('addMonths', () => {
    it('通常の日付に月数を追加できる', () => {
      const date = new Date(2024, 0, 15); // 1月15日
      const result = addMonths(date, 1);
      expect(result.getMonth()).toBe(1); // 2月
      expect(result.getDate()).toBe(15);
    });

    it('月末境界値: 1月31日に1ヶ月追加', () => {
      const date = new Date(2024, 0, 31); // 1月31日
      const result = addMonths(date, 1);
      // 期待値: 2月29日(閏年)または2月28日
      // JavaScriptのsetMonthは2月31日を3月2日or3日に変換してしまう
      expect(result.getMonth()).toBe(1); // 2月であることを期待
    });
  });
});
