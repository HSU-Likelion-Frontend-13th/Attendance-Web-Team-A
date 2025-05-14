import { useEffect, useState } from "react";
import dummyUser from "../data/dummyUser.json";

// 로그인 유효성 검사 훅
export const useValid = (form) => {
  const [errors, setErrors] = useState({ name: "", studentId: "" });
  const [isValid, setIsValid] = useState({ name: false, studentId: false });

  // ----- 이름 유효성 검사 -----
  useEffect(() => {
    const name = form.name.trim();

    // 아무것도 입력 안 한 경우
    if (name === "") {
      setErrors((prev) => ({ ...prev, name: "정보를 입력해 주세요" }));
      setIsValid((prev) => ({ ...prev, name: false }));
    }
    // 한글이 아닌 경우
    else if (!/^[가-힣]+$/.test(name)) {
      setErrors((prev) => ({ ...prev, name: "유효한 문자를 입력해 주세요" }));
      setIsValid((prev) => ({ ...prev, name: false }));
    }
    // 없는 이름인 경우
    else if (name !== dummyUser.name) {
      setErrors((prev) => ({
        ...prev,
        name: "입력하신 이름 정보가 일치하지 않습니다",
      }));
      setIsValid((prev) => ({ ...prev, name: false }));
    }
    // 로그인 성공
    else {
      setErrors((prev) => ({ ...prev, name: "" }));
      setIsValid((prev) => ({ ...prev, name: true }));
    }
  }, [form.name]);

  // ----- 학번 유효성 검사 -----
  useEffect(() => {
    const id = form.studentId.trim();

    // 아무것도 입력 안 한 경우
    if (id === "") {
      setErrors((prev) => ({ ...prev, studentId: "정보를 입력해 주세요" }));
      setIsValid((prev) => ({ ...prev, studentId: false }));
    }
    // 7자리 숫자가 아닌 경우
    else if (!/^\d{7}$/.test(id)) {
      setErrors((prev) => ({
        ...prev,
        studentId: "7자리 숫자를 입력해 주세요",
      }));
      setIsValid((prev) => ({ ...prev, studentId: false }));
    }
    // 학번이 틀린 경우
    else if (
      form.name === dummyUser.name &&
      id !== String(dummyUser.studentId)
    ) {
      setErrors((prev) => ({
        ...prev,
        studentId: "입력하신 학번 정보가 일치하지 않습니다",
      }));
      setIsValid((prev) => ({ ...prev, studentId: false }));
    }
    // 로그인 성공
    else {
      setErrors((prev) => ({ ...prev, studentId: "" }));
      setIsValid((prev) => ({ ...prev, studentId: true }));
    }
  }, [form.studentId, form.name]);

  return { errors, isValid };
};
