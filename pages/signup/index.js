import React, { useEffect, useState } from "react";
//	import Student from "../../components/signUpHelpers/student";

function InputField({ value, setValue, label, placeHolder, index }) {
  let type = ["text", "email", "number", "date", "password", "password"];
  const [flag, setFlag] = useState(false);
  function toggle() {
    setFlag(!flag);
  }
  return (
    <div className="flex flex-col mx-[20vw] py-2">
      <div className="flex flex-row justify-between text-lg font-semibold">
        <label className="text-gray-800" htmlFor={label}>
          {label}
        </label>
        {placeHolder.includes("*") && (
          <span className=" place-content-end">
            <button
              className="px-2 py-1 mb-1 rounded hover:bg-blue-400 text-sm bg-blue-300"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              {flag ? "Hide" : "Show"}
            </button>
          </span>
        )}
      </div>

      <input
        className="px-2 mb-2 py-1 rounded-lg"
        type={flag ? "text" : type[index]} //placeHolder === "DD/MM/YYYY" ? "date" : "text"}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={placeHolder}
      ></input>
    </div>
  );
}

function Basic({ basic_input, Inputfield }) {
  return (
    <div>
      {[...basic_input].map((item, index) => {
        return <Inputfield key={index} index={index} {...item} />;
      })}
    </div>
  );
}

