interface GenerateStaticParamsContext {
  query: {
    code?: string;
    [key: string]: unknown;
  };
}

interface GenerateStaticParamsResult {
  props: {
    token: string | null;
  };
}

export async function generateStaticParams(
  context: GenerateStaticParamsContext
): Promise<GenerateStaticParamsResult> {
  const { code } = context.query;
  return { props: { token: code ?? null } };
}

export default function Page({ token }: { token: string | null }) {
  return <div>Página de redirección...{token}</div>;
}
