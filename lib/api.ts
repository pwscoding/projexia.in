const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.projexia.in/api/v1";

interface ApiError {
  success: false;
  message: string;
  errors?: { field: string; message: string }[];
}

interface ApiSuccess<T = unknown> {
  success: true;
  message: string;
  [key: string]: unknown;
}

export type ApiResponse<T = unknown> = ApiSuccess<T> | ApiError;

export interface Plan {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  maxUsers: number;
  maxProjects: number;
  storageLimitBytes: string;
  priceMonthly: number;
  priceAnnual: number;
  currency: string;
  sortOrder: number;
}

export async function apiGet<T = unknown>(
  endpoint: string
): Promise<ApiResponse<T>> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  return data;
}

export async function apiPost<T = unknown>(
  endpoint: string,
  body: Record<string, unknown>
): Promise<ApiResponse<T>> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return data;
}
