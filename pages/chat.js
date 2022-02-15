import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { createClient } from '@supabase/supabase-js';
import UserInfo from '../components/UserInfo';
import { useRouter } from 'next/router';
import { ButtonSendSticker } from '../components/ButtonSendSticker';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pcGFqaXRodHVkZGFpeGNtbHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ2OTk4NjQsImV4cCI6MTk2MDI3NTg2NH0.nkdW1k3lWHqRGL3nLA0rCS9nLaoVEDHQRDEg0sBrnEs';
const SUPABASE_URL = 'https://mipajithtuddaixcmluq.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// senha: aluracord2022!

function realTimeMessages(addMessage) {
  return supabaseClient.from('messages').on('INSERT', (response) => {
    addMessage(response.new);
  })
    .subscribe();
}

function ChatPage() {
  const router = useRouter();
  const loggedUser = router.query.username;
  const [message, setMessage] = React.useState('');
  const [messageList, setMessageList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const supabaseData = supabaseClient.from('messages').select('*')
      .order('id', { ascending: false })
      .then(({ data }) => {
        setMessageList(data);
        setIsLoading(false);
      });

    realTimeMessages((newMessage) => {
      setMessageList((updatedList) => {
        return [newMessage, ...updatedList];
      });
    });
  }, []);

  function handleSubmit(newMessage) {
    const message = {
      // id: messageList.length + 1,
      from: loggedUser,
      text: newMessage,
    };

    supabaseClient.from('messages').insert([
      message
    ])
    .then(({ data }) => {});

    setMessage('');
  }

  return (
    <Box
      styleSheet={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://images2.alphacoders.com/463/thumb-1920-463654.png)`,
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000']
      }}
    >
     {isLoading ? ( // src: https://github.com/navegantes/aluracord-zencord/commit/6bb557aaae3a66802d5a356e379da9feee5601a3
        <>
          <Box
            as="span"
            className="waves"
            styleSheet={{
              position: "absolute",
              height: "130px",
              width: "130px",
              borderRadius: "1000px",
              animation: "shockwaves 2s ease-out infinite",
            }}
          />
          
          wibbly-wobbly timey-wimey stuff
        </>
      ) : (
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

            <ButtonSendSticker
              onStickerClick={(sticker) => {
                // console.log('[USANDO O COMPONENTE] Salva esse sticker no banco', sticker);
                handleSubmit(`:sticker: ${sticker}`);
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
                borderRadius: '50%',
                padding: '0 3px 0 0',
                minWidth: '50px',
                minHeight: '50px',
                margin: '1%', 
                backgroundColor: appConfig.theme.colors.neutrals[400],
              }}
            />
          </Box>
        </Box>
      </Box>
    )}
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
        overflow: 'auto',
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
              {message.from}
              {/* <Image
                styleSheet={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '8px',
                }}
                src={`https://github.com/${message.from}.png`}
              />
              <Text tag="strong">
                {message.from}
              </Text> */}
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
            {message.text.startsWith(':sticker:')
              ? (
                  <Image src={message.text.replace(':sticker:', '')} 
                    styleSheet={{
                      maxWidth: '200px',
                      maxHeight: '200px',
                    }}
                  />
                )
              : (
                  message.text
              )}
            {/* {message.text} */}
          </Text>
        );
      })}
    </Box>
  )
}

export default ChatPage;