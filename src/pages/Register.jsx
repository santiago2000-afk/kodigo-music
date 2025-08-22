import { useForm } from "react-hook-form";

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Datos enviados:", data);
        alert("Registro exitoso 🎉");
    };

    return (
        <main className="register">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>📝 Registro de usuario</h2>

                <input
                    {...register("name", {
                        required: "El nombre es obligatorio",
                        minLength: {
                            value: 2,
                            message: "El nombre debe tener al menos 2 caracteres",
                        },
                        maxLength: {
                            value: 50,
                            message: "El nombre no puede exceder 50 caracteres",
                        },
                        pattern: {
                            value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                            message: "El nombre solo puede contener letras y espacios",
                        },
                    })}
                    placeholder="Nombre"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                <input
                    {...register("email", {
                        required: "El correo es obligatorio",
                        pattern: {
                            value:
                                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Ingrese un correo electrónico válido",
                        },
                    })}
                    placeholder="Correo"
                    type="email"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <input
                    {...register("password", {
                        required: "La contraseña es obligatoria",
                        minLength: {
                            value: 8,
                            message: "La contraseña debe tener al menos 8 caracteres",
                        },
                        pattern: {
                            value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message:
                                "Debe incluir mayúsculas, minúsculas, números y un carácter especial",
                        },
                    })}
                    placeholder="Contraseña"
                    type="password"
                />
                {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                )}

                <button type="submit">Registrar</button>
            </form>
        </main>
    );
}