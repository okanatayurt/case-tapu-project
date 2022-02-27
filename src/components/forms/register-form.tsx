import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { useForm } from "react-hook-form";
import { addCurrentUser } from "../../store/slices/userSlice";
import { ShowPassword, ArrowDown } from "../icons";

export const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    register,
    trigger,
    watch,
    setValue,
    clearErrors,
    formState: { errors, dirtyFields, isValid, isDirty },
  } = useForm({
    defaultValues: { email: "", password: "", locale: "Türkiye" },
  });

  const dispatch = useAppDispatch();

  const [revealPwd, setRevealPwd] = React.useState(false);

  // Tüm fieldları anlık olarak takip etmek için kullanıyorum.
  const watcher = watch();

  const onSubmit = async () => {
    const user = {
      email: watcher.email,
      password: watcher.password,
      locale: watcher.locale,
    };
    dispatch(addCurrentUser(user));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative mb-9">
        <input
          onKeyUp={() => {
            trigger("email");
          }}
          id="email"
          autoComplete="off"
          type="text"
          className={`border-solid border-b border-[#BBC3CF] font-600 pt-4 pb-2 peer w-full ${
            !errors.email && dirtyFields.email && watcher.email.length > 3
              ? "border-[#0DAFC0] border-b-2"
              : ""
          }`}
          {...register("email", {
            required: "Lütfen e-mail adresinizi giriniz.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter valid e-mail.",
            },
          })}
        />
        <label
          htmlFor="email"
          className={` cursor-text text-[#64738C] font-400  peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-xs transition-all select-none duration-300 absolute left-0  ${
            dirtyFields.email ? "bg-white -top-2.5 text-xs" : "top-4 text-base"
          } `}
        >
          E-mail
        </label>
      </div>
      <div className="relative mb-9">
        <input
          onKeyUp={() => {
            trigger("password");
          }}
          id="password"
          autoComplete="off"
          type={revealPwd ? "text" : "password"}
          className={`border-solid border-b border-[#BBC3CF] font-600 pt-4 pb-2 peer w-full  `}
          {...register("password", {
            required: "Please enter your password.",
          })}
        />
        <label
          htmlFor="password"
          className={` cursor-text text-[#64738C] font-400  peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-xs transition-all select-none duration-300 absolute left-0  ${
            dirtyFields.password
              ? "bg-white -top-2.5 text-xs"
              : "top-4 text-base"
          }`}
        >
          Password
        </label>
        <span
          onClick={() => setRevealPwd((prevState) => !prevState)}
          className="absolute right-6 cursor-pointer  top-4"
        >
          <ShowPassword width={15} height={15} fill={"#64738C"} />
        </span>
      </div>
      <div className="relative mb-9 cursor-pointer">
        <select
          value={watcher.locale}
          id="locale"
          autoComplete="off"
          className={`cursor-pointer border-solid border-b-2 border-[#64738C] font-600 pt-4 pb-2 peer w-full appearance-none`}
          {...register("locale", {
            required: "Please select your location.",
            validate: (value) => value !== "" || "Please select your location.",
          })}
          onChange={(e) => {
            setValue("locale", e.target.value);
            clearErrors("locale");
            trigger("locale");
          }}
        >
          <option selected key={1} value={"Türkiye"}>
            TR
          </option>
          <option key={2} value={"İngiltere"}>
            EN
          </option>
          <option key={3} value={"Amerika"}>
            US
          </option>
        </select>
        <label
          htmlFor="locale"
          className={` cursor-pointer text-[#64738C] font-400  peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-xs transition-all select-none duration-300 absolute left-0
          ${
            watcher.locale !== ""
              ? "bg-white -top-2.5 text-xs"
              : "top-4 text-base"
          }`}
        >
          Locale
        </label>
        <ArrowDown className="absolute right-2.5 top-6" />
      </div>
      <input
        disabled={isValid && isDirty ? false : true}
        className={`w-full text-sm text-white  font-bold    rounded-xl py-4 mb-4 hover:opacity-80 ${
          isValid && isDirty
            ? "bg-[#E82223] cursor-pointer"
            : "bg-[#BBC3CF] cursor-not-allowed "
        }`}
        value="Sign Up"
        type="submit"
      />
    </form>
  );
};
