// Copyright (C) 2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0

export const DATA_PREP_URL = import.meta.env.VITE_DATA_PREP_SERVICE_URL;
export const CHAT_QNA_URL = import.meta.env.VITE_BACKEND_SERVICE_ENDPOINT;
export const LLM_MODEL_ID = import.meta.env.VITE_LLM_MODEL_ID;
export const SET_SYSTEM_PROMPT =
  import.meta.env.VITE_SET_SYSTEM_PROMPT === 'true';
export const HIDE_UPLOAD_BUTTON =
  import.meta.env.VITE_HIDE_UPLOAD_BUTTON === 'true';
