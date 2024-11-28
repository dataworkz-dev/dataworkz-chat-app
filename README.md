## Chat Application

This repo provides a sample chatbot powered by the Dataworkz RAG Builder that demonstrates the power of RAG on several datasets.
Jump here to learn more about [Dataworkz RAG Builder](#what-is-dataworkz)

# What is Dataworkz?
[Dataworkz](https://dataworkz.com) simplifies RAG app development for businesses. Dataworkz offers RAG as a Service so that you can build GenAI applications using proprietary data, utilizing either public LLM APIs or privately hosted open source foundation models.

## Dataworkz RAG Builder
Dataworkz’s RAG builder streamlines building GenAI applications to remove the complexity associated with stitching together a turnkey solution. A composable AI stack provides the ability to choose the vector database, embedding model, chunking strategy and LLM model. You have the flexibility use public LLM APIs including AWS Bedrock and OpenAI or host an open-source model in a VPC.

![](Dataworkz-RAG-Builder.png)

For Advanced RAG applications, Dataworkz provides the ability to combine lexical and semantic search with metadata filtering thereby enabling RAG apps to process large volumes of unstructured, semi-structured or structured data.

### Connecting to your data
Dataworkz connects to different sources of business data - SaaS services, relational databases, NoSQL databases, files stored in cloud object stores and provides no-code transformations to make proprietary data in any format ready for LLM applications. When combining data from multiple sources, you can also configure the precedence order for input sources used to build the context for generating LLM response. The complete list of connectors is available [here](https://www.dataworkz.com/connectors/). 

### API for embedding RAG into your application/workflows
RAG builder provides an API for any developer to embed GenAI applications into their existing workflow with complete flexibility to customize the look and feel. The sample application in this repo leverages this API for its functionality. We have a section on the API integration into this app as well as how to use it in your own applications.

### Hallucinations and RAG
The emergence of hallucinations presents a notable obstacle in the widespread adoption of Gen AI within enterprises. Dataworkz enables GenAI to reference its origins, consequently enhancing traceability. Read the Dataworkz  [blog](https://www.dataworkz.com/2023/12/21/how-to-evaluate-response-of-a-rag-empowered-llm/) on how Dataworkz evaluates the response of an LLM.

## API Usage Notes
In this section, we provide some developer notes on how the sample application was built and what [APIs](https://docs.dataworkz.com/product-docs/api) were used to power various sections. You can try out the API and Question and Answer system integrated into your own application. You can generate an API Key (if already generated, the same key can be used) and connect to this service.

## Steps to run this project.

1. Clone Repository dataworkz-chat-app using git clone `https://github.com/dataworkz-dev/dataworkz-chat-app` .

2. If required, install node.js for your platform (Node Version > 16.0.0).

3. run `npm install` to install all the dependencies for the project.

4. run `npm start` to run the project. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `Changing variables to access dataworkz api`

If you want to use any other QnA or any other llm model you would need to go inside src folder and then App.js. You'll find the component `<Chatbot systemId={systemId} llmId={llmId} token={token} baseUrl={baseUrl} enterpriseSearchId={enterpriseSearchId} enterpriseSearchToken={enterpriseSearchToken} enterpriseBaseUrl={enterpriseBaseUrl} enterpriseMetaDataField={enterpriseMetaDataField} />`.
You can change the variables as per your requirement. Description of the variable is added in the next section [Information about variables](#information-about-variables)

# Information about variables

1. token : this is the API key that can be generated using : [generate an API Key](https://docs.dataworkz.com/product-docs/api-key-generation/generate-api-key-in-dataworkz).
   Note: *The API key name has to be unique across all users so please choose a name accordingly.*
2. systemId : This is the ID of the Q&A system you'll be using. You can find this ID by using the API to get all Q&A systems. [get all Q&A systems](https://docs.dataworkz.com/product-docs/api#qna-v1-systems).
3. llmId : This is the ID of llm model you'll be using. Each Q&A system has llm models set up. You can find this ID by using the API to get all llm models for a specific Q&A system. [get all llm models for a specific Q&A system.](https://docs.dataworkz.com/product-docs/api#qna-v1-systems-systemid-llm-providers).
4. baseUrl : Url of the dataworkz web application. E.g: `https://ragapps.dataworkz.com/api/qna/v1/systems/`
5. enterpriseSearchId : This field is similar to systemId. This one is used for the enterprise search.
6. enterpriseSearchToken : This field is similar to token field. This one is used for enterprise search.
7. enterpriseBaseUrl : Url of the dataworkz web application. This one is used for enterprise search. E.g: `https://ragapps.dataworkz.com/api/qna/v1/systems/`
8. enterpriseMetaDataField : Metadata field which can be used to filter enterprise result.
