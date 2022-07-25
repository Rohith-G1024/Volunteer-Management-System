import React, { useEffect, useState } from "react";
//	import Student from "../../components/signUpHelpers/student";

function InputField({ value, setValue, label, placeHolder, index }) {
  let type = ["text", "email", "number", "date", "password", "password"];
  const [flag, setFlag] = useState(false);
  function toggle() {
    setFlag(!flag);
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <label className="text-gray-800" htmlFor={label}>
          {label}
        </label>
        {placeHolder.includes("*") && (
          <span className=" place-content-end">
            <button
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
        className="px-2"
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

  useEffect(() => {
    if (subType === "college") {
      setTypeValue(2);
      setFinalTypeValue(4);
    } else if (subType === "volunteer") {
      setTypeValue(1);
    }
  }, [subType]);

  useEffect(() => {
    if (type == "s") {
      setFinalTypeValue(1);
    } else if (type == "gi") {
      setFinalTypeValue(2);
    } else if (type == "sd") {
      setFinalTypeValue(3);
    }
  }, [type]);

  function onSubmit() {
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
      };
    }
    if (finalTypeValue == 4) {
      response = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        dob: dob,
        address: address,
      };
    }
    console.log("response", finalTypeValue, response);
  }

  return (
    <div
      className={`bg-blue-50 w-screen pt-[40px] h-${Math.max(
        "auto",
        "screen"
      )} mb-[10vh]`}
    >
      <div className="rounded ring-1 bg-blue-100 ml-[10vw] w-[75vw] grid place-items-center h-auto py-[5vh]">
        <div className="px-3 py-4 grid place-items-center text-3xl font-bold ">
          Fill the Signup form
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="px-5 py-2">
            <label htmlFor="type">Type</label>
            <select
              onChange={(e) => {
                setSubType(e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="volunteer">Volunteer</option>
              <option value="college">College</option>
            </select>
            {typeValue === 1 && (
              <div>
                <label htmlFor="type">Volunteer Type</label>
                <select
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
                      <label className="text-gray-800" htmlFor="college">
                        College Name
                      </label>
                      <select
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
                      <label className="text-gray-800" htmlFor="college">
                        Course
                      </label>
                      <select
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
                      <label className="text-gray-800" htmlFor="Profession">
                        Profession
                      </label>
                      <input
                        type="text"
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
                      <label className="text-gray-800" htmlFor="RepName">
                        Representative Name
                      </label>
                      <input
                        type="text"
                        value={repName}
                        onChange={(e) => {
                          setRepName(e.target.value);
                        }}
                        placeholder={"John Doe"}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-800" htmlFor="Profession">
                        Profession
                      </label>
                      <input
                        type="text"
                        value={profession}
                        onChange={(e) => {
                          setProfession(e.target.value);
                        }}
                        placeholder={"Doctor, Engineer, etc."}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-800" htmlFor="GroupSize">
                        Group Size
                      </label>
                      <input
                        type="number"
                        value={groupSize}
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
                  <label className="text-gray-800" htmlFor="Name">
                    College Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder={"PES"}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-800" htmlFor="email">
                    College Email ID
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder={"pes.pesu@edu"}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-800" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder={"PES, B'lore-560099"}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-800" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    placeholder={"+91-9888888888"}
                  />
                </div>
              </div>
            )}
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