function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [subType, setSubType] = useState("");
  const [typeValue, setTypeValue] = useState(0);
  const [finalTypeValue, setFinalTypeValue] = useState(0);
  const [type, setType] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  //student
  const [collegeName, setCollegeName] = useState("");
  const [course, setCourse] = useState("");

  //General Individual
  const [profession, setProfession] = useState("");

  //Self Driven Groups
  const [repName, setRepName] = useState("");
  const [groupSize, setGroupSize] = useState(0);

  //College
  const [address, setAddress] = useState("");

  const basic_input = [
    { value: name, setValue: setName, label: "Name", placeHolder: "John Doe" },
    {
      value: email,
      setValue: setEmail,
      label: "Email ID",
      placeHolder: "johndoe@gmail.com",
    },
    {
      value: phone,
      setValue: setPhone,
      label: "Phone Number",
      placeHolder: "+91-1234567890",
    },
    {
      value: dob,
      setValue: setDob,
      label: "Date of Birth",
      placeHolder: "DD/MM/YYYY",
    },
    {
      value: password,
      setValue: setPassword,
      label: "Password",
      placeHolder: "********",
    },
    {
      value: confirmPassword,
      setValue: setConfirmPassword,
      label: "Confirm Password",
      placeHolder: "********",
    },
  ];

  // const collegeInput;

  useEffect(() => {
    if (subType === "college") {
      setTypeValue(2);
      setFinalTypeValue(4);
    } else if (subType === "volunteer") {
      setTypeValue(1);
    } else {
      setTypeValue(0);
    }
  }, [subType]);

  useEffect(() => {
    if (type == "s") {
      setFinalTypeValue(1);
    } else if (type == "gi") {
      setFinalTypeValue(2);
    } else if (type == "sd") {
      setFinalTypeValue(3);
    } else {
      setFinalTypeValue(0);
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhone("");
    setDob("");
    setGender("");
    setCollegeName("");
    setCourse("");
    setProfession("");
    setRepName("");
    setGroupSize(0);
    setAddress("");
  }, [type]);

  async function onSubmit() {
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    var response = {};
    if (finalTypeValue == 1) {
      response = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        dob: dob,
        collegeName: collegeName,
        course: course,
        type: finalTypeValue,
      };
    }
    if (finalTypeValue == 2) {
      response = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        dob: dob,
        profession: profession,
        type: finalTypeValue,
      };
    }
    if (finalTypeValue == 3) {
      response = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        dob: dob,
        repName: repName,
        groupSize: groupSize,
        type: finalTypeValue,
      };
    }
    if (finalTypeValue == 4) {
      response = {
        name: name,
        email: email,
        password: password,
        address: address,
        phone: phone,
        type: finalTypeValue,
      };
    }
    //console.log("response", finalTypeValue, response);
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    });
    const data = await res.json();
    console.log("response_data", data);
  }

  return (
    <div
      className={`bg-blue-50 w-screen pt-[40px] h-${
        !typeValue && !finalTypeValue ? "screen" : "auto"
      } pb-[${finalTypeValue ? "90" : "10"}vh]`}
    >
      <div className="rounded ring-1 bg-blue-100 ml-[10vw] w-[75vw]  place-items-center h-auto py-[5vh]">
        <div className="px-3 py-4 grid place-items-center text-3xl font-bold ">
          Fill the Signup form
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="px-5 py-2 ">
            <label
              className="text-lg font-semibold pt-2 ml-[20vw] -mr-[18vw]"
              htmlFor="type"
            >
              Type
            </label>
            <select
              className="px-2 mb-2 py-1 rounded-lg  mx-[20vw]"
              onChange={(e) => {
                setSubType(e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="volunteer">Volunteer</option>
              <option value="college">College</option>
            </select>
            {typeValue === 1 && (
              <div className="mt-5">
                <label
                  className="text-lg font-semibold pt-2 ml-[20vw] -mr-[18vw]"
                  htmlFor="type"
                >
                  Volunteer Type
                </label>
                <select
                  className="px-2 mb-2 py-1 rounded-lg  mx-[20vw]"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value="">Select</option>
                  <option value="s">Student</option>
                  <option value="gi">General Individual</option>
                  <option value="sd">Self Driven Group</option>
                </select>
                {finalTypeValue === 1 && (
                  <div>
                    <Basic basic_input={basic_input} Inputfield={InputField} />
                    <div className="flex flex-col">
                      <label
                        className="text-gray-800 text-lg font-semibold pt-2 mx-[20vw]"
                        htmlFor="college"
                      >
                        College Name
                      </label>
                      <select
                        className="px-2 mb-2 py-1 rounded-lg  mx-[20vw]"
                        onChange={(e) => {
                          setCollegeName(e.target.value);
                        }}
                      >
                        <option value="">Select</option>
                        <option value="bms">BMS</option>
                        <option value="pes">PES</option>
                        <option value="rv">RV</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="text-gray-800 text-lg font-semibold pt-2 mx-[20vw]"
                        htmlFor="college"
                      >
                        Course
                      </label>
                      <select
                        className="px-2 mb-2 py-1 rounded-lg  mx-[20vw]"
                        onChange={(e) => {
                          setCourse(e.target.value);
                        }}
                      >
                        <option value="">Select</option>
                        <option value="cse">cse</option>
                        <option value="ece">ece</option>
                        <option value="me">me</option>
                      </select>
                    </div>
                  </div>
                )}
                {finalTypeValue === 2 && (
                  <div>
                    <Basic basic_input={basic_input} Inputfield={InputField} />
                    <div className="flex flex-col">
                      <label
                        className="text-gray-800 text-lg font-semibold pt-2 mx-[20vw]"
                        htmlFor="Profession"
                      >
                        Profession
                      </label>
                      <input
                        type="text"
                        className="px-2 mb-2 py-1 rounded-lg  mx-[20vw]"
                        value={profession}
                        onChange={(e) => {
                          setProfession(e.target.value);
                        }}
                        placeholder={"Doctor, Engineer, etc."}
                      />
                    </div>
                  </div>
                )}
                {finalTypeValue === 3 && (
                  <div>
                    <Basic basic_input={basic_input} Inputfield={InputField} />
                    <div className="flex flex-col">
                      <label
                        className="text-gray-800 text-lg font-semibold pt-2 mx-[20vw]"
                        htmlFor="RepName"
                      >
                        Representative Name
                      </label>
                      <input
                        type="text"
                        value={repName}
                        className="px-2 mb-2 py-1 rounded-lg  mx-[20vw]"
                        onChange={(e) => {
                          setRepName(e.target.value);
                        }}
                        placeholder={"John Doe"}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="text-gray-800 text-lg font-semibold pt-2 mx-[20vw]"
                        htmlFor="Profession"
                      >
                        Profession
                      </label>
                      <input
                        type="text"
                        value={profession}
                        className="px-2 mb-2 py-1 rounded-lg  mx-[20vw]"
                        onChange={(e) => {
                          setProfession(e.target.value);
                        }}
                        placeholder={"Doctor, Engineer, etc."}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="text-gray-800 text-lg font-semibold pt-2 mx-[20vw]"
                        htmlFor="GroupSize"
                      >
                        Group Size
                      </label>
                      <input
                        type="number"
                        value={groupSize}
                        className="px-2 mb-2 py-1 rounded-lg  mx-[20vw]"
                        onChange={(e) => {
                          setGroupSize(e.target.value);
                        }}
                        placeholder={"5"}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
            {typeValue === 2 && (
              <div>
                <div className="flex flex-col">
                  <label
                    className="text-gray-800 text-lg font-semibold pt-2 mx-[20vw]"
                    htmlFor="Name"
                  >
                    College Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    className="px-2 mb-2 py-1 rounded-lg mx-[20vw]"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder={"PES"}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-gray-800 text-lg font-semibold pt-2 mx-[20vw]"
                    htmlFor="email"
                  >
                    College Email ID
                  </label>
                  <input
                    type="text"
                    value={email}
                    className="px-2 mb-2 py-1 rounded-lg mx-[20vw]"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder={"pes.pesu@edu"}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-gray-800 text-lg font-semibold pt-2 mx-[20vw]"
                    htmlFor="email"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    className="px-2 mb-2 py-1 rounded-lg mx-[20vw]"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder={"********"}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-gray-800 text-lg font-semibold pt-2 mx-[20vw]"
                    htmlFor="email"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    className="px-2 mb-2 py-1 rounded-lg mx-[20vw]"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    placeholder={"********"}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-gray-800 text-lg font-semibold pt-2 mx-[20vw]"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    className="px-2 mb-2 py-1 rounded-lg mx-[20vw]"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder={"PES, B'lore-560099"}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-gray-800 text-lg font-semibold pt-2 mx-[20vw]"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    value={phone}
                    className="px-2 mb-2 py-1 rounded-lg mx-[20vw] "
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    placeholder={"+91-9888888888"}
                  />
                </div>
              </div>
            )}
            {typeValue && finalTypeValue ? (
              <input
                className={` ${
                  !typeValue && !finalTypeValue && "hidden"
                } grid ml-[34vw] mt-2 hover:scale-105 hover:bg-green-700 hover:text-white duration-200 place-items-center p-2 bg-green-400 rounded`}
                type="submit"
              />
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
