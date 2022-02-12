import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { createClient } from '@supabase/supabase-js';
import UserInfo from '../components/UserInfo';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pcGFqaXRodHVkZGFpeGNtbHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ2OTk4NjQsImV4cCI6MTk2MDI3NTg2NH0.nkdW1k3lWHqRGL3nLA0rCS9nLaoVEDHQRDEg0sBrnEs';
const SUPABASE_URL = 'https://mipajithtuddaixcmluq.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// senha: aluracord2022!

function ChatPage() {
  const [message, setMessage] = React.useState('');
  const [messageList, setMessageList] = React.useState([]);

  React.useEffect(() => {
    const supabaseData = supabaseClient.from('messages').select('*')
      .order('id', { ascending: false })
      .then(({ data }) => {
        setMessageList(data);
      });
  }, []);

  function handleSubmit(newMessage) {
    const message = {
      // id: messageList.length + 1,
      from: 'dandara-dias',
      text: newMessage,
    };

    supabaseClient.from('messages').insert([
      message
    ])
    .then(({ data }) => {
      setMessageList([data[0], ...messageList]);
    });

    setMessage('');
  }

  return (
    <Box
      styleSheet={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://wallpapercave.com/wp/wp6146839.jpg)`,
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000']
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: '100%',
          maxWidth: '95%',
          maxHeight: '95vh',
          padding: '32px',
          opacity: 0.5,
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px',
          }}
        >

          <MessageList messages={messageList} />
          {/* {messageList.map((currentMessage) => {
            return (
              <li key={currentMessage.id}>
                {currentMessage.from}: {currentMessage.text}
              </li>
            )
          })} */}
          <Box
            as="form"
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextField
              value={message}
              onChange={(event) => {
                const typedMessage = event.target.value;
                setMessage(typedMessage);
              }}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleSubmit(message);
                }
              }}
              placeholder="insira sua mensagem aqui"
              type="textarea"
              styleSheet={{
                width: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Button
              type='submit'
              iconName='arrowRight'
              onClick={(event) => {
                event.preventDefault();
                handleSubmit(message);
                }
              }
              styleSheet={{
                borderRadius: '25%',
                width: '45px',
                height: '42px',
                marginBottom: '8px',
                backgroundColor: appConfig.theme.colors.neutrals[400],
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function Header() {
  return (
    <>
      <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
        <Text variant='heading5'>
          Chat
        </Text>
        <Button
          variant='tertiary'
          colorVariant='neutral'
          label='Logout'
          href="/"
        />
      </Box>
    </>
  )
}

function MessageList(props) {
  const [userInfoState, setUserInfoState] = React.useState(false);
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: '16px',
      }}
    >
      {props.messages.map((message) => {
        return (
          <Text
            key={message.id}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              }
            }}
          >
            <Box
              styleSheet={{
                marginBottom: '8px',
              }}
            >
              <UserInfo isUserInfoOpen={userInfoState} user={message.from} />
              {/* <Image
                styleSheet={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '8px',
                }}
                src={`https://github.com/${message.from}.png`}
              /> */}
              <Text tag="strong">
                {message.from}
              </Text>
              <Text
                styleSheet={{
                  fontSize: '10px',
                  marginLeft: '8px',
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {(new Date().toLocaleDateString())}
              </Text>
            </Box>
            {message.text}
          </Text>
        );
      })}
    </Box>
  )
}

export default ChatPage;