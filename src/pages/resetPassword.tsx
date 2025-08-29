import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isRecovery, setIsRecovery] = useState(false);

    useEffect(() => {
        // Check session immediately
        supabase.auth.getSession().then(({ data }) => {
            if (data.session) {
                setIsRecovery(true);
            }
        });

        // Also handle case where Supabase fires PASSWORD_RECOVERY
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (event === "PASSWORD_RECOVERY" && session) {
                    setIsRecovery(true);
                }
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (password !== confirm) {
            setError("Passwords do not match.");
            return;
        }

        const { error } = await supabase.auth.updateUser({ password });
        if (error) {
            setError(error.message);
        } else {
            await supabase.auth.signOut();

            setMessage("Password updated! You can now log in with your new password.");

            setTimeout(() => {
                window.location.href = "/auth";
            }, 2000);          
        }
    };

    if (!isRecovery) {
        return <p style={{ color: "lightgreen" }}>Invalid or expired password reset link.</p>;
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#0f0f0f"
        }}>
            <form onSubmit={handleResetPassword} style={{
                width: 400,
                padding: 20,
                border: "1px solid #444",
                borderRadius: 8,
                backgroundColor: "#1e1e1e",
                color: "#fff"
            }}>
                <h2>Set a New Password</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {message && <p style={{ color: "green" }}>{message}</p>}
                <input
                    type="password"
                    placeholder="New password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        display: "block",
                        margin: "10px 0",
                        width: "100%",
                        padding: "10px",
                        borderRadius: 4,
                        border: "1px solid #555",
                        backgroundColor: "#2c2c2c",
                        color: "#fff"
                    }}
                />
                <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                    style={{
                        display: "block",
                        margin: "10px 0",
                        width: "100%",
                        padding: "10px",
                        borderRadius: 4,
                        border: "1px solid #555",
                        backgroundColor: "#2c2c2c",
                        color: "#fff"
                    }}
                />
                <button type="submit" style={{
                    width: "100%",
                    padding: 10,
                    backgroundColor: "#6b1e1e",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer"
                }}>Update Password</button>
            </form>
        </div>
    );
}
