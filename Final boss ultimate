import { useState, useEffect } from "react";

// ===== FINAL BOSS ULTIMATE (NEAR PRO DESK) ===== const API_KEY = "d53a3a5c2d1d3afefdaa4d068256294d"; const SPORT = "soccer";

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// ===== SIMPLE ML-LIKE MODEL ===== function modelProbability(odds, historyBias = 0) { const market = 1 / odds; const adjusted = market * (1 + historyBias); return clamp(adjusted, 0.05, 0.95); }

function calcEV(prob, odds) { return prob * (odds - 1) - (1 - prob); }

export default function UltimateSystem() { const [bets, setBets] = useState([]); const [bankroll, setBankroll] = useState(() => parseFloat(localStorage.getItem("bankroll")) || 1000); const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem("history") || "[]")); const [betLog, setBetLog] = useState(() => JSON.parse(localStorage.getItem("betLog") || "[]")); const [filterEV, setFilterEV] = useState(0.05);

// ===== AUTO LEARNING (CLV BASED) ===== const avgCLV = betLog.length ? betLog.reduce((s, b) => s + b.clv, 0) / betLog.length : 0;

const modelBias = clamp(avgCLV * 0.1, -0.1, 0.1);

useEffect(() => { localStorage.setItem("bankroll", bankroll); localStorage.setItem("history", JSON.stringify(history)); localStorage.setItem("betLog", JSON.stringify(betLog)); }, [bankroll, history, betLog]);

useEffect(() => { async function load() { const res = await fetch(`https://api.the-odds-api.com/v4/sports/${SPORT}/odds/?api
