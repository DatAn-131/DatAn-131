const Profile = () => {
  const info = {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    maidenName: "Smith",
    age: 28,
    gender: "female",
    email: "emily.johnson@x.dummyjson.com",
    phone: "+81 965-431-3024",
    username: "emilys",
    password: "emilyspass",
    birthDate: "1996-5-30",
    image: "https://dummyjson.com/icon/emilys/128",
    bloodGroup: "O-",
    height: 193.24,
    weight: 63.16,
    eyeColor: "Green",
    hair: {
      color: "Brown",
      type: "Curly",
    },
    ip: "42.48.100.32",
    address: {
      address: "626 Main Street",
      city: "Phoenix",
      state: "Mississippi",
      stateCode: "MS",
      postalCode: "29112",
      coordinates: {
        lat: -77.16213,
        lng: -92.084824,
      },
      country: "United States",
    },
    macAddress: "47:fa:41:18:ec:eb",
    university: "University of Wisconsin--Madison",
    bank: {
      cardExpire: "03/26",
      cardNumber: "9289760655481815",
      cardType: "Elo",
      currency: "CNY",
      iban: "YPUXISOBI7TTHPK2BR3HAIXL",
    },
    company: {
      department: "Engineering",
      name: "Dooley, Kozey and Cronin",
      title: "Sales Manager",
      address: {
        address: "263 Tenth Street",
        city: "San Francisco",
        state: "Wisconsin",
        stateCode: "WI",
        postalCode: "37657",
        coordinates: {
          lat: 71.814525,
          lng: -161.150263,
        },
        country: "United States",
      },
    },
    ein: "977-175",
    ssn: "900-590-289",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
    crypto: {
      coin: "Bitcoin",
      wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      network: "Ethereum (ERC20)",
    },
    role: "admin",
  };
  return (
    <div>
      {/* Nav bar */}

      {/* Main */}
      <div className="container mx-auto min-h-[83vh] w-full max-w-5xl dark:text-white">
        <h1 className="text-4xl p-4 font-bold font-lora">Your Account</h1>
        <div className="font-karla grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 p-4">
          <img src={info?.image} alt="pp" className="text-center" />
          <table>
            <tbody>
              <tr>
                <td className="font-bold">Username</td>
                <td>{info?.username}</td>
              </tr>
              <tr>
                <td className="font-bold">First Name</td>
                <td>{info?.firstName}</td>
              </tr>
              <tr>
                <td className="font-bold">Last Name</td>
                <td>{info?.lastName}</td>
              </tr>
              <tr>
                <td className="font-bold w-32">Maiden Name</td>
                <td>{info?.maidenName}</td>
              </tr>
              <tr>
                <td className="font-bold">Email</td>
                <td>{info?.email}</td>
              </tr>
              <tr>
                <td className="font-bold">Phone</td>
                <td>{info?.phone}</td>
              </tr>
              <tr>
                <td className="font-bold">University</td>
                <td>{info?.university}</td>
              </tr>
              <tr>
                <td className="font-bold">Age</td>
                <td>{info?.age}</td>
              </tr>
              <tr>
                <td className="font-bold">Gender</td>
                <td>{info?.gender}</td>
              </tr>
              <tr>
                <td className="font-bold">Blood Group</td>
                <td>{info?.bloodGroup}</td>
              </tr>
            </tbody>
          </table>
          <div className="space-y-2">
            <div>
              <h1 className="font-bold">Address</h1>
              <p>{info?.address.address}</p>
              <p>
                {info?.address.city}, {info?.address.postalCode},{" "}
                {info?.address.state}
              </p>
            </div>
            <div>
              <h1 className="font-bold">Company</h1>
              <p>{info?.company.name}</p>
              <p>{info?.company.title}</p>
              <p>{info?.company.department}</p>
              <p>{info?.company.address.address}</p>
              <p>
                {info?.company.address.city}, {info?.company.address.postalCode}
                , {info?.company.address.state}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default Profile;
