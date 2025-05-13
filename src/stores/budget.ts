import { defineStore } from "pinia";
import { ref } from "vue";
import type { Budget } from "../types/Budget";

export const useBudgetStore = defineStore("budget", () => {
  const budgets = ref<Budget[]>([]);
  const currentBudget = ref<Budget | null>(null);
  const loading = ref(false);

  function fetchBudgets() {
    loading.value = true;
    // TODO Replace simulation with real budgets fetching request
    setTimeout(() => {
      budgets.value = [
        { id: "1", name: "Osobisty", amount: 5000, spent: 2500, remaining: 2500, createdAt: new Date() },
        { id: "2", name: "Wakacje", amount: 3000, spent: 1000, remaining: 2000, createdAt: new Date() },
      ];
      loading.value = false;
    }, 1000);
  }

  function addBudget(budget: Omit<Budget, "id" | "createdAt">) {
    // TODO Replace simulation with real budget adding
    const newBudget: Budget = {
      id: Math.random().toString(36).substring(7),
      ...budget,
      createdAt: new Date(),
    };
    budgets.value.push(newBudget);
    return newBudget;
  }

  function updateBudget(id: string, budgetData: Partial<Budget>) {
    // TODO Replace simulation with real budget updating
    const index = budgets.value.findIndex((b) => b.id === id);
    if (index !== -1) {
      budgets.value[index] = { ...budgets.value[index], ...budgetData };
    }
  }

  function deleteBudget(id: string) {
    // TODO Replace simulation with real budget deleting
    budgets.value = budgets.value.filter((b) => b.id !== id);
  }

  function selectBudget(id: string) {
    currentBudget.value = budgets.value.find((b) => b.id === id) || null;
  }

  return {
    budgets,
    currentBudget,
    loading,
    fetchBudgets,
    addBudget,
    updateBudget,
    deleteBudget,
    selectBudget,
  };
});
