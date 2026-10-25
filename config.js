// Настройки подключения к твоей базе Supabase.
// Где взять: Supabase → твой проект → Project Settings → API Keys (или Data API).
// Вставь значения между кавычками и нажми "Commit changes".

window.PLANNER_CONFIG = {
  // Project URL, выглядит так: https://abcdefghijklmnop.supabase.co
  supabaseUrl: "ВСТАВЬ_СЮДА_PROJECT_URL",

  // Ключ anon public (eyJ...) или Publishable key (sb_publishable_...).
  // Этот ключ можно хранить в открытом виде: данные защищены паролем твоего аккаунта.
  // НИКОГДА не вставляй сюда service_role / secret key.
  supabaseKey: "ВСТАВЬ_СЮДА_КЛЮЧ"
};
