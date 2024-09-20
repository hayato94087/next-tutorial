import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * サーバーサイドの環境変数をここで指定してください
   */
  server: {
    DEBUG_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  /**
   * クライアントサイドの環境変数をここで指定してください
   * クライアントに環境変数を公開するには、それらの前に NEXT_PUBLIC_ というプレフィックスを付けてください。
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * Next.jsのエッジランタイム（例えばミドルウェア）やクライアントサイドでは、
   * process.env を通常のオブジェクトとして分割代入することができないため、手動で分割する必要があります。
   */
  runtimeEnv: {
    DEBUG_URL: process.env.DEBUG_URL,
    NODE_ENV: process.env.NODE_ENV,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },

  /**
   * 環境変数のバリデーションをスキップするには、SKIP_ENV_VALIDATION を付けて build または dev を実行してください
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * 空の文字列を未定義として扱うようにします。
   * SOME_VAR: z.string()とSOME_VAR=''はエラーを投げます。
   */
  emptyStringAsUndefined: true,
});
