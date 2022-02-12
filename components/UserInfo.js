// src: https://github.com/jptsaikoski/aluracord/blob/main/src/components/UserInfo.js
import React from "react";
import { Box, Text, Image } from "@skynexui/components";
import appConfig from '../config.json';

function UserInfo(props) {
  const [isOpen, setIsOpen] = React.useState("");
  const [userState, setUserState] = React.useState("");
  const [userData, setUserData] = React.useState({
    name: "",
    followers: 0,
    location: "",
  });
  const isUserInfoOpen = props.isUserInfoOpen || false;
  const user = props.user;

  function getUserData(user) {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }

  return (
    <>
      <Image
        onClick={(event) => {
          setIsOpen(true);
          setUserState(user);
          getUserData(user);
        }}
        styleSheet={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          display: 'inline-block',
          marginRight: '8px',
          cursor: "pointer",
        }}
        src={`https://github.com/${user}.png`}
      />
      {isOpen && (
        <Box
          styleSheet={{
            zIndex: "1000",
            display: "flex",
            flexDirection: "column",
            borderRadius: "2px",
            position: "absolute",
            backgroundColor: appConfig.theme.colors.neutrals[800],
            width: {
              sm: "290px",
            },
            height: "300px",
            right: "20%",
            bottom: "50%",
            marginRight: {
              md: "-145px",
            },
            marginBottom: "-150px",
            backgroundColor: appConfig.theme.colors.neutrals["300"],
            border: "1px solid",
            borderColor: appConfig.theme.colors.neutrals["400"],
            padding: "2px",
            borderRadius: '2%',
          }}
        >
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "100%",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[100],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals["400"],
              borderTopColor: appConfig.theme.colors.neutrals["900"],
              borderRadius: '2%',
            }}
          >
            <Text
              styleSheet={{
                color: appConfig.theme.colors.neutrals["700"],
                fontWeight: "normal",
                marginBottom: "24px",
              }}
            >
              User info:
            </Text>

            <Box
              styleSheet={{
                marginBottom: "24px",
              }}
            >
              <Box
                onClick={() => {
                  setIsOpen(false);
                }}
                styleSheet={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  minWidth: "20px",
                  position: "relative",
                  backgroundColor: appConfig.theme.colors.neutrals["100"],
                  borderRadius: "50%",
                  border: "1px solid",
                  marginLeft: "0px",
                  borderColor: appConfig.theme.colors.primary["400"],
                  cursor: "pointer",
                }}
              >
                <Box
                  styleSheet={{
                    position: "absolute",
                    minWidth: "20px",
                    height: "1px",
                    transform: "rotate(45deg)",
                    backgroundColor: appConfig.theme.colors.primary["400"],
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                ></Box>
                <Box
                  styleSheet={{
                    position: "absolute",
                    minWidth: "20px",
                    height: "1px",
                    transform: "rotate(-45deg)",
                    backgroundColor: appConfig.theme.colors.primary["400"],
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                ></Box>
              </Box>
            </Box>

            <Box
              styleSheet={{
                width: "100%",
                maxHeight: "100%",
                display: "flex",
              }}
            >
              <Box
                tag="ul"
                styleSheet={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  height: "100%",
                }}
              >
                <Box
                  tag="li"
                  styleSheet={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "6px",
                  }}
                >
                  <Text
                    styleSheet={{
                      color: appConfig.theme.colors.neutrals["400"],
                      fontWeight: "normal",
                    }}
                  >
                    Name:
                  </Text>

                  <Text
                    styleSheet={{
                      color: appConfig.theme.colors.neutrals["700"],
                      fontWeight: "normal",
                    }}
                  >
                    {userData.name}
                  </Text>
                </Box>

                <Box
                  tag="li"
                  styleSheet={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "6px",
                  }}
                >
                  <Text
                    styleSheet={{
                      color: appConfig.theme.colors.neutrals["400"],
                      fontWeight: "normal",
                    }}
                  >
                    Username:
                  </Text>

                  <Text
                    styleSheet={{
                      color: appConfig.theme.colors.neutrals["700"],
                      fontWeight: "normal",
                    }}
                  >
                    <a
                      href={`https://github.com/${user}`}
                      target='_blank'
                      style={{"text-decoration": "none", "color": "inherit"}}
                    >
                      {user}
                    </a>
                  </Text>
                </Box>

                <Box
                  tag="li"
                  styleSheet={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "6px",
                  }}
                >
                  <Text
                    styleSheet={{
                      color: appConfig.theme.colors.neutrals["400"],
                      fontWeight: "normal",
                    }}
                  >
                    Followers:
                  </Text>

                  <Text
                    styleSheet={{
                      color: appConfig.theme.colors.neutrals["700"],
                      fontWeight: "normal",
                    }}
                  >
                    {userData.followers}
                  </Text>
                </Box>

                <Box
                  tag="li"
                  styleSheet={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "6px",
                  }}
                >
                  <Text
                    styleSheet={{
                      color: appConfig.theme.colors.neutrals["400"],
                      fontWeight: "normal",
                    }}
                  >
                    Location:
                  </Text>

                  <Text
                    styleSheet={{
                      color: appConfig.theme.colors.neutrals["700"],
                      fontWeight: "normal",
                    }}
                  >
                    {userData.location}
                  </Text>
                </Box>
              </Box>

              <Box
                styleSheet={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "50%",
                  maxHeight: "100%",
                  padding: "12px",
                }}
              >
                  <Image
                    styleSheet={{
                      borderRadius: "50%",
                      marginBottom: "16px",
                      border: "1px solid",
                      borderColor: appConfig.theme.colors.neutrals["400"],
                    }}
                    src={`https://github.com/${user}.png`}
                  />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default UserInfo;