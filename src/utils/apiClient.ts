// src/utils/apiClient.ts

export interface RegisterPayload {
  email: string;
  first_name: string;
  last_name: string;
  newsletter_option: boolean;
}

export interface RegisterResponse {
  memo: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export async function registerUser(payload: RegisterPayload): Promise<RegisterResponse> {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to register user');
  }

  return response.json();
}
