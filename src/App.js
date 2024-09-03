import React from 'react';
import {Chatbot } from 'dataworkz-chat-app';
import './App.css'
const token = 'eyJhbGciOiJSUzI1NiJ9.eyJwcml2cyI6WyJhZG1pbiJdLCJmdW5jcyI6W10sInN1YiI6InNhY2hpbi5oZWppcEBkYXRhd29ya3ouaW8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwOTAvZGF0YXdvcmt6L3ZlcmlmeS9hcGlrZXkiLCJpc3MiOiJzZXJ2aWNlQWNjb3VudEBkYXRhd29ya3ouaW8iLCJpYXQiOjE3MjUyNTYzNzN9.fPJvMbWOHG_dzML-Q-Xd5Vxc-IceNmJsB3qtHp6t2Awkul1t5_Vao2NNvJzx2UZul-QonQTyjYts62kecWClmSpUo3P5iVPiC4mZeqIecvDHUoy5pfVNMJ8tAaiV4YJ3MoBeMdv3T6qN8ZF8c5aTElckpHVN_VAyjYQzYUiX09NWxTMkchYndOTwx0s9gnk_lyHysPzx2RAoDLxAq7e4Ou_xxrWT96qCi-ERS6XgoKPMMDUTihTpYcvjwSyJwXC-Zql-roEeB7FVxok8XnoZRUTlDW2cfE7vol6oxdNydZy5JH68MqDsVtsCnWuTFMCnQEqHqo3ZpD1VwMIrKL_Wpg'
const systemId="1e459343-a593-44fd-bb7d-54aeea0659e2";
const llmId="99ecafe6-1b0b-4333-b670-ebc84458fc1b";
const baseUrl = 'https://genai.dataworkz.com/api/qna/v1/systems/';
const enterpriseSearchId = "1e459343-a593-44fd-bb7d-54aeea0659e2";
const enterpriseSearchToken = 'eyJhbGciOiJSUzI1NiJ9.eyJwcml2cyI6WyJhZG1pbiJdLCJmdW5jcyI6W10sInN1YiI6InNhY2hpbi5oZWppcEBkYXRhd29ya3ouaW8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwOTAvZGF0YXdvcmt6L3ZlcmlmeS9hcGlrZXkiLCJpc3MiOiJzZXJ2aWNlQWNjb3VudEBkYXRhd29ya3ouaW8iLCJpYXQiOjE3MjUyNTYzNzN9.fPJvMbWOHG_dzML-Q-Xd5Vxc-IceNmJsB3qtHp6t2Awkul1t5_Vao2NNvJzx2UZul-QonQTyjYts62kecWClmSpUo3P5iVPiC4mZeqIecvDHUoy5pfVNMJ8tAaiV4YJ3MoBeMdv3T6qN8ZF8c5aTElckpHVN_VAyjYQzYUiX09NWxTMkchYndOTwx0s9gnk_lyHysPzx2RAoDLxAq7e4Ou_xxrWT96qCi-ERS6XgoKPMMDUTihTpYcvjwSyJwXC-Zql-roEeB7FVxok8XnoZRUTlDW2cfE7vol6oxdNydZy5JH68MqDsVtsCnWuTFMCnQEqHqo3ZpD1VwMIrKL_Wpg'
const enterpriseBaseUrl = 'https://genai.dataworkz.com/api/qna/v1/systems/';
const enterpriseMetaDataField = 'type';
const App = () => (
  
  <div>
    <div className='background-div'>
      <div>
        <img
          src="https://www.dataworkz.com/wp-content/uploads/2023/04/cropped-dw_logo-1.png"
          alt="Logo"
        />
      </div>
      <div>
        <div className='rag-div'>
          The fastest path to building a GenAI
          app using Retrieval Augmented Generation (RAG)
        </div>
        <div className='sub-div'>
          Our platform lets your AI teams to rapidly build, deploy, optimize and scale GenAI
          apps without the need to manage infrastructure or learn new developer skills.
        </div>
        <div className='button-div'>
        <Chatbot systemId={systemId} llmId={llmId} token={token} baseUrl={baseUrl} enterpriseSearchId={enterpriseSearchId} enterpriseSearchToken={enterpriseSearchToken}
          enterpriseBaseUrl={enterpriseBaseUrl} enterpriseMetaDataField={enterpriseMetaDataField} />
        </div>
      </div>
    </div>
    
    

  </div>
);

export default App;
