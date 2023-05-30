import apiClient from "./services";

export default {
  getPlans() {
    return apiClient.get("plans");
  },
  getPlan(id) {
    return apiClient.get("plans/" + id);
  },
  addPlan(plan) {
    return apiClient.post("plans", plan);
  },
  updatePlan(plan) {
    return apiClient.put("plans/" + plan.id, plan);
  },
  deletePlan(planId) {
    return apiClient.delete("plans/" + planId);
  },
};
