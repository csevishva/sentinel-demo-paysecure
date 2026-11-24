import axios from "axios";

export async function listRecords() {
  return fetch("/v1/payments");
}

export async function createRecord(name, status) {
  return axios.post("/v1/payments", { name, status });
}

export async function updateRecord(id, name) {
  return axios.patch(`/v1/payments/${id}`, { name });
}

export async function exportRecords() {
  return fetch("/v1/payments/export");
}
