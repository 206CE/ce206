import { ProtectRoute } from "@/components/ProtectRoute";

export default function dashboard() {
  return (
    <ProtectRoute>
      <section>
        <div className="text-(--primary)">You are authenticated</div>
      </section>
    </ProtectRoute>
  );
}
