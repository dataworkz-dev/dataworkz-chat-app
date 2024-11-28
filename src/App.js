import React from 'react';
import {Chatbot } from 'dataworkz-chat-app';
import './App.css'
const token = 'eyJhbGciOiJSUzI1NiJ9.eyJwcml2cyI6WyJhZG1pbiJdLCJmdW5jcyI6W10sInN1YiI6ImFzaGlzaCsxMEBkYXRhd29ya3ouaW8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwOTAvZGF0YXdvcmt6L3ZlcmlmeS9hcGlrZXkiLCJpc3MiOiJzZXJ2aWNlQWNjb3VudEBkYXRhd29ya3ouaW8iLCJpYXQiOjE3MjM2MzQwODZ9.PKRf4uUvYbDbuLc7V2fEptf7SwUlyUF4uNazCDm_MjeiKmTYonJJ2gtVkIAOSFjzrMx8erwx6HyVDMpOpOLeV030PVZwKr9r7WutiOw9RjWxnletw9Elb9kk5IgHy9UmcgQx4N1i_QUahIy_NWekM57nPxwEVF97NHT5800YE4fC2z1biFTzGgKwTIVHsQm_OHZ4Z9bk-EQ2Pjh9Vt4kZXZ_ltAUDkNTa7NjTF25JbSvUOHB6dIKD_fiKSVvWQEVCKs1ti7vt2DqZHMBmqkCD0H9lSyyvvt41b8c-hLESFFTvq_OWXYlScLkOXN_t1A_fbM7sO4d4zIFqV9ge2fRQQ'
const systemId="03bc10c9-3e2c-4db1-bb5b-3e9d88d65173";
const llmId="a1cf5a37-2032-4056-b6e0-ddd2acce487d";
const baseUrl = 'https://ragapps.dataworkz.com/api/qna/v1/systems/';
const enterpriseSearchId = "03bc10c9-3e2c-4db1-bb5b-3e9d88d65173";
const enterpriseSearchToken = 'eyJhbGciOiJSUzI1NiJ9.eyJwcml2cyI6WyJhZG1pbiJdLCJmdW5jcyI6W10sInN1YiI6ImFzaGlzaCsxMEBkYXRhd29ya3ouaW8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwOTAvZGF0YXdvcmt6L3ZlcmlmeS9hcGlrZXkiLCJpc3MiOiJzZXJ2aWNlQWNjb3VudEBkYXRhd29ya3ouaW8iLCJpYXQiOjE3MjM2MzQwODZ9.PKRf4uUvYbDbuLc7V2fEptf7SwUlyUF4uNazCDm_MjeiKmTYonJJ2gtVkIAOSFjzrMx8erwx6HyVDMpOpOLeV030PVZwKr9r7WutiOw9RjWxnletw9Elb9kk5IgHy9UmcgQx4N1i_QUahIy_NWekM57nPxwEVF97NHT5800YE4fC2z1biFTzGgKwTIVHsQm_OHZ4Z9bk-EQ2Pjh9Vt4kZXZ_ltAUDkNTa7NjTF25JbSvUOHB6dIKD_fiKSVvWQEVCKs1ti7vt2DqZHMBmqkCD0H9lSyyvvt41b8c-hLESFFTvq_OWXYlScLkOXN_t1A_fbM7sO4d4zIFqV9ge2fRQQ'
const enterpriseBaseUrl = 'https://ragapps.dataworkz.com/api/qna/v1/systems/';
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
