# SkyDeck.ai LLM Ready Documentation

*Generated at 2024-11-28 19:07:42 PST. Available as raw content at [skydeckai-llm-ready-documentation.md](https://raw.githubusercontent.com/skydeckai/skydeckai-webflow/refs/heads/docs/skydeckai-llm-ready-documentation.md).*

This document provides a comprehensive, consolidated reference of SkyDeck.ai's documentation, optimized for large language model (LLM) consumption. It combines various documentation sources into a single, easily accessible format, facilitating efficient information retrieval and processing by AI systems.

```
==> SUMMARY.md <==
# Table of contents

* [SkyDeck.ai](README.md)
* [GenStudio Workspace](genstudio-workspace/README.md)
  * [Conversations](genstudio-workspace/conversations.md)
  * [Sharing and Collaboration](genstudio-workspace/sharing-and-collaboration.md)
  * [Slack Synchronization](genstudio-workspace/slack-synchronization.md)
  * [Public Snapshots](genstudio-workspace/public-snapshots.md)
  * [Web Browsing](genstudio-workspace/web-browsing.md)
  * [Document Upload](genstudio-workspace/document-upload.md)
  * [Tools](genstudio-workspace/tools/README.md)
    * [Pair Programmer](genstudio-workspace/tools/pair-programmer/README.md)
      * [How to Use](genstudio-workspace/tools/pair-programmer/how-to-use.md)
      * [Example – Python Script Assistance](genstudio-workspace/tools/pair-programmer/example-python-script-assistance.md)
    * [SQL Assistant](genstudio-workspace/tools/sql-assistant/README.md)
      * [How to Use](genstudio-workspace/tools/sql-assistant/how-to-use.md)
      * [Example – Query Debugging](genstudio-workspace/tools/sql-assistant/example-query-debugging.md)
    * [Legal Agreement Review](genstudio-workspace/tools/legal-agreement-review/README.md)
      * [How to Use](genstudio-workspace/tools/legal-agreement-review/how-to-use.md)
      * [Example – NDA Clause](genstudio-workspace/tools/legal-agreement-review/example-nda-clause.md)
    * [Teach Me Anything](genstudio-workspace/tools/teach-me-anything/README.md)
      * [How to Use](genstudio-workspace/tools/teach-me-anything/how-to-use.md)
      * [Example – Intro to Programming](genstudio-workspace/tools/teach-me-anything/example-intro-to-programming.md)
    * [Strategy Consultant](genstudio-workspace/tools/strategy-consultant/README.md)
      * [How to Use](genstudio-workspace/tools/strategy-consultant/how-to-use.md)
      * [Example – Employee Retention](genstudio-workspace/tools/strategy-consultant/example-employee-retention.md)
    * [Image Generator](genstudio-workspace/tools/image-generator/README.md)
      * [How to Use](genstudio-workspace/tools/image-generator/how-to-use.md)
      * [Example – Winter Wonderland](genstudio-workspace/tools/image-generator/example-winter-wonderland.md)
  * [Data Security](genstudio-workspace/data-security/README.md)
    * [Data Loss Prevention](genstudio-workspace/data-security/data-loss-prevention.md)
* [Use Cases](use-cases/README.md)
  * [Creating a Privacy Policy](use-cases/creating-a-privacy-policy.md)
* [Developers](developers/README.md)
  * [Develop Your Own Tools](developers/develop-your-own-tools/README.md)
    * [JSON format for Tools](developers/develop-your-own-tools/json-format-for-tools.md)
    * [JSON Format for LLM Tools](developers/develop-your-own-tools/json-format-for-llm-tools.md)
    * [Example: Text-based UI Generator](developers/develop-your-own-tools/example-text-based-ui-generator.md)
    * [JSON Format for Smart Tools](developers/develop-your-own-tools/json-format-for-smart-tools.md)
* [Control Center](control-center/README.md)
  * [Admin & Owner Tools](control-center/admin-and-owner-tools.md)
  * [Setup Guide](control-center/setup-guide/README.md)
    * [Set Up Account](control-center/setup-guide/set-up-account.md)
    * [Set Up Integrations](control-center/setup-guide/set-up-integrations/README.md)
      * [Integration Assistance](control-center/setup-guide/set-up-integrations/integration-assistance.md)
    * [Set Up Security](control-center/setup-guide/security/README.md)
      * [Authentication (SSO)](control-center/setup-guide/security/authentication-setup.md)
    * [Organize Teams](control-center/setup-guide/organize-teams/README.md)
      * [Add New Group](control-center/setup-guide/organize-teams/add-new-group.md)
      * [Remove Groups](control-center/setup-guide/organize-teams/remove-groups.md)
    * [Curate Tools](control-center/setup-guide/curate-tools/README.md)
      * [System Tools](control-center/setup-guide/curate-tools/system-tools.md)
      * [Assign Tags](control-center/setup-guide/curate-tools/assign-tags.md)
    * [Manage Members](control-center/setup-guide/manage-members/README.md)
      * [Add Members](control-center/setup-guide/manage-members/add-members.md)
      * [Import File](control-center/setup-guide/manage-members/import-file.md)
      * [Invite Members](control-center/setup-guide/manage-members/invite-members.md)
      * [Edit Members](control-center/setup-guide/manage-members/edit-members.md)
* [Integrations](integrations/README.md)
  * [LLMs and Databases](integrations/llms-and-databases/README.md)
    * [Anthropic Integration](integrations/llms-and-databases/anthropic-integration.md)
    * [Database Integration](integrations/llms-and-databases/database-integration.md)
    * [Groq Integration](integrations/llms-and-databases/groq-integration.md)
    * [HuggingFace Integration](integrations/llms-and-databases/huggingface-integration.md)
    * [Mistral Integration](integrations/llms-and-databases/mistral-integration.md)
    * [OpenAI Integration](integrations/llms-and-databases/openai-integration.md)
    * [Perplexity Integration](integrations/llms-and-databases/perplexity-integration.md)
    * [Together AI Integration](integrations/llms-and-databases/together-ai-integration.md)
    * [Vertex AI Integration](integrations/llms-and-databases/vertex-ai-integration.md)
  * [App Integrations](integrations/app-integrations/README.md)
    * [Rememberizer Integration](integrations/app-integrations/rememberizer-integration.md)
    * [Slack Integration](integrations/app-integrations/slack-integration.md)
* [Notices](notices/README.md)
  * [Terms of Use](notices/terms-of-use.md)
  * [Privacy Policy](notices/privacy-policy.md)
  * [Cookie Notice](notices/cookie-notice.md)
* [Releases](releases/README.md)
  * [Nov 29th, 2024](releases/nov-29th-2024.md)
  * [Nov 22nd, 2024](releases/nov-22nd-2024.md)
  * [Nov 15th, 2024](releases/nov-15th-2024.md)
  * [Nov 8th, 2024](releases/nov-8th-2024.md)
  * [Nov 1st, 2024](releases/nov-1st-2024.md)
  * [Oct 25th, 2024](releases/oct-25th-2024.md)
  * [Oct 18th, 2024](releases/oct-18th-2024.md)
  * [Oct 11th, 2024](releases/oct-11th-2024.md)
  * [Oct 4th, 2024](releases/oct-4th-2024.md)
  * [Sep 27th, 2024](releases/sep-27th-2024.md)
  * [Sep 20th, 2024](releases/sep-20th-2024.md)
  * [Sep 13th, 2024](releases/sep-13th-2024.md)
  * [Sep 6th, 2024](releases/sep-6th-2024.md)
  * [Aug 23rd, 2024](releases/aug-23rd-2024.md)
  * [Aug 16th, 2024](releases/aug-16th-2024.md)
  * [Aug 9th, 2024](releases/aug-9th-2024.md)
  * [Aug 2nd, 2024](releases/aug-2nd-2024.md)
  * [Jul 26th, 2024](releases/jul-26th-2024.md)
  * [Jul 12th, 2024](releases/jul-12th-2024.md)
  * [Jul 5th, 2024](releases/jul-5th-2024.md)
  * [Jun 28th, 2024](releases/jun-28th-2024.md)
  * [Jun 21st, 2024](releases/jun-21st-2024.md)
  * [Nov 12th 2023](releases/nov-12th-2023.md)
  * [Nov 6th 2023](releases/nov-6th-2023.md)
  * [Oct 30th 2023](releases/oct-30th-2023.md)
  * [Oct 23th 2023](releases/oct-23th-2023.md)
  * [Oct 16th 2023](releases/oct-16th-2023.md)
  * [Sep 18th 2023](releases/sep-18th-2023.md)
  * [Sep 8th 2023](releases/sep-8th-2023.md)
* [Security](security/README.md)
  * [SkyDeck.ai Security Practices](security/skydeck.ai-security-practices.md)
  * [Bug Bounty Program](security/bug-bounty-program.md)
* [AI Documentations](ai-documentations/README.md)
  * [LLM Evaluation Report](ai-documentations/llm-evaluation-report.md)
  * [SkyDeck.ai LLM Ready Documentation](ai-documentations/skydeckai-llm-ready-documentation.md)


==> README.md <==
---
description: How to get the most out of your generative AI workspace.
---

# SkyDeck.ai

We've put together some helpful guides for you to get set up with our product quickly and easily. GenStudio is the SkyDeck.ai workspace where everyone can interact in a conversational "chat" fashion with the tools and models available to them in their organization. You might find the experience similar to one you have had using OpenAI's ChatGPT.

© 2023 SkyDeck AI Inc.

###


==> integrations/README.md <==
# Integrations



==> integrations/llms-and-databases/huggingface-integration.md <==
---
description: Using SkyDeck.ai as the front end for your HuggingFace models.
---

# HuggingFace Integration

After deploying your inference endpoint on HuggingFace, you should see the following user interface:

<figure><img src="../../.gitbook/assets/Screenshot 2023-09-25 at 10.08.46.png" alt=""><figcaption></figcaption></figure>

On this page, you will need the following information:

* Endpoint URL
* Model Repository
* API token. You can view this by checking the "Add API token" box in the Call Examples code block.

In addition to these, you will also need the context window of your model. This can be found on the model's information page.

After collecting this information, format it into JSON as shown in the example below:

||CODE_BLOCK||json
{
    "api_key":"your_api_key",
    "endpoint": "your_api_endpoint",
    "model_name": "meta-llama/Llama-2-7b-chat-hf",
    "context_window": 4096
}
||CODE_BLOCK||

Next, paste this into the Credential field of your integration.

<figure><img src="../../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

Once the credential is successfully validated, you should see your HuggingFace model listed in GenStudio's model list:

<figure><img src="../../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

### Scaling HuggingFace Endpoints to Zero

Scaling to 0 is a dynamic feature offered by Inference Endpoints, designed to optimize resource utilization and costs. By intelligently monitoring request patterns and reducing the number of replicas to none during idle times, it ensures that you only use resources when necessary.

However, this does introduce a cold start period when traffic resumes, and there are a few considerations to be mindful of. For an in-depth look at how this feature functions, its benefits, and potential challenges, please refer to [HuggingFace's guide on Autoscaling](https://huggingface.co/docs/inference-endpoints/autoscaling).

### Supported models

At the moment, we only support endpoints for models with a `text-generation` tag that are deployed as `text-generation-inference` containers. We are working to expand our list of supported models.

<figure><img src="../../.gitbook/assets/image (48).png" alt=""><figcaption><p>LLaMA 2 is a model with Text Generation tag</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (49).png" alt=""><figcaption><p>Make sure you select Text Generation Inference as the container type during deployment</p></figcaption></figure>


==> integrations/llms-and-databases/perplexity-integration.md <==
# Perplexity Integration

### Overview

Perplexity is an advanced AI language model that leverages large language models to provide comprehensive and factual responses, making it a powerful tool for various applications, including content generation, language translation, summarization, and more.

### Generating a Perplexity API Key

To integrate Perplexity with the SkyDeck AI Platform, you need to generate an API key:

1. **Create an Account**: Register for a free account on the [Perplexity website](https://www.perplexity.ai/).
2. **Access API Keys**:
   * Log in to your Perplexity account.
   * Navigate to the settings.
   * Click on the API tab.
3. **Generate a New Key**:
   * Click on the "+ Generate" button to create a new API key.

### Adding the API Key to SkyDeck AI

To integrate Perplexity with SkyDeck AI, follow these steps:

1. **Log in to SkyDeck AI**: Access your SkyDeck AI Admin account.
2. **Navigate to Integrations**: Go to the integrations page.
3. **Add Perplexity Integration**:
   * Click the "+Add Integration" button.
   * Select "Perplexity" from the list of available integrations.
   * Enter your Perplexity API Key.
   * Configure any additional settings, such as selecting the desired Perplexity model.
4. **Save and Confirm**: After entering the API key and configuring settings, click "Save" to complete the integration.

### Supported Models

Perplexity offers several models, each optimized for different use cases and performance requirements. The latest models (as of September 2024) that SkyDeck supports:

#### Online Models

* **`llama-3.1-sonar-small-128k-online`**: Suitable for general online queries with moderate complexity.
* **`llama-3.1-sonar-large-128k-online`** and **`llama-3.1-sonar-huge-128k-online`** : Designed for more complex online queries requiring deeper contextual understanding.

#### Chat Models

* **`llama-3.1-sonar-small-128k-chat`**: Ideal for chat-based interactions with moderate complexity.
* **`llama-3.1-sonar-large-128k-chat`**: Optimized for more complex chat-based interactions.

### Verification of Successful Integration

After integrating Perplexity with the SkyDeck AI Platform, you should see Perplexity models available for selection in your SkyDeck AI GenStudio. The presence of these models indicates a successful integration.

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

### Conclusion

Integrating Perplexity with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models to deliver accurate and reliable answers. Ensure you stay updated with the latest models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Perplexity Documentation](https://docs.perplexity.ai/) or contact their support team.


==> integrations/llms-and-databases/openai-integration.md <==
---
description: OpenAI (ChatGPT) integration with the SkyDeck AI Platform
---

# OpenAI Integration

## **OpenAI Integration with the SkyDeck AI Platform**

\
ChatGPT is an AI-powered chatbot developed by OpenAI. It is based on the GPT-4 language model and can generate human-like text, translate languages, and write different kinds of creative content. ChatGPT is a powerful tool for a variety of applications. OpenAI is a non-profit research company that develops and deploys AI in a safe and responsible way. Integrating with SkyDeck AI will give you access to all current models of ChatGPT.

### **Generating an OpenAPI API Key**

\
To use the OpenAI API, you need to generate an API key by following these 3 simple steps:

1. Create a free account on the OpenAI website by signing up here: [https://beta.openai.com/signup. ↗](https://beta.openai.com/signup) You can use your Google or Microsoft account to sign up, or create an account using an email/password combination.
2. Once you've signed up, visit your OpenAI key page here: [https://beta.openai.com/account/api-keys, ↗](https://beta.openai.com/account/api-keys) or click the menu item "View API keys."
3. Click the "Create new secret key" button to generate a new API key. This key gives you access to both GPT-4 and ChatGPT models, so you don't need separate API keys.

All done! Once you have your API key, you can use ChatGPT's LLM in the SkyDeck AI Platform.

### **Adding the API Key to the SkyDeck AI Control Center**

API Keys are added to the Control Center Integrations Screen

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you are signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or click on the “Integrations” in the menu
3. Click on “+Add Integrations” button and enter your API Key as instructed.

That’s it! You can now use the powerful SkyDeck AI tools and directly access the GPT-4 and ChatGPT models.

NOTE: You will be charged based on your monthly usage of the ChatGPT API. The cost structure is based on the number of tokens used, with 750 words (approximately 1000 tokens) being the minimum chargeable unit. The cost per 1000 tokens varies depending on the model used, with the current ChatGPT default model being GPT-3.5 Turbo. As of July 2023 you can start experimenting with $5 in free credit that can be used during your first 3 months. ChatGPT pricing for general use is very low, but if you plan to use the service regularly, you must add your credit card information and are advised to set up a usage limit on the OpenAI website.

OpenAPI ChatGPT Pricing [https://openai.com/pricing ↗](https://openai.com/pricing)


==> integrations/llms-and-databases/README.md <==
# LLMs and Databases



==> integrations/llms-and-databases/mistral-integration.md <==
# Mistral Integration

## Overview

Mistral is an AI research company that focuses on developing cutting-edge large language models with a strong emphasis on efficiency and scalability. Their mission is to make frontier AI ubiquitous, and to provide tailor-made AI to all the builders. This requires fierce independence, strong commitment to open, portable and customizable solutions, and an extreme focus on shipping the most advanced technology in limited time.

## Generating a Mistral API Key

To use the Mistral API, you need to generate an API key by following these simple steps:

1. Go to **La Plateforme** of Mistral at [https://console.mistral.ai/](https://console.mistral.ai/) and sign in. If you don't have an account, you can sign up there.
2. Once you have signed in, go to **API Keys**. Please note that you need to set up a [Billing Plan](https://console.mistral.ai/billing/) first to generate and use Mistral API keys.
3. Click on the **Create new key** button to generate a new API key. Provide a name and an expiration day for the token. Copy the token for later use as it will not be shown again.

All done! Once you have your API key, you can use Mistral's LLMs in the SkyDeck AI Platform.

{% hint style="info" %}
Note that the API key may take a few minutes to be usable, so you might see an error message if you immediately add it into the Control Center. Wait a few minutes after generating an API key before integrating Mistral with SkyDeck AI.
{% endhint %}

## Adding the API Key to the SkyDeck AI Control Center

API Keys are added to the Control Center Integrations Screen.

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you have signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or select **Integrations** in the sidebar.
3. In the LLM Integration page, click on the **Add Integration** button, choose Mistral as the Integration Service and enter your API Key in the Credentials key.

<figure><img src="../../.gitbook/assets/mistral-integration.png" alt="" width="563"><figcaption></figcaption></figure>

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Mistral's models.

## Conclusion

Integrating Mistral with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models from Mistral to deliver accurate and reliable answers. Ensure you stay updated with the latest Mistral's models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Mistral Documentation](https://docs.mistral.ai/) or contact their support team.


==> integrations/llms-and-databases/together-ai-integration.md <==
---
description: Together AI integration with the SkyDeck AI Platform
---

# Together AI Integration

## **Together AI Integration with the SkyDeck AI Platform**

Together AI hosts a wide range of open source large language models on their platform. Integrating with SkyDeck AI will give you access to all the chat models of Together AI.

### **Generating a Together AI API Key**

\
To use the Together AI API, you need to generate an API key by following these 3 simple steps:

1. Create a free account on the Together AI website by signing up here: [https://api.together.xyz/](https://api.together.xyz/).&#x20;
2. Once you've signed up, visit your API key page here: [https://api.together.xyz/settings/api-keys](https://api.together.xyz/settings/api-keys). You should find your API key.
3. Once you have your API key, you can use Together AI's LLM in the SkyDeck AI Platform.

### **Adding the API Key to the SkyDeck AI Control Center**

API Keys are added to the Control Center Integrations Screen

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you are signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or click on the “Integrations” in the menu
3. Click on “+Add Integrations” button, select Together AI as the integration service, and enter your API Key in the Credential field.

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Together AI models.

NOTE: You will be charged based on your monthly usage of the Together AI API. The cost structure is based on the number of tokens used. For more details on their pricing policy, visit [https://api.together.xyz/playground](https://api.together.xyz/playground).


==> integrations/llms-and-databases/database-integration.md <==
---
description: Integration with Amazon AWS hosted databases.
---

# Database Integration

## **Purpose**

\
By adding one or more integrations to public or private databases you enable advanced apps and other capabilities to securely query your data using the power of AI agents.

### **Support**

SkyDeck AI currently supports Postgresql databases and Redshift datawarehouses hosted on AWS. It is not particularly hard to support other data sources, but we did have to start somewhere. If you have another data source you wish to use, please reach out to support to prioritize an integration that meets your needs.

### **Directions**

**The following are the steps to integrate your database with SkyDeck AI:**

1. Obtain or put together a connection URL.
2. Add the connection URL to the Integrations section in Control Center.
3. Assign that integration to a smart tool or AI agent in the Tools section of Control Center.

### Connection URL

If you are lucky, a database admin hands you a ready-to-use standard URL that points to your database. If not, you will need to put one together to add access SkyDeck access to your database. These directions will make that task rather easy.

\
\
To set up a connection URL to a PostgreSQL or Amazon Redshift database hosted on Amazon AWS, you need several pieces of information about your database: the host, port number, database name, username, and password. Here's a step by step guide:

#### PostgreSQL Database

1. **Host**: This is the address of the server where your database is hosted. It should be something like `your-db-instance-name.region-name.rds.amazonaws.com` for AWS RDS PostgreSQL or `your-cluster-name.region-name.redshift.amazonaws.com` for Amazon Redshift.
2. **Port Number**: This is the port on which your database server is listening. The default port for PostgreSQL is 5432, and for Amazon Redshift, it's 5439.
3. **Database Name**: This is the name of the database you want to connect to.
4. **Username & Password**: These are the credentials you need to authenticate with the database.

The general format of a connection URL is as follows:

||CODE_BLOCK||
protocol://username:password@host:port/database
||CODE_BLOCK||

Here's how you can create a connection URL:

1.  Start with the protocol, which is 'postgresql' for PostgreSQL and 'redshift' for Amazon Redshift:

    ||CODE_BLOCK||
     postgresql://
    ||CODE_BLOCK||
2.  Next, add your username and password, separated by a colon. If your username or password includes special characters, you'll need to URL encode them. For example, if your username is 'user' and your password is 'pass', it becomes:

    ||CODE_BLOCK||
     postgresql://user:pass@
    ||CODE_BLOCK||
3.  Then, add your host and port, separated by a colon:

    ||CODE_BLOCK||
     postgresql://user:pass@your-db-instance-name.region-name.rds.amazonaws.com:5432/
    ||CODE_BLOCK||
4.  Finally, add your database name:

    ||CODE_BLOCK||
     postgresql://user:pass@your-db-instance-name.region-name.rds.amazonaws.com:5432/your-database-name
    ||CODE_BLOCK||

That's it! You've created your connection URL. Be sure to replace 'user', 'pass', 'your-db-instance-name.region-name.rds.amazonaws.com', '5432', and 'your-database-name' with your actual database details.

Remember not to share this URL with anyone, as it contains sensitive information like your username and password.

#### RedShift DWH

The URL for a Redshift database would be very similar, but with a couple of key differences:

1. The protocol would be 'jdbc:redshift' instead of 'postgresql'. This is because JDBC (Java Database Connectivity) is commonly used to connect with Redshift databases.
2. The default port for Redshift is 5439, not 5432.

Here's the general format for a Redshift connection URL:

||CODE_BLOCK||
jdbc:redshift://host:port/database
||CODE_BLOCK||

So, if you were to create a connection URL for Redshift, it would look something like this:

||CODE_BLOCK||
jdbc:redshift://user:pass@your-cluster-name.region-name.redshift.amazonaws.com:5439/your-database-name
||CODE_BLOCK||

Remember to replace 'user', 'pass', 'your-cluster-name.region-name.redshift.amazonaws.com', '5439', and 'your-database-name' with your actual database details.

### Adding Your Integration

Paste your connection URL in the "Credentials" section of Add Integration. You can select PostgreSQL for either a postgresql or Redshift database. You can use any name you want for the Integration, but we suggest you pick something that will help you identify the specific database associated.

<figure><img src="../../.gitbook/assets/Add a DB Integration to Control Center.png" alt=""><figcaption></figcaption></figure>

### Accessing Your Data Through SkyDeckAI

Today users can access your database using the Analyst tools available to them in GenStudio. As an admin you can assign an integration to an analyst tool in Control Center's Tools section. You can then assign tags to that tool to ensure only authorized people have access to that tool and its database access in their SkyDeck AI GenStudio workspace.

<figure><img src="../../.gitbook/assets/Adding a DB Integration to Analyst Bob.png" alt=""><figcaption><p>Add a database integration to a tool that supports it in order to share access with your members of your organization.</p></figcaption></figure>

#### Security Notes

* Create a read-only user (role) on your database to use with your SkyDeck AI integration. SkyDeck does not need write to your system and it is safest if you use credentials that do not have more rights than necessary. However, the user should be able to query the structure of your data system in order to understand it.
* Do not share the access URL as it contains confidential connection information.
* You can limit which users in your organization have access to each database by ensuring that tools that use it, such as a copy of Analyst Bob, are assigned tags that correspond only to uers who you wish to have access.


==> integrations/llms-and-databases/groq-integration.md <==
# Groq Integration

## Overview

Groq is revolutionizing the landscape of artificial intelligence with its fast AI inference capabilities, designed to empower developers and enterprises with instant intelligence. GroqCloud allows seamless integration with openly-available models like Llama 3.1, enabling users to harness the power of AI with minimal latency. With its innovative Language Processing Unit (LPU), Groq delivers unparalleled speed, affordability, and energy efficiency, fundamentally transforming how AI models are deployed in the cloud and on-premises. By making advanced AI technology accessible to all, Groq is driving a new wave of innovation, productivity, and discovery, while maintaining a commitment to open-source principles.

## Generating a Groq API Key

To use the Groq API, you need to generate an API key by following these simple steps:

1. Go to **GroqCloud** at [https://console.groq.com/](https://console.groq.com/) and sign in. If you don't have an account, you can sign up there.
2. Once you have signed in, go to **API Keys**. You can use a Free Plan with low rate limits APIs, or you can upgrade to higher plans for large-scale needs.
3. Click on the **Create API key** button to generate a new API key. Provide a name for the token. Copy the token for later use as it will not be shown again.

All done! Once you have your API key, you can use Groq's LLMs in the SkyDeck AI Platform.

## Adding the API Key to the SkyDeck AI Control Center

API Keys are added to the Control Center Integrations Screen.

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you have signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or select **Integrations** in the sidebar.
3. In the LLM Integration page, click on the **Add Integration** button, choose Groq as the Integration Service and enter your API Key in the Credentials key.

<figure><img src="../../.gitbook/assets/groq-integration.png" alt="" width="563"><figcaption></figcaption></figure>

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Groq's models.

## Conclusion

Integrating Groq with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models from Groq to deliver accurate and reliable answers. Ensure you stay updated with the latest models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Groq Documentation](https://console.groq.com/docs/) or contact their support team.


==> integrations/llms-and-databases/vertex-ai-integration.md <==
# Vertex AI Integration

## Overview

Vertex AI is a fully-managed, unified AI development platform for building and using generative AI. Access and utilize Vertex AI Studio, Agent Builder, and 150+ foundation models. After integrating Skydeck.AI with Vertex AI, you will be able to use the Gemini models from Google in your workspace.

## Generating a service account credential

To enable Vertex AI and generate the necessary credential, you can follow these steps:

1. **Set up your Google Cloud account:** Go to the [Google Cloud Console](https://console.cloud.google.com/) and sign in with your Google account.
2. **Select a project:** At the top of the page, click on the project dropdown and select an existing project. If you don’t have a project, you’ll need to create one by clicking on "New Project" and following the prompts.
3. **Enable Vertex AI API:** Go to the [APIs & Services Dashboard](https://console.cloud.google.com/apis/dashboard) (you can choose it from the Menu in the Google Cloud Console), click on the "**+ ENABLE APIS AND SERVICES**" button, search for "**Vertex AI API**" in the API Library, and then enable the API for your project. Please note that Vertex AI API requires a project with a billing account, so you have to set it up [here](https://console.cloud.google.com/billing). You will be charged based on your usage of Vertex AI, so please refer to [their documentation](https://cloud.google.com/vertex-ai) for the latest updates.
4. **Create a Service Account and get the credential:** Go to the **IAM & Admin** section to create a new service account, assign the appropriate role to use Vertex AI (typically the Vertex AI Administrator role), and then generate a JSON key. You can visit this [link](https://developers.google.com/workspace/guides/create-credentials#service-account) for more details. Save the key securely and see the following section to add it to SkyDeck.AI platform. Here is a sample JSON key:

||CODE_BLOCK||json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "your-private-key",
  "client_email": "the-email-of-the-service-account",
  "client_id": "the-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "your-client_x509_cert_url",
  "universe_domain": "googleapis.com"
}
||CODE_BLOCK||

## Adding the credential to SkyDeck AI

API Keys are added to the Control Center Integrations Screen

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you have signed in, visit the your Integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or select **Integrations** on the sidebar.
3. In the LLM Integration page, click on the **Add Integration** button, choose **VertexAI** as the Integration Service, and enter your entire JSON Key in the Credentials field.

<figure><img src="../../.gitbook/assets/vertex-ai-integration (1).png" alt="" width="563"><figcaption></figcaption></figure>

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Gemini models.

## Conclusion

Integrating Vertex AI with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models from Google to deliver accurate and reliable answers. Ensure you stay updated with the latest Gemini models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs) or contact their support team.


==> integrations/llms-and-databases/anthropic-integration.md <==
# Anthropic Integration

## Overview

Anthropic is an AI research organization focused on building reliable and interpretable artificial intelligence systems that prioritize safety and alignment with human values. The company is dedicated to addressing the ethical and safety challenges posed by increasingly powerful AI systems, working to ensure that their models behave predictably and in accordance with human intentions.

Anthropic's LLMs, notably the "Claude" series, are designed to process and generate human-like text for a wide range of applications, including natural language understanding, reasoning, and dialogue. These models are developed with a focus on safety and usability, incorporating mechanisms to prevent harmful or biased outputs. As Anthropic continues to evolve its LLMs, it remains committed to creating AI systems that are transparent, interpretable, and aligned with ethical standards, making them useful for both commercial and research purposes.

## Generating an Anthropic API Key

To use the Anthropic API, you need to generate an API key by following these simple steps:

1. Go to the Anthropic Console at [https://console.anthropic.com/](https://console.anthropic.com/) and sign in. If you don't have an account, you can sign up there.
2. Once you have signed in, go to **Settings** and select [**API keys**](https://console.anthropic.com/account/keys).
3. Click the **Create Key** button to generate a new API key. Provide a name and a workspace for that key. Copy the token for later use as it will not be shown again.

All done! Once you have your API key, you can use Anthropic's LLMs in the SkyDeck AI Platform.

## Adding the API Key to the SkyDeck AI Control Center

API Keys are added to the Control Center Integrations Screen.

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you have signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or select **Integrations** in the sidebar.
3. In the LLM Integration page, click on the **Add Integration** button, choose Anthropic as the Integration Service and enter your API Key in the Credentials key.

<figure><img src="../../.gitbook/assets/anthropic-integration.png" alt="" width="563"><figcaption></figcaption></figure>

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Claude models.

## Conclusion

Integrating Anthropic with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models from Anthropic to deliver accurate and reliable answers. Ensure you stay updated with the latest Claude models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Anthropic Documentation](https://docs.anthropic.com/) or contact their support team.


==> integrations/app-integrations/README.md <==
# App Integrations



==> integrations/app-integrations/rememberizer-integration.md <==
# Rememberizer Integration

### Introduction

GenStudio offers two types of Rememberizer integrations: one for individual members and another for an entire workspace through the Control Center. This guide provides a comprehensive overview of both integration processes, enhancing search and memory capabilities across your workspace.

<figure><img src="../../.gitbook/assets/email masked.png" alt=""><figcaption></figcaption></figure>

### Steps to Authorize Rememberizer in GenStudio (Individual Members)

#### Step 1: Connect to Rememberizer

1. Go to the Rememberizer authorization page by clicking "Add account" to go to the Rememberizer authorization page.
2. Review the permissions that GenStudio will access, such as Mementos and Memory.

<figure><img src="../../.gitbook/assets/email masked 2.png" alt=""><figcaption></figcaption></figure>

#### Step 2: Configure Mementos

1. Select the "Change" option next to Memento.
2. Choose or create a new memento from the available list.
3. Confirm your selection.

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

#### Step 3: Set Memory Preferences

1. Click on "Change" next to Memory.
2. Select your preferred memory settings (e.g., Read All/Write Own).
3. Confirm the settings

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

#### Step 4: Authorize

1. Once you've configured your settings, click "Authorize" to complete the connection.

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

### Steps to Authorize Rememberizer in Control Center (Workspace-Wide)

#### Step 1: Access Integrations

1. Navigate to the **Integrations** section.
2. Click on the **Apps** tab.
3. Locate "Rememberizer" and click **Add**.

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

#### Step 2: Follow Authorization Steps

* The authorization process will follow the same steps as for individual members.
* Once authorized, Rememberizer will be available for the entire workspace.

### Rememberizer Integration Usage

Once authorized, SkyDeck will:

* Automatically call the Rememberizer API. For more details, please visit the [Rememberizer API Documentation](https://docs.rememberizer.ai/developer/api-documentations).
* Use the response to enhance interactions with the language model (e.g., GPT 4o).

#### Contextual LLM Integration

* The retrieved information is used to improve responses. For example, asking "What is my account?" will provide personalized details using Rememberizer's context.

<figure><img src="../../.gitbook/assets/email masked 3 (1).png" alt=""><figcaption></figcaption></figure>

### Conclusion

By following this guide, you can effectively integrate and utilize Rememberizer within GenStudio, leveraging advanced search capabilities and personalized memory sharing to enhance your application experience.


==> integrations/app-integrations/slack-integration.md <==
# Slack Integration

To further enhance team collaboration, you can integrate Slack with Skydeck.ai to let your GenStudio conversations go directly to your Slack channel. This allows your team to collaborate seamlessly.

### Enable Slack from the Control Center

You must have admin access of your Slack workspace to perform this action. In the **Integrations** section of your Control Center, choose **Apps**, and then click the **Add** button of Slack.

<figure><img src="../../.gitbook/assets/image (57) (1).png" alt=""><figcaption></figcaption></figure>

After that, you will be redirected to a new page where you can allow SkyDeck.ai to access your Slack workspace. Click Allow and then check the Control Center again to check if Slack has been added successfully. This step is only required by the GenStudio workspace owner or admins. The following step can be done by any user in your workspace.

### Add SkyDeck.ai app to a Slack channel

In your Slack workspace, choose any channel that you want to receive GenStudio conversation messages, and add the **SkyDeck.ai** app to that channel. The channel can be public or private, and each one will have a different way to connect to Slack.

<figure><img src="../../.gitbook/assets/image (58) (1).png" alt=""><figcaption></figcaption></figure>

### Send messages to a public channel

For public channels, SkyDeck.ai has already been able to see all of them after you connect Slack in the Control Center, so you don't have to configure more. Any user in your GenStudio Workspace can choose to connect their conversations to a public Slack channel. Here are the steps they need to do:

1. Choose a conversation in the left sidebar and enable [Collaboration](../../genstudio-workspace/sharing-and-collaboration.md)
2. Toggle the **Share to Slack** button
3. In the **Pick a channel** dropdown, choose a public channel. Ensure that SkyDeck.ai app has been added to that channel as discussed in the previous section.
4. Click the **Send** button next to the dropdown. If successful, you will see new messages in that Slack channel posted by SkyDeck.ai. If you have not added the app, you will see a message right under the dropdown explaining why.

<figure><img src="../../.gitbook/assets/image (59).png" alt=""><figcaption></figcaption></figure>

### Authorize Slack to send messages to a private channel

For private channels, each user will have to authorize with Slack. The steps are slightly different:

1. Choose a conversation in the left sidebar and enable [Collaboration](../../genstudio-workspace/sharing-and-collaboration.md)
2. Toggle the **Share to Slack** button
3. In the **Authorized applications**, click **Authenticate** right next to Slack. The user will be redirected to a new page to authorize Slack.

<figure><img src="../../.gitbook/assets/image (60).png" alt=""><figcaption></figcaption></figure>

4. If the authorization succeeds, the **Pick a channel** dropdown will now contain additional private channels that the user is in and has the SkyDeck.ai app. User can now connect their private channel with a GenStudio conversation.

<figure><img src="../../.gitbook/assets/image (61).png" alt=""><figcaption></figcaption></figure>

### Disconnect the channel

In both cases, if you want to disconnect the channel and the conversation, you can either click the red <mark style="color:red;">**End share**</mark> button in the popup above, or remove the SkyDeck.ai app from that channel.

<figure><img src="../../.gitbook/assets/image (62).png" alt=""><figcaption><p>Click the End share button at the below right corner of the popup</p></figcaption></figure>


==> control-center/admin-and-owner-tools.md <==
---
description: Control Center
---

# Admin & Owner Tools

The Control Center is a part of the Skydeck.ai system, located at admin.skydeck.ai that is intended for use by account owners and designated administrators. This is where an owner sets up their account and from where they invite users into this system. The Control Center is not normally accessed by users of the GenStudio workspace, although owners and admins may choose to use both. This is the first part of the Skydeck.ai system that is seen by account owners. They may, however, quickly move on to a pre-configured trial of the GenStudio workspace before returning to the Control Center to really get started.


==> control-center/README.md <==
---
description: How to get quickly setup with your control center.
---

# SkyDeck AI Control Center

We've put together some helpful guides for you to get set up with our product quickly and easily.\
\
You can sign in to the Control Center to administer your account, billing, integration, tool allocation and users (members) by going to admin.skydeck.ai and signing in with an Admin or Owner account such as the one you set up when first encountering SkyDeck AI.\
\
At [docs.skydeck.ai/genstudio](https://docs.skydeck.ai/genstudio) you can learn more about interacting with models using the SkyDeck AI user workspace we call GenStudio. You can reach your organization or company's workspace by going to your\_company\_domain.skydeck.ai where your\_company\_domain was the sub-domain name set up by the account owner during the onboarding process.

©2023 SkyDeck AI Inc.


==> control-center/setup-guide/set-up-account.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Set Up Account

From the **Account** page, you can select the **Company Profile** or **Billing** tabs.

<figure><img src="../../.gitbook/assets/admin-account.png" alt=""><figcaption></figcaption></figure>

***

### Account Information

Within the **Company Profile** tab, you can fill out the following fields:

* **Account Name** – Add your company name
* **Subdomain** – Select the subdomain you would like to use for SkyDeck AI — for example, google.skydeck.ai
* **Timezone** – Choose the appropriate timezone
* **Upload your logo** – Upload a PNG or JPEG image that is at least 100x100 pixels and less than 10MB in size.

<figure><img src="../../.gitbook/assets/admin-account-2.png" alt="" width="375"><figcaption></figcaption></figure>

When these four fields are complete, click **Save**. The page will then update to provide a link to your current workspace URL.

<figure><img src="https://lh6.googleusercontent.com/wRmj6kbqQaPY2yiFexvYjJIloet9K6Zi2ZZYaEONtMbRygmW02cGSjEt4DRthL_Er5ajQClssfUCqMYKmSww1Q1_qB9n3vLKS0XhNR5c5Ri_CsdfJaqpxp5vjR-nfh87ahPb_zLQzr6Tx_D6rpFv9xM" alt=""><figcaption></figcaption></figure>


==> control-center/setup-guide/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Setup Guide

Upon creating your SkyDeck AI account, you'll be introduced to the Setup Guide. This guide outlines the 5 core steps that ensure you get the most out of your SkyDeck AI experience. Whenever you need a refresher or want to check your progress, the Setup Guide is there to assist.

* [**Set Up Account**](set-up-account.md)
* [**Set Up Integrations**](set-up-integrations/)
* [**Set Up Security**](security/)
* [**Organize Teams**](organize-teams/)
* [**Curate Tools**](curate-tools/)
* [**Manage Members**](manage-members/)

<figure><img src="../.gitbook/assets/startup.png" alt=""><figcaption></figcaption></figure>


==> control-center/setup-guide/organize-teams/add-new-group.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Add New Group

Click on the **Add tag** button and a popup will appear. Provide a name for a high level group within your organization. Press **Enter** or click on the Add button to create the tag.

<figure><img src="../../../.gitbook/assets/admin-tags-2.png" alt="" width="563"><figcaption></figcaption></figure>

***

> **Tip** – Create one or two high level groups, then add a new group with more tags if you need more granular access control.


==> control-center/setup-guide/organize-teams/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Organize Teams

In SkyDeck.AI Control Center, tags are a way to organize the members of your company. A tag (or group) represents a team within your organization. You can assign a tag to a member or a tool, and members can only use tools that are assigned the same tag.

Select **Organize** from the sidebar. From this page, you can create tags to define and structure various teams within your organization. You will notice that the **All** tag already exists and cannot be removed. This is the default tag that applies to all members of your organization.

<figure><img src="../../../.gitbook/assets/admin-tags-1.png" alt=""><figcaption></figcaption></figure>


==> control-center/setup-guide/organize-teams/remove-groups.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Remove Groups

If you need to remove specific tags, click on the **Trash** icon next to the tag name and confirm the deletion. This action will also remove all the tag associations and cannot be undone.

<figure><img src="../../../.gitbook/assets/admin-tags-3.png" alt="" width="563"><figcaption></figcaption></figure>


==> control-center/setup-guide/manage-members/edit-members.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Edit Members

After adding members to your workspace, you can manage them such as changing displayed names, assigning tags, revoking accesses, etc. Each action may be available or not depending on the selected members and their current states (which is implied by their Guide actions).

### Change displayed name

You can change the name of any member after they are added to your workspace. Select one member from the list, click on the **Edit** button, change the user's name and click **Save**.

<figure><img src="../../../.gitbook/assets/edit-members-1.png" alt="" width="563"><figcaption></figcaption></figure>

### Assign Admin role

A member can be granted the admin role, and they will be able to access Control Center of your organization. Select one member from the list, click on the **Edit** button, toggle the **Administrator role** button and click **Save**. Then that user can sign in the Control Center and manage the account.

<figure><img src="../../../.gitbook/assets/edit-members-2.png" alt="" width="563"><figcaption></figcaption></figure>

### Assign tags

[Tags (or groups)](../organize-teams/) are used to curate which [AI tools](../curate-tools/system-tools.md) are accessible by whom. They can also provide groups for analytics and reporting. Members can be assigned multiple tags. Typically tags will define roles or departments in your organization.

There are 2 ways to assign tags to a user.

You can directly assign or remove tags of a user on the member list. Choose one member (without needing to select the checkbox), and in the **Tags** column, click the "+" icon. You can then see the current tags assigned to that member and will be able to assign or remove the tags by simply checking/unchecking the tags. The All tag is enabled by default for all members.

<figure><img src="../../../.gitbook/assets/edit-members-3.png" alt="" width="563"><figcaption><p>Assign tags on the member list</p></figcaption></figure>

The second way is to select a member by clicking a checkbox next to their name and click on the **Edit** button. You can then see the same interface as the above option, and you can manage the tags similarly. Once changes are complete, click **Save**.

<figure><img src="../../../.gitbook/assets/admin-members-5.png" alt="" width="563"><figcaption><p>Assigning tags in Edit popup</p></figcaption></figure>

Removing every tag from a member will remove their access to all tools and remove them from all reporting groups. You might wish to do this to limit access to a minimal level. Or to remove a member from global reports. Reports can still be produced for such members by naming them explicitly.

### Revoke access

You can revoke access of your members from GenStudio Workspace, after which they won't be able to it anymore. Select one or several invited members, click on the **Revoke** button and confirm the action. When the access is revoked, the user is still in the member list with the Guide action of **Invite**. You might want to invite them again later, so they are not removed completely.

### Delete a member

If you want to completely remove some members, select them and click on the **Delete** button. Once deleted, they will not appear on the list anymore. You will have to re-add them later if you want to using the [Add member](add-members.md) button.

### Transfer ownership

If the owner wish to transfer the ownership of the account to another user, they can select one admin and click on the **Transfer Ownership** button.


==> control-center/setup-guide/manage-members/import-file.md <==
---
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Import File

Before you import, check that your CSV file has the **name** and **email** fields in the following format:

<figure><img src="https://lh6.googleusercontent.com/UWhLOPa6UdBzO66s17El9htjl_JHS95Y4shkQ9nvuHYo8NlUdvAodSZ8nZ5zNgZbFEg2tjvdRZUm4SFP1rKmXNzoO-zRUzT275VOUNeVqTmyr-2ILt0hfkihnavR3BNzg26VUDHyXklms0eOzTC7Le8" alt=""><figcaption></figcaption></figure>

> **Tip** – Your file must be in CSV format or SkyDeck AI will not accept your import.

***

Select **Import File** tab in the Add member popup. Then click **Upload File** from the pop-up window and locate your CSV file.

<figure><img src="../../../.gitbook/assets/admin-members-3.png" alt="" width="563"><figcaption></figcaption></figure>

If the import is successful, you will see a **Success banner** at the top of the screen, and the page will populate with the new members' information.

{% hint style="info" %}
You can optionally include a third field named **tags** in the CSV file to assign tags to the added members. If not, you can [assign them later](edit-members.md).
{% endhint %}


==> control-center/setup-guide/manage-members/invite-members.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Invite Members

After adding members to SkyDeck.AI, they are not able to use your workspace yet. Their current Guide action is **Invite**, which indicates that you as an admin or owner will have to invite them by sending an email.

To invite members to use the [GenStudio workspace](https://eastagile.skydeck.ai/), check the first box next to **Name and Email** to select all members or select individual checkboxes for individual members. Then, the **Invite** button will appear at the top of the page. Click on that button to send email invites to all of the selected members.

In the pop-up window, click **Confirm**.

<figure><img src="../../../.gitbook/assets/admin-members-4.png" alt="" width="563"><figcaption></figcaption></figure>

After that, their Guide action will change to **Wait**, which means that you will be waiting for the members' responses. You can also resend the emails for those users if they miss their previous emails. After a member completes their signup process, their Guide action will change to **OK**, and they will be able to access your GenStudio workspace. You cannot resend an email to a member with Guide action of OK.

If the previous link expires, the Guide action will change to **Re-invite**. For more details about each Guide action, please refer to [.](./ "mention").


==> control-center/setup-guide/manage-members/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Manage Members

## Overview

Select **Members** from the sidebar. From this page, you can manually add members, import member files, send invites to members, and assign tags to members.

<figure><img src="../../../.gitbook/assets/admin-members-1.png" alt=""><figcaption><p>Add people to Members to invite them and manage their roles in your SkyDeck AI</p></figcaption></figure>

At the top of the screen you will see guidance about your account in terms of having enough paid seats to invite more members.

## Available Actions

The buttons (Add Member, Export members, Transfer Ownership, Edit, Invite, Revoke, Delete, Cancel) will be active or inactive depending on whether they are relevant to the members you have checked (or not checked) in the list below.

If you have not selected any members then relevant actions at the moment will be to add a single person via email or import a csv file of people to invite, and to export the current members of your workspace.

If you have selected one or more member, some actions are available on the list page such as inviting or revoking access. More advanced features that take up more space to work with are found using the **Edit** button. In particular, this is where Role and Tags can be changed to manage permissions within Control Center and access to tools and integrations via the GenStudio workspace.

All these actions will be discussed more in the following sections, which explain what can be done in the Members page.

## Guide action

In the list of members, pay particular attention to the **Guide** column. This provides a quick suggestion about what you should do next with that particular person.

There are different Guide actions:

1. When a member is added, the Guide action is **Invite**. We need to invite that member.
2. When a member is invited, the Guide action is **Wait**. We need to wait for that member to accept their email invitation.
3. When a member accepts their invitation, the Guide action is **OK**. It is ok now, we don't need to do anything more.
4. When a member's invitation expires, the Guide action is **Re-invite**. We need to re-invite them by sending another email.
5. When a member is revoked, they are still in the list, and the Guide action is back to Invite because you might want to invite them again next.

## Roles

A member can have one or multiple roles, each granting different levels of access to the Control Center and GenStudio Workspace. The roles are defined as follows:

* Member: Grants access to the GenStudio Workspace, provided the user has been invited and has set up their account.
* Admin: Provides access to the Control Center, enabling the management of the account, integrations, security, tags, tools, and members.
* Owner: Includes all admin permissions, plus the ability to manage billing, delete the account, and transfer ownership to another admin.


==> control-center/setup-guide/manage-members/add-members.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Add Members

Click on the **Add members** button on the Members page and then enter the new member’s **Name** and **Email**. You can also [Import a file](import-file.md) to add multiple members at the same time.

<figure><img src="../../../.gitbook/assets/admin-members-2.png" alt="" width="563"><figcaption></figcaption></figure>


==> control-center/setup-guide/set-up-integrations/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Set Up Integrations

Head back to the Setup Guide and click **Add Integration** or select **Integrations** from the sidebar. On the Integrations page, click on the **Add Integrations** button.

<figure><img src="../../../.gitbook/assets/admin-integrations-1.png" alt="" width="563"><figcaption></figcaption></figure>

In the **Add Integration** pop-up window, fill out the following fields:

* **Integration Service** – Choose an LLM service such as OpenAI, VertexAI, Anthropic... or a database service from the dropdown menu.
* **Integration Name** – Create a recognizable name for your integration.
* **Credentials** – Enter your [API credentials](integration-assistance.md).

<figure><img src="../../../.gitbook/assets/admin-integrations-2.png" alt="" width="563"><figcaption></figcaption></figure>


==> control-center/setup-guide/set-up-integrations/integration-assistance.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Integration Assistance

When you select a service (LLM or SQL database), a prompt labeled **Where can I get these credentials?** will appear. This is a dynamic link that directs you to the specific documentation for the selected service, guiding you on how to generate or find your API key.

As you switch between LLM Services, the link updates accordingly, ensuring you always have quick access to the right information within SkyDeck AI.

<figure><img src="../../../.gitbook/assets/admin-integrations-3.png" alt="" width="563"><figcaption></figcaption></figure>

This information on public pay-as-you-go conversational services is also linked here for easy reference:

* [**OpenAI**](../../../integrations/llms-and-databases/openai-integration.md)
* [**Vertex**](https://developers.google.com/workspace/guides/create-credentials#service-account)
* [**Anthropic**](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)
* [**HuggingFace**](../../../integrations/llms-and-databases/huggingface-integration.md)


==> control-center/setup-guide/security/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Set Up Security

Select **Security** from the sidebar.



==> control-center/setup-guide/security/authentication-setup.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Authentication Setup Guide

## Guidance

The members you invite to use the GenStudio workspace need to authenticate themselves when they initially sign up and when they later sign in. You can choose one or more allowed methods that are consistent with the way users normally identify themselves in your organization. Enterprise Single Sign On (SSO) methods are available in advanced plans.

### Google Authentication

If your organization has assigned IDs to your team such as Jane.Doe@yourcompany.com then you should use one (and just one) of our SSO methods. If your organization is a Google Workspace user then choose “Google” as an allowed authentication method.

### Microsoft Authentication

Choose “Azure AD” if your organization uses Microsoft’s enterprise Azure AD (Active Directory) authentication service (soon to start being called Microsoft Entra ID). This usually applies to business or academic deployments of Microsoft oriented SSO. Do not confuse this with the Microsoft individual consumer authentication method called “Microsoft Account” assigned to individuals when they sign up for Outlook.com, Microsoft 365, Xbox, etc. A consumer Microsoft account holder will not be able to sign in with Azure AD.

With Azure Active Directory, Microsoft provides the identity platform as a service but you can modify some of the configuration and settings, such as adding your own custom domain name (to get @yourcompany.com) or requiring multi-factor authentication. Your Azure Active Directory instance is available via the Azure Portal and other management tools like PowerShell, the Azure CLI and the REST API.

### Pick One SSO

If yours is a Google workspace shop, pick Google athentication. If yours is a Microsoft identity service shop, pick AD. This is the “Single” in SSO. It is the way you would primarily want members to sign in and sign up.

### Alternate Authentication

If you do not have any single source of identity, or use a method we do not support (contact us and let us know) then you might choose multiple methods or all methods for authentication. Or if members will join your GenStudio workspace who are not part of your regular organization you will need to choose alternative authentication methods for them to use.

Generally, if your organization uses Microsoft Azure AD, you might choose email or email and Google as supported authentication. If your organization uses Google authentication, you might add email to allowed options.

One downside to allowing alternative authentication methods is that some of your organization members might become confused and try to sign in with an alternative method. You might find it easier to manage allowing only your primary authentication method and providing identities (email addresses) to outside users you invite to your workspace.

**TL;DR**

- Email: Useful for 3rd party users or for hetrogeneous teams.
- Azure AD: The primary choice for organizations with enterprise Microsoft authentication.
- Google: Useful for 3rd party users, hetrogeneous teams, or organizations using Google Workspace.


==> control-center/setup-guide/curate-tools/system-tools.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# System Tools

SkyDeck AI's [GenStudio workspace](https://eastagile.skydeck.ai/) comes with several default AI tools. Here's a quick overview of these tools to help you understand how to set up your permissions.

<table data-full-width="false"><thead><tr><th width="190" align="center">Icon</th><th width="190.33333333333331" align="center">Name</th><th align="center">Description</th></tr></thead><tbody><tr><td align="center"><img src="../../../.gitbook/assets/sql-assistant-logo.png" alt="" data-size="original"></td><td align="center"><strong>SQL Assistant</strong></td><td align="center">Provide the DDL that defines the tables in your database, then ask your SQL Assistant to write SQL code to produce any result.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/legal-agreement-review-logo.png" alt=""></td><td align="center"><strong>Legal Agreement Review</strong></td><td align="center">Evaluate a clause in your legal document. Have it explained to you. Modify it to change the document’s provisions.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/strategy-consultant.png" alt="" data-size="original"></td><td align="center"><strong>Strategy Consultant</strong></td><td align="center">Assists users by generating thoughtful responses to a specific question that lead you through a consultative approach to the request.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/teach-me-anything-logo.png" alt="" data-size="original"></td><td align="center"><strong>Teach Me Anything</strong></td><td align="center">This AI tutor will provide a lesson on any topic under the sun. You can choose the teaching style, language, and sophistication of the lesson.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/pair-programmer-logo.png" alt="" data-size="original"></td><td align="center"><strong>Pair Programmer</strong></td><td align="center">Your AI pair programmer will review your code, help you add new features, modify existing features, add test coverage, add comments or documentation, and more.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/image-generator-logo.png" alt="" data-size="original"></td><td align="center"><strong>Image Generator</strong></td><td align="center">Generated an image based on the description with OpenAI's DALL-E model.</td></tr></tbody></table>

You can add a custom tool in the Control Center and it will be enabled in your entire workspace. Learn more at [Develop Your Own Tools](https://docs.skydeck.ai/developers/develop-your-own-tools).


==> control-center/setup-guide/curate-tools/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Curate Tools

The Tool feature helps to construct more complex prompts easily by asking users for a few brief inputs and then generating the complete, detailed prompt.

Select **Tools** from the sidebar. From this page, you can manage the tools for the entire organization, including uploading, editing, duplicating, and deleting tools. You can also use the tags you created within [**Organize**](../organize-teams/) to determine which AI tools are available to specific groups or individuals.

<figure><img src="https://lh4.googleusercontent.com/ETDbRxZdiQPH3nrVpku_6EYP7FOlgS8BHUF5-euuHuy3rHnVwG5kW2UzOvm10lLK9KN0FDOh5wqpm59cCBxn9tjvMoHk8K7twj6bX_Mec2JP57MxLXdWnVkAc3mnDjIEQIUUegl_ZciqCfINB1XAqD4" alt=""><figcaption></figcaption></figure>


==> control-center/setup-guide/curate-tools/assign-tags.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Assign Tags

Tags allow you to associate the tools with one or many group of members in your organization. After a tag is assigned to a tool, it can only be used by members who are also assigned that tag.

In the Tools page, click on the **Assign** button for each tool you want to manage. In the pop-up window, you can choose multiple tags from the multi-select dropdown. Toggle between selection and deselection for the tags as needed. Then click **Save**.

<figure><img src="../../../.gitbook/assets/admin-tags-4.png" alt="" width="563"><figcaption></figcaption></figure>

Repeat this process for each AI tool to create customized permission groups.


==> releases/oct-16th-2023.md <==
---
description: >-
  We're excited to share the latest updates to GenStudio and Control Center.
  We've introduced new features, made significant improvements, and fixed some
  bugs to enhance your user experience.
---

# Oct 16th 2023

## GenStudio

### New Features

* **Collaboration Chat**: You can now view a list of members in a collaborated conversation, chat within the conversation, and view the conversation history. Additionally, collaborators can now edit the name of shared conversations.
* **Display Sender Name**: We've added visual elements to improve your chat experience - the sender's name is displayed in collaboration chats, and if you hover over the sender's avatar, the sender's name will also appear.
* **Multiple Language Support**: We've supported French translations.
* **Logo Updates**: We've added the SkyDeck.ai TM logo to the user.skydeck.ai page and updated the SkyDeck TM logo for auth.skydeck.ai.
* **Enhanced Member List UI**: The user interface for the member list has been enhanced for better readability and navigation.
* **Model Selection Persistence**: Your model selection will now persist across sessions, saving you time and effort.

### Improvements

* **UI Enhancements**: We've made various improvements to the user interface to make it more intuitive and user-friendly.
* **Migration to SSO**: We've migrated Rapid Onboarding to Single Sign-On (SSO) to streamline user access across multiple platforms.
* **Conversation Reordering**: Conversations are now reordered based on their last-updated-at time, enabling you to easily track your recent conversations.

### Bug Fixes

* **Fixed Navigation Bug**: We've fixed a bug that affected navigation to the home page after viewing a collaborated URL.
* **Fixed Message API Logic**: We've fixed a bug in the logic of the messages API to ensure accurate data retrieval and display.
* **Fixed Broken Links**: We've fixed a broken link to the Control Center sign-in page to ensure easy and uninterrupted access.
* **Fixed Styling Issue**: We've addressed a styling issue with the conversation title in Firefox and Safari for better readability.
* **Fixed DLP Modal Cache Issue**: We've fixed a bug where the DLP modal was showing old cache and flashing.
* **Fixed Auto Scroll**: We've fixed an issue that now auto scrolls to the bottom when a conversation is opened.
* **DLP Mode**: We've fixed a bug where the system was checking for sensitive data even when the DLP mode was set to OFF.
* **Owner Rights:** We've fixed a bug that prevented owners from seeing their conversations after SSO migration.

## Control Center

### New Features

* **Billing Enhancements**: We've made major strides in improving the billing experience with features like payment status synchronization with Stripe and an improved Billing UI.
* **Feature Access Control**: We've implemented feature access control in three phases, providing you the flexibility to manage access to different features.
* **Locale Synchronization**: We've improved locale in the Control Center, enhancing the user experience for different locales.

### Improvements

* **Onboarding Guide**: We've made improvements to the onboarding guide, making it easier for new users to navigate through the product.
* **Rapid Onboarding**: We've updated the rapid onboarding feature to only show the popup if the owner is in an Active Free Trial Plan.
* **Timezone Setting**: The system now automatically sets the timezone for the account when a user signs up.

### Bug Fixes

* **Owner Rights**: We've fixed a bug where the owner couldn't assign/delete tags of members. Additionally, we've addressed an issue that prevented owners from re-inviting members.


==> releases/nov-22nd-2024.md <==
---
description: >-
    GenStudio and Control Center receive enhancements focusing on snapshot functionality, error message improvements, UI refinements, and the introduction of new features such as Gemini integration and Auto Join control.
---
# Nov 22nd, 2024

## GenStudio

### Improvements
- **UI Enhancements**: Removed unnecessary refetching indicators for a cleaner interface.

### New Features
- **Snapshot Interaction Tracking**: Implemented tracking of snapshot interactions to enhance user experience.

### Bug Fixes
- **Duplicate Snapshots Resolved**: Fixed an issue where duplicated snapshots appeared due to incorrect item IDs.
- **Improved Error Messages**: Provided user-friendly messages for token limit errors after scraping.

## Control Center

### Improvements
- **Enhanced LLM Responses**: Improved responses when extra knowledge is irrelevant, providing more accurate information.
- **Refined Function Prompting**: Prompts now include function call histories, enhancing the context for better interactions.

### New Features
- **Gemini Integration**: Added integration with Gemini, including Experiment 1114.
- **Auto Join Control**: Organization owners can now enable or disable the Auto Join feature.

### Bug Fixes
- **Deadlock Issue Resolved**: Fixed a deadlock that occurred when updating conversation size.
- **Improved Error Messages**: Provided user-friendly messages for token limit errors after scraping.

==> releases/oct-4th-2024.md <==
---
description: >-
  This release focuses on enhancing user experience in GenStudio and Control Center with new features, performance improvements, and crucial bug fixes.
---

# Oct 4th, 2024

## GenStudio

### New Features

- **'Show More' Button**: Added a "Show More" button to tool messages, allowing you to view extended content.
- **Conversation Search**: Implemented the ability to search through conversations to find information quickly.
- **Auto-Translate**: Introduced an auto-translate feature to support multi-language communication.

### Improvements

- **Collaboration for All Users**: Enabled collaboration features for non-business users, fostering teamwork and communication.
- **Enhanced UI/UX**: Made several user interface and experience enhancements for smoother navigation and a better overall experience.
- **Improved Snapshot Loading**: Optimized snapshot loading times, allowing quicker access to your snapshots.
- **Input Responsiveness**: Improved input responsiveness by adding debounce, enhancing typing and interaction smoothness.
- **Updated Placeholders**: Reworded placeholder text for better clarity and guidance.
- **Preview Organization**: Enhanced the order of previews to help you find what you need faster.

### Bug Fixes

- **Tools Sidebar Display**: Fixed an issue where the tools sidebar did not display all pages, ensuring full access to all tools.
- **Conversation Pagination**: Resolved errors with conversation pagination for seamless navigation through messages.
- **Participant Submission**: Fixed a bug where participants were undefined upon submission, ensuring correct participant information.
- **'@' Mention Functionality**: Corrected the '@' mention feature in conversations, allowing you to tag colleagues effectively.
- **Chat Page Stability**: Fixed crashes on the chat page when using special tokens, improving stability.

## Control Center

### New Features

- **Conversation Search**: Introduced the ability to search for conversations, making it easier to locate past discussions.
- **Enhanced Tool Management**: Added search, pagination, and sorting functionalities for tools, improving the management and accessibility of your tools.

### Improvements

- **Larger Data Submissions**: Increased the maximum request body size, allowing you to submit larger data without encountering errors.
- **Improved Snapshot Preview**: Enhanced the public snapshot preview for a better viewing experience.
- **Automatic Username Population**: Your username now automatically populates from your Google account during Google sign-up, streamlining the registration process.
- **Updated Default Images**: Refreshed default images for a more appealing visual experience.

### Bug Fixes

- **Snapshot Media Access**: Fixed issues with snapshot media URLs expiring, ensuring uninterrupted access to your media files.
- **VertexAI Model Stability**: Resolved instability issues with VertexAI models to ensure consistent performance.
- **Routine Validation**: Added missing token limit validation for routines to prevent errors and maintain system integrity.

==> releases/sep-20th-2024.md <==
---
description: >-
  This release introduces new AI integrations, enhanced account management,
  improved data protection, and various user interface and performance
  improvements to enhance your experience with GenStudio an
---

# Sep 20th, 2024

## GenStudio

### New Features

* **LaTeX Equation Support**: You can now include LaTeX equations in your content.

### Improvements

* **Simplified Account Management**: Access your account settings without needing to re-login.
* **Improved Code Display**: Code blocks now support word wrapping for better readability.
* **Enhanced Import Messages**: Clearer error messages when importing JSON tools.
* **Consistent Title Length**: Titles are now limited to 60 characters for uniformity.
* **Optimized Sign-in Experience**: Enhanced sign-in and sign-up pages for better work account integration.

### Bug Fixes

* **Resolved Message Errors**: Fixed issues with parsing HTML in Markdown that caused errors in messages.
* **Stability Improvements**: Fixed a crash when using collapsible sections in assistant messages.

## Control Center

### New Features

* **Perplexity AI Integration**: Access enhanced content generation capabilities with the new Perplexity AI integration.
* **Expanded AI Models**: Added new OpenAI models, providing enhanced AI capabilities.

### Improvements

* **Simplified Account Management**: Manage your account without needing to re-login, saving you time.
* **Improved Tool Integration**: Conversations now use appropriate system prompts when tools are activated, enhancing accuracy.
* **Enhanced Error Messages**: Clearer messages during tool validation for easier troubleshooting.
* **Unified Title Display**: Routines and conversations now share consistent title truncation for a uniform experience.
* **Optimized Sign-in Experience**: Enhanced sign-in and sign-up pages for better work account integration.
* **Enhanced PDF Processing**: Improved extraction of uploaded PDFs, even when they contain unsupported images.
* **Advanced Data Protection**: Data Loss Prevention now checks for personal names and locations to secure sensitive information.
* **Updated DLP Settings**: Data Loss Prevention is now turned off by default, giving you more control over data handling.

### Bug Fixes

* **Performance Improvements**: Resolved issues where routines could exhaust resources when called multiple times.

==> releases/nov-8th-2024.md <==
---
description: >-
  This release focuses on enhancing collaboration features, improving user interface elements, and refining real-time communication for a better user experience.
---
# Nov 8th, 2024

## GenStudio

### Improvements

- **Optimized Logo for Faster Loading**: Replaced the logo with an optimized version to reduce loading times.
- **Improved Real-Time Messaging**: Enhanced unread message notifications using WebSockets for instant communication updates.
- **Visually Distinct User Messages in Snapshots**: User messages in snapshots now have a different background color for better distinction.

### New Features

- **"My Collaborations" Tab**: Added a "My Collaborations" tab in Account Settings for efficient collaboration management.
- **Clear Search Button**: Introduced a clear search button to the conversation search field for easier navigation.

### Bug Fixes

- **Resolved Collaboration State Inconsistencies**: Fixed issues causing inconsistent collaboration states across conversations.
- **Fixed UI Rendering Issues**: Addressed rendering issues that reset the conversation title input field unnecessarily.
- **Corrected Responsive Layout in Chat Box**: Fixed layout problems in the chat box when using responsive design with two sidebars.
- **UI Bug Fixes in "My Collaborations" Data Tables**: Resolved various UI bugs in the "My Collaborations" data tables for a smoother user experience.

## Control Center

### Improvements

- **Enhanced URL Detection**: Improved recognition of URLs in messages and during content scraping for a smoother experience.
- **Business Domain Visibility**: Users can now view their business domain information on the account page, providing better account transparency.
- **Optimized Real-Time Notifications**: Updated conversation notifications via WebSockets for more immediate updates.
- **Improved Onboarding for Verified Businesses**: Streamlined the onboarding process for verified businesses, making it quicker to get started.
- **Increased System Reliability**: Implemented high availability with Redis Sentinel to enhance performance and stability.

### New Features

- **"My Collaborations" Tab**: Introduced a new "My Collaborations" tab in the Account Settings page for easier collaboration management.
- **Enhanced Tool Search**: Enabled searching within tool descriptions and usage notes to help users find tools more efficiently.


==> releases/nov-12th-2023.md <==
---
description: >-
  Welcome to our latest update! We've been working hard to enhance your
  experience with new features, improvements, and fixes. Below, you'll find the
  most user-impactful changes.
---

# Nov 12th 2023

## GenStudio

### New Features

* **Slack Member Authorization**: Effortlessly manage team access with the new integration for Slack member authorization.

### Improvements

* **Infinite Scrolling**: Enjoy a seamless conversation experience with the new infinite scrolling feature, allowing you to browse without interruption.

### Bug Fixes

* **Unread Message Status**: Resolved an issue where deleting a message would mark the entire conversation as unread.
* **Documentation Links**: Fixed documentation links to ensure they work correctly across multiple language versions.
* **Message Trimming**: Upgraded litellm to prevent unintended message trimming for a clearer conversation history.

## Control Center

### New Features

* **Azure AD & Okta Script**: Gain better control over application settings with a script that disables Azure AD and Okta across all current applications.
* **Automatic Azure AD Disable**: New accounts will now have Azure Active Directory disabled by default for enhanced initial security.

### Improvements

* **More Data Per Page**: View up to 100 items per page, reducing the need to flip through pages to find what you need.
* **Security Enhancements**: Updated package versions to address and resolve known vulnerabilities, keeping your data safe.

### Bug Fixes

* **Smooth Sign-Up**: Fixed the sign-up redirection to ensure new users are smoothly transitioned to the sign-in page upon registration.


==> releases/aug-16th-2024.md <==
---
description: >-
    This release focuses on enhancing authentication methods and user access across GenStudio and Control Center, streamlining login experiences, and ensuring account security.
---
# Aug 15th, 2024

## GenStudio

### Improvements

- **Synchronized Authentication Methods**: GenStudio now reflects the authentication options configured in Control Center, providing a consistent login experience.
- **Prioritized Google Login**: Placed the Google login option at the top of the login page for easier access.
- **Updated Translations**: Refreshed internationalization settings for better multilingual support.

## Control Center

### New Features

- **Multiple Authentication Methods**: Introduced new sign-in options to provide flexibility in accessing your account.
- **Email Verification for Control Center Users**: Implemented email verification to strengthen account security.

### Improvements

- **Prioritized Google Sign-In**: Moved the Google sign-in option to the top of the login page for easier access, and updated field labels for clarity.
- **Enhanced Account Verification**: Newly verified owners are now correctly recognized, improving access rights management.
- **Enhanced Search Functionality**: Integrated advanced date range support in the search feature, improving data retrieval efficiency.

### Bug Fixes

- **Fixed Rememberizer Integration**: Resolved an issue causing Rememberizer to fail in reconnecting, ensuring continuous service.

==> releases/jul-26th-2024.md <==
---
description: >-
  This release adds snapshot and file upload improvements to GenStudio, and
  better login redirection to Control Center. Enjoy smoother workflows and
  smarter management!
---

# Jul 26th, 2024

## GenStudio

### New Features

* **Snapshot Generation:** Now you can easily generate snapshots with just a click, simplifying your workflow.
* **Public Snapshot View:** Share your snapshots publicly with a new view feature for better collaboration.

### Improvements

* **File Upload Tooltip:** Hover over uploaded files to see their full names, making it easier to identify your files.
* **Revamped Message Sending:** Improved the process of sending messages with file uploads for a smoother experience.

### Bug Fixes

* **Text Overflow:** Fixed text overflow issues in the rememberizer integration component for better readability.
* **Breadcrumbs and Default Conversations:** Improved navigation by fixing default conversations and breadcrumbs.

## Control Center

### New Features

* **Enhanced Login Experience:** Now, when you log back in, you'll be redirected to the last page you visited, ensuring a seamless experience.
* **Logout Path Memory:** The system will remember your last visited path on logout, making your next login smoother.

### Bug Fixes

* **Smooth Sign-Up:** Fixed the sign-up redirection to ensure new users are smoothly transitioned to the sign-in page upon registration.


==> releases/oct-23th-2023.md <==
---
description: >-
  We're excited to bring you major enhancements! We've rolled out a new user
  interface in GenStudio and bolstered real-time communication in Control
  Center, along with several improvements.
---

# Oct 23th 2023

## GenStudio

### New Features

* **GenStudio User Interface**: A brand new user interface has been introduced, designed to offer an improved and more intuitive experience.

### Improvements

* **System Responsiveness**: The system's response time when processing new information has been enhanced.
* **User Interface**: Several aspects of the user interface have been refined, including the behavior of the conversation sidebar, the layout of conversation messages and chat box, and the confirmation modal for deleting tools.
* **Navigation**: The display of navigation breadcrumbs have been further refined for a smoother user experience.
* **Collaboration**: Collaborators can now edit the name of the shared conversation. The display of collaboration members have been further refined for a smoother user experience.
* **Handle Unread Messages:** We've improved how our system manages unread messages, ensuring no important updates are missed.
* **Update Execution Progress:** An enhancement to the execution progress of the smart tool in GenStudio for better user experience.

### Bug Fixes

* **Locale Switching in Conversations**: An issue has been fixed where model selection would disappear when changing languages in new conversations.

## Control Center

### **Improvements**

* **Switching Plans:** We've improved the way our system handles the process of switching between different plans to ensure a smoother, error-free experience.
* **Refactor Payment:** The payment process has been restructured to enhance your checkout experience.

### **Bug Fixes**

* **Identity Provider Description:** Implemented a fix to handle missing descriptions from identity providers.
* **Guide Text on Members Page:** Corrected the guide text on the Members page from "Waiting" to "Wait" for clarity.


==> releases/sep-27th-2024.md <==
---
description: >-
  This release introduces new features and enhancements in GenStudio and Control
  Center, including improved conversation titling, tool pagination, and
  independent language settings, as well as important
---

# Sep 27th, 2024

## GenStudio

### New Features

* **Added Caddy Template**: Introduced a new Caddy template to enhance deployment and configuration options.

### Improvements

* **Conversation Titles in Browser Tabs**: Manually edited or auto-generated conversation titles now populate browser tabs and webpage titles, providing better context.
* **Increased Timeout Settings**: Extended timeout limits to 10 seconds to improve system responsiveness under heavy loads.

### Bug Fixes

* **UI Enhancements**: Resolved various issues in the new user interface to enhance overall experience.

## Control Center

### New Features

* **Tool Pagination**: Implemented pagination in the tool list for easier navigation when managing many tools.
* **Automated Tag Creation for CSV Upload**: New tags are now automatically created during CSV file uploads if they don't exist, simplifying the tagging process.
* **Enhanced Conversation Titles with AI**: Conversation titles are now generated using AI for more concise and meaningful summaries.

### Improvements

* **Independent Language Settings**: Language preferences for GenStudio tools can now be set independently from the Control Center, offering a more personalized experience.
* **Optimized Tool List Loading**: Reduced payload and improved loading times by detaching images from the tool list API.
* **Improved Conversation Titling**: Now uses the first non-empty message to generate conversation titles, ensuring they are more relevant.

### Bug Fixes

* **Fixed Conversation Titles for OpenAI Models**: Resolved an issue where conversation titles weren't generated for certain OpenAI models.
* **Prevented Token Limit Issues in Prompts**: Fixed a bug where token limits could be exceeded when filling prompts, preventing errors.
* **Routine Deletion Stability**: Ensured routines are properly stopped before deletion to maintain stability.
* **Corrected Error Reporting**: Fixed an issue where errors were reported to the wrong dashboard, ensuring accurate error tracking.
* **Adjusted Token Limits for Claude 3 Models**: Set maximum token limits to prevent input errors when using Claude 3 models.


==> releases/oct-30th-2023.md <==
---
description: >-
  We're excited to bring you our latest updates, featuring new user-centric
  features, interface enhancements, and important bug fixes. This includes a new
  Okta sign-in icon, email templates, etc.
---

# Oct 30th 2023

## GenStudio

### **New Features**

* **Okta Sign-In Button Icon**: We've added an icon for the Okta sign-in button, enhancing the visual cues in our user interface.
* **Reset Tools to Default**: You can now reset your tools to their default settings with a simple click of the navigate back button.
* **Message Time-stamping**: We've added a timestamp to messages, enabling you to track the timing of messages more accurately.

### **Improvements**

* **Email Templates in French**: We've updated our email templates in French, improving communication for our French-speaking users.
* **Error Messaging**: We've improved the error message you see when getting subdomain info fails, helping you understand the issue more clearly.
* **Sidebar Item and Conversation Message Layout**: We've refined the layout of the sidebar item and conversation message, improving the overall user interface.
* **Sidebar and Message UI**: We've further refined the sidebar and message UI, ensuring a more user-friendly and visually-appealing experience.
* **Long Conversation Truncation**: Fixed an issue where long conversations were not being truncated properly, improving the readability of conversations.

### **Bug Fixes**

* **Collaboration Conversation Error**: We've fixed an issue that was causing errors when joining a collaboration conversation.
* **Model Selection Default Value**: We've fixed an issue where the model selection was persisting an incorrect default value.
* **Overflow Table in Assistant Message**: We've fixed an overflow issue in the assistant message table, improving its readability and appearance.

## Control Center

### **Bug Fixes**

* **Session Timeout**: Increased session timeout for tenants to 72 hours, ensuring you can stay logged in for longer without interruption.
* **Case Sensitivity Check**: Reviewed and fixed issues with the case sensitivity checking, enhancing the robustness of our system.


==> releases/aug-2nd-2024.md <==
---
description: >-
  This release adds recommended LLM models, improves snapshot management, and
  enhances performance. Control Center now supports Mistral Large 2 and removes
  FusionAuth.
---

# Aug 2nd, 2024

## GenStudio

### New Features

* **Recommended LLM Models:** Discover our highlighted Large Language Models (LLMs) to make informed choices and enhance your projects.

### Improvements

* **Snapshot Management:** Enjoy an improved snapshot management modal for a better user experience.
* **Display Name Update:** We've updated the display names for models to make them more intuitive.

### Bug Fixes

* **Nullable Account Names:** Fixed an issue where account names could be null, ensuring smoother operation.
* **Duplicate Tooltip:** Fixed the duplicate tooltips for delete and copy buttons for clearer navigation.

## Control Center

### New Features

* **Mistral Large 2 Support:** Added support for Mistral Large 2 in SkyDeck, giving you more options to enhance your work.


==> releases/aug-23rd-2024.md <==
---
description: >-
    This release focuses on enhancing media display, improving document processing, and fixing various bugs to provide a better user experience.
---

# Aug 22nd, 2024

## GenStudio

### Bug Fixes

- **Access to Update Password Page**: Fixed an issue where the Update Password page was not accessible when password authentication was disabled.

## Control Center

### New Features

- **Media Display in Snapshots**: Enabled viewing of media files within snapshots for enhanced content review.

### Improvements

- **High-Definition Image Processing**: Improved image detail when processing images via the LLM API for clearer outputs.

### Bug Fixes

- **Accurate Token Calculation for PDFs with Images**: Corrected token calculation errors to ensure precise processing of PDFs containing images.
- **Improved PDF Compatibility**: Handled JB2 pages in PDFs to enhance document processing reliability.
- **Enhanced Document Upload Reliability**: Removed null characters in uploaded documents to prevent processing issues.
- **Corrected Email Links**: Fixed issues with email URLs to ensure proper navigation from email communications.
- **General Stability Improvements**: Addressed various backend issues to enhance overall system reliability.

==> releases/oct-25th-2024.md <==
---
description: >-
  This release focuses on enhancing user experience through improved
  personalization, messaging features, and user interface refinements. It also
  includes several bug fixes to enhance stability and perf
---

# Oct 25th, 2024

## GenStudio

### Improvements

* **Optimized Mobile Logo Display**: A smaller Skydeck logo enhances mobile device compatibility.
* **Conversation View Modes**: Users can change view modes in conversations for a customized interface.
* **User Avatars in Conversations**: User images are now displayed in conversations for a personal touch.
* **Enhanced WebSocket Handling**: Improved connection handling with user notifications ensures better connectivity.
* **Focused Conversation Generation**: The interface now focuses on the conversation when generating messages.
* **UI Enhancements**: Various interface improvements contribute to a smoother experience.
* **Message Editing with AI Regeneration**: Users can regenerate AI responses when editing messages.

### New Features

* **Snapshot Visit Analytics**: Added analytics to track when users visit snapshots for better insights.

### Bug Fixes

* **Snapshot Layout Fixed**: Resolved layout issues for a better snapshot viewing experience.
* **Model Selection Dropdown Fixed**: Fixed truncation issues with the model selection dropdown.
* **Message Collapse State Fixed**: Corrected the initial collapse state of messages for consistency.
* **Profile Cancel Function Fixed**: The "Cancel" button now redirects to Conversations, and a "Clear" button was added.

## Control Center

### Improvements

* **Personalized Conversation Views**: Users can now save their preferred conversation view modes for a more tailored experience.
* **Enhanced Admin Management**: Admins can now manage other admins, providing better control over team roles.
* **Improved Streaming Error Messages**: More descriptive error messages during streaming issues enhance troubleshooting.
* **Collaborative Message Editing**: Edited messages are broadcasted to all collaborators, improving real-time collaboration.
* **Customizable Support Targeting**: Customer support conversations can be configured to engage only new users.
* **CSA Messages with Documents**: Support agents can now include documents in messages for more effective assistance.

### New Features

* **Tool Max Tokens Support**: Tools now support the max\_tokens parameter, offering better control over outputs.
* **Refined Tool Editing**: Enhanced tool editing capabilities for a smoother user experience.

### Bug Fixes

* **Login Issue Resolved**: Fixed an issue where sign-ins returned null claims, improving login reliability.
* **Model API Update Fixed**: Resolved issues with updating the last used model API.
* **Optimized Vertex AI Credentials**: Vertex AI now uses cached credentials for improved performance.
* **Workspace Access Bug Fixed**: Addressed the "Visit your workspace" navigation issue.
* **Parameter Validation Fixed**: Fixed missing validation in parameter correction functions.


==> releases/oct-18th-2024.md <==
---
description: >-
  This release focuses on enhancing user authentication options, improving tool creation and management, and refining the overall user experience across GenStudio and Control Center.
---

# Oct 18th, 2024

## GenStudio

### New Features

- **Microsoft Sign-In Support**: Added support for signing in with your Microsoft account for a seamless authentication experience.

- **Enhanced Chatbox**: Improved the chatbox with new features for better communication.

- **Partial User Mentioning**: Implemented partial matching for mentioning users, simplifying collaboration in GenStudio.

- **WebSocket Connection Stability**: Enhanced WebSocket connection reliability while using GenStudio, ensuring continuous real-time communication.

- **"Try" Button in Tool Modals**: Added a "Try" button on edit and create tool modals, allowing users to test tools immediately.

- **Mobile Support Tuning**: Improved mobile support for better accessibility on various devices.

- **Updated Logos**: Refreshed the Google and Skydeck logos for a modern look.

- **WebSocket Retry Mechanism**: Implemented a retry mechanism for WebSocket connections of up to 30 minutes, enhancing connectivity.

### Improvements

- **Improved Message Sending UX**: Enhanced user experience when sending messages that take longer to process.

- **Account Settings UI**: Updated the account settings interface for better usability.

### Bug Fixes

- **Markdown Parsing Fix**: Resolved an issue where the app could crash when parsing markdown code blocks with undefined content.

- **Message Editing Resolved**: Fixed a problem that prevented users from editing messages due to code merging issues.

- **Expired Tool Image Fix**: Corrected an issue where tool images would expire improperly.

## Control Center

### New Features

- **Microsoft Sign-In Support**: Added the ability to sign in using your Microsoft account, providing a convenient and secure authentication option.

- **Enhanced Tool Creation**: Introduced the capability to create blank tools, allowing for more customization and flexibility in tool development.

- **SMS Verification Management**: Implemented SMS code management and user SMS verification for improved account security.

- **Expanded Tool Context**: Tools can now include documents and images in their context, enriching the information available during tool use.

- **Optimized Conversation Titles**: Conversation titles are now generated by the language model only when they are empty, keeping your workspace organized.

- **Admin Role Management**: Admins can now set other members as admins, and owners can transfer ownership to admins without approval, streamlining team management.

- **Consistent Password Setting Page**: The "Set Password" page now matches the style of the Sign-In and Sign-Up pages for a consistent user experience.

### Bug Fixes

- **Image Upload Issue Resolved**: Fixed an issue where images exceeding the allowed size could not be uploaded.

- **Streaming Disabled for Specific Models**: Addressed a bug that caused streaming issues with certain models.

- **User Deletion Handling**: GenStudio now redirects to the login page if a user has been deleted or revoked, ensuring proper session management.

==> releases/README.md <==
---
description: Public Declarations, Compliance Alterations, and User Assistance Updates.
---

# Releases

© 2023 SkyDeck AI Inc.


==> releases/sep-6th-2024.md <==
---
description: >-
  This release focuses on enhancing snapshot management in GenStudio and improving admin role management and messaging reliability in Control Center.
---

# Sep 6th, 2024

## GenStudio

### Improvements

- **Enhanced Snapshot Management Modal**: The snapshot management interface has been updated for a more user-friendly experience when managing snapshots.
- **Improved Snapshot Titles**: Snapshot titles have been refined for better clarity and organization.

## Control Center

### Improvements

- **Enhanced Admin Role Management**: Admins can now manage user roles more effectively, improving access control and permissions.
- **Improved Messaging Reliability**: The system now better handles concurrent message streams to prevent errors and enhance performance.

==> releases/aug-9th-2024.md <==
---
description: >-
  This release brings username/password logins and mobile-friendly snapshots to
  GenStudio. Control Center now supports email logins, email verification, and
  reCAPTCHA for improved security.
---

# Aug 9th, 2024

## GenStudio

### New Features

* **Username/Password Login:** You can now log in using your username and password for a simpler sign-in process.
* **Password Reset:** Easily reset your password if you forget it, making account recovery more convenient.
* **File Uploads to S3:** Upload your files directly to S3 for improved storage and management.
* **Groq Integration:** Integrate with Groq to enhance system capabilities.

### Improvements

* **Snapshot UI for Mobile:** Enjoy a better snapshot viewing experience on mobile devices.
* **Padding Update:** Updated padding for snapshot content to enhance the visual experience.
* **Logo Rendering:** Fixed issues with logo rendering for a more polished look.
* **Uploaded Files:** You can now view uploaded files directly within the platform.
* **SMS Verification Not Required:** Signing in to GenStudio no longer requires SMS verification, simplifying the process.

### Bug Fixes

* **Rememberizer Integration:** Fixed an issue where the Rememberizer integration failed to reconnect.

## Control Center

### New Features

* **Email/Password Login:** Control Center users can now sign up and log in using their email and password, with SMS verification for added security.
* **Email Verification:** Added email verification to ensure secure account setups.
* **reCAPTCHA Integration:** Added reCAPTCHA to authentication pages and the Forgot Password page to enhance security.


==> releases/sep-8th-2023.md <==
---
description: >-
  Introducing the first release of SkyDeck.ai, equipped with enhanced features,
  improvements, and bug fixes for a more intuitive, customizable, and efficient
  AI productivity experience.
---

# Sep 8th 2023

## GenStudio

### New Features

* **SkyDeck.ai Text Update**: The SkyDeck.ai text has been updated for better clarity.
* **Multiple Choice Variable Format**: Support for multiple choice variable format has been added, increasing the flexibility for data inputs.
* **Image Rendering**: We've improved our system to render images right away when receiving a response, speeding up the display process.

### Improvements

* **Theme Colors and Text Update**: We've updated the theme colors and fetched new text for a more coherent visual experience. Also, we've ensured the consistent use of sign-in, sign-up, sign-out text throughout the platform.
* **Favicon Fix**: Fixed an issue with the favicon for pages ending with "/".

### Bug Fixes

* **Broken Image Display**: Solved an issue where images would not display when they were expired or broken, enhancing the visual experience.
* **List Display in GenStudio**: Fixed an issue where the display of lists was broken in GenStudio.

## Control Center

### New Features

* **Language Selection**: We've added a language selection feature to the Control Center, providing a more user-friendly experience for non-English speakers.
* **Control Center Customization**: We've now allowed for customization of the Control Center's Sign in and Sign up pages for a more personalized experience.

### Improvements

* **CSV Upload**: Spaces in emails and names are now automatically stripped when uploading a CSV file of members, ensuring better data consistency.
* **Password Validation**: We've updated the password validation to be more inclusive of symbol characters.
* **Logo Update**: Users can now upload logos with larger file sizes, and we've also changed the logo format to .png for better quality. Company logo in emails has also been enlarged for better visibility.
* **Sign up Page**: A new sign-up page has been implemented for a smoother onboarding process.
* **Onboarding Enhancement**: We've made improvements to the onboarding process for new users, making it easier and more intuitive.
* **Assets Optimization**: Assets used in Sign in and Sign up pages have been optimized for faster load times.

### Bug Fixes

* **Case Insensitive Emails**: Emails for login and reset password functionality are now case insensitive, avoiding confusion for users.
* **Key Error in JSON Format**: Fixed a key error issue in the conversion of old JSON format.
* **Menu Sidebar**: Fixed a bug where the menu sidebar was not appearing.
* **Responsive UI**: Fixed console errors on Sign in, Sign up pages, and improved responsive design for the Control Center.


==> releases/nov-1st-2024.md <==
---
description: >-
  This release enhances search capabilities, introduces new collaboration features, and includes important bug fixes to improve the overall user experience in GenStudio and Control Center.
---
# Nov 1st, 2024
## GenStudio
### New Features
- **Countdown Feature**: Added a countdown feature to enhance time management during tasks.

### Improvements
- **Optimized Conversation Search**: Improved the performance of conversation search requests for faster results.

### Bug Fixes
- **Conversation Name Update in Breadcrumb**: Fixed an issue where the conversation name in the breadcrumb did not update after renaming.
- **Safari Browser Compatibility**: Corrected the positioning of dialog boxes on Safari for a better user experience.
- **Chat Box Truncation Issue**: Resolved issues where text was being truncated in the conversation chat box.
- **Conversation Deletion UI Update**: Deleting a conversation now correctly updates the user interface.
- **Conversation List Loading on Tall Monitors**: Fixed loading issues of the conversation list on tall monitors.
- **Duplicate Connection Notifications**: Prevented multiple connection success toast notifications for a cleaner interface.
- **Enhanced Message Rendering**: Improved message rendering to exclude ending tags from URL-highlighted text.

## Control Center
### New Features
- **Conversation Search by Collaborator Names**: Users can now search conversations using collaborators' names, making it easier to find relevant discussions.
- **Full-Text Search Within Conversations**: Introduced full-text search within conversation messages, allowing users to search message content directly.
- **Member List Sorting**: Added the ability to sort member lists for easier management and organization.

### Improvements
- **Optimized CSA Conversation Handling**: CSA conversations are now only created for signed-in GenStudio users, enhancing conversation management.

### Bug Fixes
- **Transfer Ownership Button Access**: Resolved an issue where the transfer ownership button was not enabled for the owner.
- **Duplicate CSA Conversations**: Fixed an issue where CSA conversations were being duplicated.
- **Conversation Deletion Stability**: Addressed a race condition bug when deleting a conversation to improve stability.
- **Enhanced Error Handling**: Improved handling of streaming errors for increased reliability.
- **Restored Missing Functions**: Fixed issues caused by missing functions to ensure features work as intended.


==> releases/nov-15th-2024.md <==
---
description: >-
    This release focuses on performance enhancements, new features, and bug fixes to improve your overall experience with GenStudio and Control Center.
---

# Nov 15th, 2024

## GenStudio

### New Features

- **Resizable Sidebars**: Users can now resize sidebars for a customized workspace layout.
- **Stop Collaboration Conversation Button**: Added a button to end collaborative conversations, giving users more control.
- **Sorting by Similarity**: Implemented the option to sort items by similarity for more relevant results.

### Improvements

- **Enhanced UI for Filters Bar**: Improved the user interface for conversation and tool filters for better usability.

### Bug Fixes

- **Fixed Double Scroll Bar**: Resolved an issue where a double scroll bar would appear.
- **Fixed Collapsible Section Titles**: Corrected default titles in collapsible sections to improve navigation.

## Control Center

### New Features

- **Sorting by Similarity**: Introduced the ability to sort results by similarity, enhancing the relevance of your searches.
- **Account Ownership Claims**: Added account ownership claim messages to the Members Page and Homepage, improving account management transparency.

### Improvements

- **Enhanced Embedding Performance**: Improved the performance of embeddings for faster and more efficient data processing.
- **New Blank Tool Supports All Models**: The new blank tool now supports all models by default, offering greater flexibility.
- **Popular Domain Support**: Streamlined domain usage by focusing on the most popular top-level domains.
- **Filtered User Authentication**: User authentication attempts are now filtered by email for increased security.
- **Updated Wording on Embedding Tab**: Revised wording on the embedding tab for better clarity.
- **Verified Business Info in Signup Emails**: Signup email alerts now include information about verified businesses.

### Bug Fixes

- **Fixed Invitation Status Handling**: Resolved an issue where invitation status was incorrectly set when a member role did not exist.
- **Replaced Invalid Symbols in Tags**: Corrected tags by replacing invalid symbols to prevent errors.
- **Limited Search Characters**: Limited the number of characters in search queries to improve reliability.
- **Fixed Invitation Status for Owners/Admins**: Corrected the display of invitation status for owners and administrators.


==> releases/nov-6th-2023.md <==
---
description: >-
  Welcome to our updated platform! We've added new features, made improvements,
  and fixed bugs for a seamless and efficient experience. Let's explore what's
  new.
---

# 6th November 2023

## GenStudio

### **New Features**

* **Share to Slack**: Collaboration just became easier! You can now share content directly to Slack from our platform.
* **Additional Languages**: We've expanded our language support! GenStudio now supports 10 additional languages, allowing for a more inclusive user experience.

### **Improvements**

* **Image Display**: To provide a better viewing experience, we've added a maximum width limit for generated images.
* **Sign-in and Sign-up Pages UI**: We've made the spaces between FA sign-in and sign-up pages consistent and also changed the email field icon for a more intuitive user interface.
* **Re-share Collaborative URL**: You can now re-share collaborative URLs, making team collaboration more efficient.

### **Bug Fixes**

* **Unauthorized Okta User Error Message**: We've improved the error message displayed for unauthorized Okta users for better clarity.
* **Logout Flow**: Fixed a bug where setting the locale cookie prevented the logout flow. You should now be able to log out smoothly.
* **Deleting Active Conversations**: We've fixed the issue where deleting active conversations was problematic. You can now manage your conversations more efficiently.
* **Message Deletion**: Deleting a message no longer causes all messages of the conversation to appear in the "unread" state.

## Control Center

### **New Features**

* **Streaming Response**: Responses are now streamed in real-time, providing consistent and live updates.
* **Addition of 10 New Languages**: Control Center now supports 10 new languages, making it even more user-friendly and accessible.

### **Improvements**

* **Okta Integration**: We've enhanced our Okta integration capabilities, providing a more secure and streamlined user experience.

### **Bug Fixes**

* **Access to Private Pages in Control Center**: We've fixed an issue where unauthenticated requests could access some private pages in Control Center.
* **Email Authentication Toggle**: Users can now turn off email authentication in Control Center as expected.


==> releases/jun-21st-2024.md <==
---
description: >-
  We’re excited to bring you our latest updates, featuring conversation sorting
  and size display in GenStudio. Various bug fixes and improvements included.
---

# Jun 21, 2024

## GenStudio

### New Features

* **Conversation Sorting**: Easily organize your conversations with the new sorting feature.
* **Conversation Size in Sidebar**: View the size of each conversation directly in the sidebar for better management.

### Improvements

* **Tool Serialization Update**: Improved tool serialization to enhance functionality.
* **Dependency Updates**: Updated LiteLLM and OpenAI dependencies to the latest versions for better stability and performance.


==> releases/sep-13th-2024.md <==
---
description: >-
  This release introduces new features and improvements to enhance data security, improve user experience, and provide better tools for account and data management.
---

# Sep 13th, 2024

## GenStudio

### New Features

- **Snapshot Management Modal**: Introduced a snapshot management modal for collaborative users to improve workflow.

### Improvements

- **Meta Tags for Public Snapshots**: Added meta tags to public snapshots for better SEO and easier sharing.
- **DLP Validation Flow**: Implemented a new DLP validation flow for enhanced security.
- **Markdown Formatting**: Improved formatting of user-submitted Markdown content for better readability.
- **Expand/Collapse Long Messages**: Added an expand/collapse feature for long user messages in snapshots to improve usability.
- **Free Trial Countdown Clarity**: Enhanced the free trial countdown clock for improved clarity.

### Bug Fixes

- **Markdown Parsing Errors**: Fixed parsing errors when HTML is included in Markdown in user messages.
- **Breadcrumb Update Issue**: Resolved an issue where changing conversations didn't update breadcrumbs.

## Control Center

### New Features

- **Tag Support in CSV Uploads**: Added support for tagging members when uploading CSV files to enhance member organization.
- **Export Members to CSV**: Introduced the ability to export members to CSV, simplifying data management.
- **Admin Password Reset**: Enabled owners and administrators to reset passwords for better account management.

### Improvements

- **Enhanced DLP Processing**: Increased maximum word length for Data Loss Prevention (DLP), allowing users to process larger documents securely.
- **Improved Snapshot Management**: Refined snapshot management permissions for better control over user access.
- **New DLP Validation Flow**: Implemented a new DLP validation flow for enhanced data security.
- **Enhanced Onboarding Experience**: Improved user onboarding by redirecting new sign-ups to GenStudio with helpful links.
- **Translation Feature Enhancement**: Enhanced translation features with rerun capabilities for better multilingual support.

### Bug Fixes

- **Duplicate Collaboration Members**: Fixed an issue where collaboration members were duplicated in the same conversation.
- **Admin Role Isolation**: Resolved role isolation issues for admin users to ensure proper access controls.
- **Account Security Improvement**: Removed verified emails from old admin records to enhance account security.

==> releases/sep-18th-2023.md <==
---
description: >-
  Welcome to our first major features update for both Control Center and
  GenStudio. This update brings you new features, improvements, and bug fixes to
  enhance your experience.
---

# Sep 18th 2023

## GenStudio

### New Features

* **Data Loss Prevention**: A new feature has been introduced to prevent the loss of conversation data (only Advanced plan).
* **Rapid Onboarding**: A new trial modal has been implemented to help you get onboard faster.
* **Sign Out from All Tabs**: This new feature allows you to sign out from all tabs at once, saving you time and effort.
* **Subdomain Improvement**: The subdomain input field on the sign-in page has been improved for a better user experience.

### Bug Fixes

* **Grammar Correction**: We've corrected a grammatical error to improve the clarity of our content.

## Control Center

### New Features

* **Access Control**: Owners can now revoke access for team members, providing more control over team management.
* **Setup Guide**: A separate page has been created for the Setup Guide to help you get started more easily.
* **French Translation**: The Billing & Payment section now supports French language for easier understanding.
* **Member Seats Information**: We've added more details about 'seats' on the Members page to give you a better understanding of your team structure.

### Bug Fixes

* **Data Accuracy**: We've fixed an issue that was causing duplicate data entries to provide you with more accurate information.


==> releases/oct-11th-2024.md <==
---
description: >-
  This release focuses on enhancing collaboration and conversation experiences,
  introducing message editing capabilities, and improving the user interface for
  a more seamless experience.
---

# Oct 11th, 2024

## GenStudio

### Improvements

* **Enhanced LaTeX Rendering**: Improved the display of LaTeX in code blocks for clearer mathematical expressions.
* **Consistent Set Password Page Design**: Updated the "Set Password" page to match the sign-in/sign-up pages for a uniform experience.
* **Collapsible Conversation Bar**: Added collapse functionality to the conversation bar to maximize workspace area.

### New Features

* **Scroll to Top Button**: Introduced a button to quickly scroll to the top in conversations for easier navigation.
* **Message Editing**: Enabled users to edit their messages, allowing corrections and updates.
* **Markdown Support in Tool Inputs**: Added support for Markdown formatting in tool inputs for enhanced content creation.

### Bug Fixes

* **Safari Copy Conversation Fix**: Resolved an issue that prevented copying conversations in Safari.

## Control Center

### Improvements

* **Unified Workspace for Admins**: Admins with the same email domain are now grouped into a single workspace, simplifying collaboration.
* **Capped Conversation Names**: Limited the length of conversation names created from CSA for better readability.

### New Features

* **User Type Targeting in Conversations**: CSA admins can now target conversations to specific user types (admin/owner or regular member) for more relevant content delivery.
* **Welcome to SkyDeck Conversation**: Added a welcome conversation to guide new users through SkyDeck features.&#x20;
* **Message Editing**: Enabled message editing capabilities, enhancing communication flexibility for users.

### Bug Fixes

* **System Message URL Preview Update**: Corrected the display of URLs in system messages for accurate link previews.
* **Migration Conflict Resolutions**: Fixed database migration conflicts to ensure system stability.
* **Task Execution Improvement**: Improved task processing by cleaning up connections before and after running tasks.


==> releases/jul-12th-2024.md <==
---
description: >-
  We're excited to bring you our latest updates, featuring enhanced Rememberizer
  and document/image uploads in GenStudio. Both GenStudio and Control Center now
  have a new authentication system.
---

# Jul 12th, 2024

## GenStudio

### New Features

* **Upload Documents in Conversations**: Easily upload and view various document file types directly within your GenStudio conversation history.
* **Image Upload Functionality**: Now you can upload images through the chat completion API, enhancing your visual communication.
* **New Authentication System:** We have replaced the old FusionAuth system with a new, more secure, and efficient authentication system.

### Improvements&#x20;

* **Enhanced Rememberizer Integration:** Experience a smoother Rememberizer integration flow, making your tasks more efficient.
* **Quick Action Links**: After onboarding, quickly access essential links to get started faster.
* **Revamped Sign-In/Sign-Up Pages**: Enjoy a more user-friendly sign-in and sign-up experience with updated pages.
* **Non-AI Mentions Update**: Improved handling and display of non-AI mentions within the conversations.

### Bug Fixes

* **Rememberizer Integration View:** Addressed a bug in the Rememberizer integration view to ensure smooth functionality.
* **File Display in Conversations**: Limited the max-width for file items to ensure better display in conversation history.
* **Prevent Multiple Clicks**: Prevented users from clicking the Confirm button multiple times in the confirmation modal to avoid duplicate actions.
* **Size Limit Error Handling**: Improved error handling for file uploads that exceed size limits.
* **Uninvited User Error**: Updated error messages and other stylings for uninvited users.

## Control Center

### New Features

* **New Authentication System**: We've replaced the old FusionAuth system with a new, more secure and efficient authentication system.


==> releases/nov-29th-2024.md <==
---
description: >-
  This release focuses on enhancing user experience with new features and important bug fixes across GenStudio and Control Center, improving navigation, security, and functionality.
---

# Nov 29th, 2024

## GenStudio

### New Features

- **Version Update Notifications**: Added alerts to inform users of new GenStudio updates, ensuring access to the latest features.

### Bug Fixes

- **Avatar Icon Alignment**: Fixed the misalignment of the avatar icon for a cleaner and more professional interface.

## Control Center

### New Features

- **GenStudio Version Management**: Introduced the ability to manage GenStudio versions within Control Center for seamless integration.

### Improvements

- **Verified SMS Data Accuracy**: Enhanced the updating process of verified SMS data to provide reliable and timely information.

### Bug Fixes

- **Workspace Conversation Access**: Resolved an issue to ensure CSA conversations remain within their original workspace, enhancing data security.
- **Authentication Flow Enhancement**: Users are now redirected to sign in when authentication is canceled, improving the login experience.
- **Cancel Button Design**: Removed the unnecessary border from the Cancel button for a more consistent interface.
- **Accurate Logging**: Corrected variables in logs to improve the accuracy of logged information.
- **Controlled URL Crawling**: Prevented crawling of URLs not enclosed in curly braces to avoid unintended data collection.
- **"Take Me There" Functionality**: Fixed the navigation issue to reliably direct users to the intended page.

==> releases/jun-28th-2024.md <==
---
description: >-
  We’re excited to bring you our latest updates, featuring a new ADMIN role in
  the Control Center and simplified access for admins. Various bug fixes enhance
  your experience.
---

# Jun 28th, 2024

## GenStudio

### Bug Fixes

* **Collaboration Messages Avatar Color**: Resolved an issue where collaboration messages displayed the wrong avatar color in conversations.
* **Edit Modal Title Reload**: Fixed a bug where the title would incorrectly reload in the edit modal.

## Control Center

### New Features

* **ADMIN Role**: We've added a new ADMIN role, providing enhanced control and management capabilities.

### Improvements

* **Removed Email Verification for Admins**: Admins no longer need to go through email verification, simplifying access and management.


==> releases/jul-5th-2024.md <==
---
description: >-
  We’re excited to bring you our latest updates, featuring non-AI content
  submission and @ mentions in GenStudio. Trial accounts can now invite up to 5
  users. Bug fixes included.
---

# Jul 5th, 2024

## GenStudio

### New Features

* **Non-AI Content Submission**: You can now submit non-AI content within GenStudio, making it easier to include diverse types of information in your conversations.
* **@ Mentions Support**: Easily mention other users within your conversations for better collaboration and communication.

### Bug Fixes

* **Rememberizer Integration Email**: Fixed an issue where the Rememberizer integration email text would over-scroll on mouse hover.
* **Bottom Elements Overlap**: Fixed an issue with the z-index of bottom elements to ensure they display correctly.


==> notices/cookie-notice.md <==
---
description: As of July 20, 2023
---

# Cookie Notice

Notice of Cookie Use While you engage with SkyDeck AI Inc.'s websites and applications (collectively referred to as "**Sites**"), our data processing platform goods and services ("**Platform Services**") and our regular business operations, including events, sales, and marketing (collectively referred to as "**SkyDeck Services**"), we utilize automated data collection tools such as Cookies, Web Beacons, and other identifiers for the reasons detailed below.

"**Cookies**" are small text files downloaded onto your hard drive by a web server when you visit our Sites or use our Services. These cookies may either be first party cookies (set by us) or third party cookies (set by others), with several types (explained in the subsequent table).

"**Web beacons**" (also known as web bugs, pixel tags, or clear GIFs) are small graphics with a unique identifier, used on our Sites and Services for various purposes. These include delivering or communicating with cookies, tracking and measuring the performance of our Sites and Services, and monitoring the number of visitors on our Sites and Services. Unlike cookies, which are stored on the user’s hard drive, web beacons are typically embedded invisibly on web pages (or in an email).

**What types of cookies are used and what is their function?**

The following provides a representative but non-exhaustive overview of the cookies we might use:

**Cookie Types**

**Essential Cookies** These are necessary for certain features of our Sites and Services, and cannot be disabled in our systems. They are usually activated in response to actions taken by you, such as setting your privacy preferences, logging in, or filling out forms. If you block or alert these cookies on your browser, certain parts of the site may not function properly.

**Performance Cookies** These help us count visits and identify traffic sources, enabling us to enhance the performance of our site. They assist us in identifying the most and least visited pages and understanding visitor behavior on the site.

**Functionality Cookies** These enable our Sites and Services to offer improved functionality and personalization. They may be set by us or third-party providers whose services we have integrated into our pages. If these cookies are blocked, some or all of these services may not work properly.

**Advertising Cookies** These may be set through our Sites by our advertising partners. They can be used by these third parties to create a profile of your interests and display relevant ads on other sites. If these cookies are blocked, you might see less personalized advertising.

**What other identifiers are used and what is their function?**

Some of our Sites utilize Google Analytics, a web analytics service offered by Google, Inc. Google Analytics uses cookies to help us understand how users interact with our Sites. The data gathered by the cookies regarding your usage of our Sites (including your IP address) and collected through Google Analytics ("Google Analytics Data") may be transferred to and stored by Google on servers in the United States. Google utilizes the Google Analytics Data on behalf of SkyDeck AI Inc. to evaluate your usage of our Sites, compile reports for us on website activity, and offer other services relating to website activity and internet usage. Google may also use the collected Google Analytics Data to contextualize and personalize the ads of its own advertising network. You can opt out of Google’s collection and use of the Google Analytics Data by downloading and installing the browser plug-in available at [https://tools.google.com/dlpage/gaoptout](https://tools.google.com/dlpage/gaoptout).

If you have further inquiries, please see our [Privacy Policy](privacy-policy.md) or contact us at legal@skydeck.ai.



==> notices/README.md <==
---
description: Legal, Regulatory, and Customer Support Notices
cover: >-
  https://images.unsplash.com/photo-1526958097901-5e6d742d3371?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw1fHxoZWxwfGVufDB8fHx8MTY5MDIwMTI2NXww&ixlib=rb-4.0.3&q=85
coverY: 0
---

# Introduction



© 2023 SkyDeck AI Inc.


==> notices/terms-of-use.md <==
---
description: As of July 22, 2023
---

# Terms of Use

### 1. Introduction

This document outlines the terms of use ("Terms") for SkyDeck.ai, including our administrative tools at admin.skydeck.ai and the GenStudio tools provided to the user in a custom or generally available domain within \*.skydeck.ai and any other pages that link to these Terms (the "Sites"). These Terms constitute a binding legal agreement between you, as the user, and SkyDeck AI Inc. ("SkyDeckAI"), as the provider of this platform. By accessing or using this platform, you affirm your agreement to abide by these Terms.

### 2. Acceptance of Terms

By accessing or using any part of the Sites, you confirm that you are at least 18 years old, have read and understood these Terms of Use and the SkyDeckAI Privacy Policy (which is incorporated into these Terms by reference), and agree to be legally bound by them.

In these Terms, "we," "us," and "our" refer to SkyDeckAI, while "you" refers to both you as an individual and any entity you represent. By using our platform, you confirm that you can accept these Terms on behalf of any such entity, thereby binding it to these Terms.

### 3. Contact Information

SkyDeck AI Inc. is the entity you are contracting with. Our mailing address and contact information are as follows:

SkyDeck AI Inc.\
548 Market St. PMB38234\
San Francisco, CA 94104\
Phone: 1.415.744.1557\
For legal inquiries: [legal@skydeck.ai](mailto:legal@skydeck.ai)

### 4. License Grant and Proprietary Rights

Subject to your full compliance with these Terms, any other policies or restrictions posted on the platform, and your timely payment of any fees agreed upon with SkyDeckAI, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the platform.

Unless otherwise noted, all content made available through the platform (including but not limited to software, submissions, information, user interfaces, graphics, trademarks, logos, images, artwork, videos, documents, and the overall "look and feel" of the platform) is owned, controlled, or licensed by or to SkyDeckAI. This content is protected by various laws including trade dress, copyright, patent and trademark laws, and other intellectual property rights and unfair competition laws. SkyDeckAI reserves all rights in and to this content.

Any unauthorized reproduction, redistribution, use, or exploitation of any part of the platform is expressly prohibited by law and may result in civil or criminal penalties.

### 5. Account Responsibility

If you open an account on the platform, you are responsible for maintaining the confidentiality of your account information and for all activity under your account. By accepting these Terms and creating an account, you agree to our collection, use, and disclosure of your information as described in the Privacy Policy. No one under age 18 may register for an account or provide any personal information to SkyDeckAI or the platform. Notify SkyDeckAI immediately of any unauthorized account use. You may be held liable for losses due to unauthorized use. Do not use anyone else’s account without pre-approval from SkyDeckAI Account registration is void where prohibited.

### 6. User Rights and Responsibilities

As a user, you have the right to use our AI tools for your legitimate business purposes. You are responsible for not misusing or abusing the tools, infringing on others' rights, or violating any laws. You are required to comply with all applicable laws and regulations in your use of the platform.

### 7. Provider Rights and Responsibilities

We, SkyDeckAI., reserve the right to monitor use, enforce these Terms, and update the platform and its terms as needed. We are responsible for providing a reliable service, respecting users' privacy, and responding to any issues or concerns.

### 8. Content Rules

Content generated by our AI tools is owned by you, the user, subject to any restrictions or conditions specified in these Terms. The content should not be used for illegal or inappropriate purposes.

### 9. Misuse and Breach

Misuse or breach of these Terms can result in penalties, including but not limited to, suspension or termination of access to the platform, legal action, and/or damages.

### 10. Disclaimer of Warranties

You agree that your use of the platform, including any content, is at your sole risk. The platform and content are provided on an “as is” and “as available” basis. SkyDeckAI makes no warranties, express or implied, and disclaims all possible warranties, including without limitation implied warranties of merchantability, fitness for a particular purpose, title and non-infringement. SkyDeckAI does not warrant that the platform or content are accurate, continuously available, complete, reliable, secure, current, error-free, or free of viruses or other harmful components.

### 11. Indemnification

You agree to indemnify, defend, and hold harmless SkyDeckAI, its officers, directors, shareholders, successors, employees, agents, subsidiaries, and affiliates, from any actual or threatened third-party claims, demands, losses, damages, costs, liability, proceedings, and expenses (including reasonable attorneys' and expert fees and costs of investigation), to the fullest extent permitted by law. This includes any issues arising out of or in connection with your use of the platform, your breach of these Terms, your violation of any law or regulation, your violation of any third-party rights, or the disclosure, solicitation, or use of any personal information by you, whether with or without your knowledge or consent. SkyDeckAI reserves the right to assume exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with SkyDeckAI's defense of such a claim. You may not agree to any settlement affecting SkyDeckAI. without SkyDeckAI's prior written consent.

### 12. Suspension or Termination of Access

SkyDeckAI reserves the right to suspend or terminate your access to any or all of the platform, with or without notice, for any reason. This includes but is not limited to breaches of these Terms, requests by law enforcement or other government agencies, discontinuation or significant modification of the platform, or unexpected technical issues. SkyDeckAI is not liable for any termination of your access to the platform. Any rights and obligations under these Terms that should naturally continue beyond your use of the platform will survive any termination of your access.

### 13. Limitation of Liability

To the maximum extent permitted by law, you agree to bear the entire risk arising out of your access to and use of the platform and content. SkyDeckAI or any of its directors, employees, agents or suppliers will not be liable for any special, indirect, incidental, exemplary, consequential or punitive damages of any kind arising out of or in connection with the platform, and any content, services or products included on or otherwise made available through the platform. SkyDeckAI's total cumulative liability to you arising out of or in connection with these Terms, or from the use of or inability to use the platform, will not exceed one hundred dollars ($100.00).

### 14. Dispute Resolution

Any disputes, controversies, or claims arising out of or in connection with these Terms, including their validity, invalidity, breach, or termination, shall be resolved by arbitration in accordance with the rules of the American Arbitration Association. The place of arbitration shall be San Jose, California, and the proceedings shall be governed by the laws of California. The arbitration award shall be final and binding upon both parties.

### 15. Changes to the Terms

SkyDeckAI reserves the right, at our discretion, to change these Terms at any time. Changes will be communicated to users through appropriate channels, such as email notifications, website banners, or in-app messages, and users will be given a reasonable period of time to accept the new terms.

### 16. Translations

For your convenience we provide machine translations of this document in languages other than English. At any time when there is a conflict or contradiction between the original English language version and a version in another language, the English language version will apply and prevail. By relying on a non-English translation of this document you accept that there could be unintended differences between the translated text and the actual terms to which you have agreed.


==> notices/privacy-policy.md <==
---
description: As of July 20, 2023
---

# Privacy Policy

## SkyDeck AI Inc. Privacy Policy

SkyDeck AI Inc. ("SkyDeck AI," "we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you use the SkyDeck.ai generative AI platform (our "Service") and our practices for collecting, using, maintaining, protecting, and disclosing that information.

### Information We Collect About You and How We Collect It

We collect several types of information from and about users of our Service, including:

* Personal information, such as your name, email address, and other identifiers by which you may be contacted online or offline.
* Technical data, such as information about your internet connection, the equipment you use to access our Service, and usage details.
* API keys and credentials for accessing third-party vendor generative AI models provisioned by you.

We collect this information:

* Directly from you when you provide it to us.
* Automatically as you navigate through the Service. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.

### How We Use Your Information

We use information that we collect about you or that you provide to us, including any personal information:

* To provide you with the Service and its contents, and any other information, products or services that you request from us.
* To fulfill any other purpose for which you provide it.
* To provide you with notices about your account.
* To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.
* To notify you about changes to our Service or any products or services we offer or provide through it.
* To improve our Service, products, or services.
* To allow you to participate in interactive features on our Service.

### Disclosure of Your Information

We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:

* To third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
* To fulfill the purpose for which you provide it. For any other purpose disclosed by us when you provide the information.
* With your consent.

### Your Rights

You have certain rights under applicable data protection laws. These may include the right to:

* Request access to your personal data.
* Request correction of the personal data that we hold about you.
* Request erasure of your personal data.
* Object to processing of your personal data.
* Request restriction of processing your personal data.
* Request transfer of your personal data.
* Right to withdraw consent.

### Data Security

We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions and API keys will be encrypted using SSL technology.

### Changes to Our Privacy Policy

It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Service home page.

### Contact Information

To ask questions or comment about this privacy policy and our privacy practices, contact us at:

SkyDeck AI Inc.\
548 Market St. PMB38234\
San Francisco, CA 94104\
Phone: 1.415.744.1557\
Email: [legal@skydeck.ai](mailto:legal@skydeck.ai)


==> use-cases/creating-a-privacy-policy.md <==
---
description: A business and legal use case using Strategy Consultant
---

# Creating a Privacy Policy

{% hint style="info" %}
**Professional Services:** there are many complex issues that require the expertise of domain specialists or other professionals such as lawyers. Instead of waiting for access to these experts you can get a head start by using SkyDeck.ai GenStudio tools to write an initial draft or proposal that looks like a finished product. Shared with professionals, this can serve as a starting point for discussion, saving time and money. Or kept to yourself, this can serve as a way for you to be highly prepared before you engage with an expert.
{% endhint %}

## Strategy Consultant: Creating Legal Notices

The following conversation with the Strategy Consultant shows how you can use this tool to create a Privacy Policy from scratch that is compliant with European and U.S. privacy regulations. \
\
What we enter into the tool appears in _`italics and blocks`_.  The rest is produced by the Strategy Consultant tool and GenStudio using OpenAI GPT-4.

Strategy Consultant

Your questions or prompts: \
\
_`Help me develop a privacy policy for my generative AI platform for business users.`_

## Thoughts Decomposition:

1. What is the purpose and scope of the generative AI platform?
2. What type of data will the AI platform collect?
3. How will the collected data be used?
4. How will the data be stored and protected?
5. What are the user's rights regarding their data?
6. How will the platform comply with data protection laws?

## Thoughts Generation:

1. The generative AI platform allows businesses to generate AI models for various purposes such as data analysis, prediction, or automation.
2. The platform may collect data such as user information, user interaction with the platform, generated models and their outputs, and other usage data.
3. The collected data will be used for improving the platform, providing personalized service, troubleshooting, and potentially for research and development.
4. The data will be stored securely with encryption and access controls. Regular audits and security measures will be employed to protect the data.
5. The users have the right to access their data, correct inaccuracies, delete their data, and withdraw their consent at any time.
6. The platform will comply with data protection laws by informing users of the data collection and usage, obtaining consent when necessary, and providing mechanisms for users to exercise their rights.

## I want to know more about:

1. Do you have any specific data protection laws or regulations in mind that the platform needs to comply with?
2. Are there any specific types of data that the platform will collect or any specific ways in which the data will be used that haven't been mentioned already?
3. Will the data be shared with any third parties? If so, under what circumstances?
4. Do you have any specific data security measures in mind that the platform should implement?

_`We should comply with General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). The platform will additionally collect api keys and credential for access to third party vendor generative AI models for which customers have signed up. Data will be shared with the third party vendors that customers provision on our system. We may also share some data with outside services to support user requests such as urls submitted to direct scraping and ingestion into generative AI models. Site usage data may also be shared anonymously with analytics vendors such as Google to understand customer usage and help improve our product's design. The platform supports the ability for customers to completely delete their entire account and all associated information.`_

## Thoughts Decomposition:

Given the new information, let's decompose the thoughts again:

1. How will the platform comply with GDPR and CCPA?
2. How will the platform handle API keys and credentials for third-party vendors?
3. Under what circumstances and with whom will the data be shared?
4. How will the platform ensure anonymity when sharing data with analytics vendors?
5. How will the platform handle account deletion and data removal?

## Thoughts Generation:

1. To comply with GDPR, the platform will provide clear information about data collection and usage, obtain explicit consent before collecting personal data, allow users to access, correct, and delete their data, and implement data protection measures. For CCPA compliance, the platform will inform users about the categories of personal information to be collected, the purposes for which these categories will be used, and provide a "Do Not Sell My Personal Information" link to users.
2. API keys and credentials for third-party vendors will be stored securely with encryption, and will only be used for the purpose of providing the service requested by the user. These credentials will not be shared with any other parties without the explicit consent of the user.
3. Data will be shared with third-party vendors as provisioned by customers, and with outside services for specific user requests. The platform will inform users about these data sharing practices and obtain consent where necessary.
4. When sharing data with analytics vendors, all personally identifiable information will be removed or anonymized to protect user privacy.
5. The platform will provide a mechanism for users to completely delete their account and all associated information. This process will include deleting all stored data, including API keys and credentials, user information, and generated AI models.

## I want to know more about:

1. How are you planning to inform users about your data collection, usage, and sharing practices?
2. How will you obtain consent from users for data collection and sharing?
3. Can you provide more details on the "Do Not Sell My Personal Information" link for CCPA compliance?
4. What steps will the platform take to ensure that all user data is completely deleted upon account deletion?

_`We will inform users about our data collection, usage, and sharing practices through a web page that contains our privacy policy with a link to that page in our footer and our sign up page. 2. We will obtain consent for users for data collection and sharing by asking them to positively check a box which is not checked by default. The user will receive a confirmation of this approval in email when possible. 3. The "Do Not Sell My Personal Information" link will describe the data that will not be sold. It will provide a button to press to turn activate this request. When possible users will receive an email confirmation of this request. And the request will remain active for at least one year.`_

## Thoughts Decomposition:

With the new information, let's decompose the thoughts again:

1. How will the platform ensure that the privacy policy is easily accessible to the users?
2. How will the platform implement the user consent mechanism?
3. How will the "Do Not Sell My Personal Information" link work?
4. How will the platform handle consent withdrawal and the activation of the "Do Not Sell My Personal Information" request?

## Thoughts Generation:

1. The platform will keep the privacy policy visible and easily accessible by placing a link to it in the footer and on the sign-up page. The privacy policy will be written in clear, plain language so that users can understand how their data is collected, used, and shared.
2. The platform will implement a user consent mechanism where users have to actively check a box to give consent. This box will not be checked by default, ensuring that consent is given actively and not passively. Users will receive an email confirmation of their consent when possible.
3. The "Do Not Sell My Personal Information" link will provide information about what data is not sold and will provide a button for users to activate this request. Users will receive an email confirmation of this request when possible, and the request will remain active for at least one year.
4. The platform will honor consent withdrawals and activations of the "Do Not Sell My Personal Information" request promptly. Users will have the ability to change their consent status at any time, and the platform will reflect these changes in its data handling practices.

## Thoughts Evaluation:

The strategy seems to cover all important aspects of a privacy policy for a generative AI platform. It considers the nature of the platform, the type of data collected, user rights, and compliance with GDPR and CCPA.

## Search Algorithm:

The most promising thought to pursue would be to create a draft of the privacy policy based on the generated thoughts and information provided.

## Examples:

Here's a potential starting point for your privacy policy:

"Our generative AI platform is committed to protecting your privacy and handling your data in an open and transparent manner. The personal data that we collect and process depends on how you use our services.

We collect and process your data for the purposes of providing you with our services, improving the platform, and for our research and development efforts. We may also share your data with third-party vendors as provisioned by you, and with outside services to support your requests.

We take your privacy very seriously and will always handle your data in accordance with applicable data protection laws, including GDPR and CCPA. We will always inform you about how we use your data, and we will only process your data if we have a lawful basis to do so.

For more information on how we handle your data, please see our Privacy Policy \[Link]. Please note that by using our services, you agree to our data practices as set out in our Privacy Policy.

You have the right to access, correct, or delete your data at any time. You can also withdraw your consent to data processing at any time. If you wish to do so, please contact us at \[Contact Information]."

_`Please write the privacy policy as it would appear using the following information:`_ \
\
_`Service: SkyDeck.ai`_ \
_`Location: https://skydeck.ai`_ \
_`Company Name: SkyDeck AI Inc`_ \
_`Company mailing address: SkyDeck AI Inc., 548 Market St. PMB38234, San Francisco, CA 94104`_ \
_`Contact email: legal@skydeck.ai`_ \
_`Phone: 1.415.744.1557`_ \
\
_`Do not make the privacy policy recursive, as you have done above, by having a policy that refers the reader to follow a link to see the privacy policy.`_

## SkyDeck AI Inc. Privacy Policy

SkyDeck AI Inc. ("SkyDeck AI," "we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you use the SkyDeck.ai generative AI platform (our "Service") and our practices for collecting, using, maintaining, protecting, and disclosing that information.

### Information We Collect About You and How We Collect It

We collect several types of information from and about users of our Service, including:

* Personal information, such as your name, email address, and other identifiers by which you may be contacted online or offline.
* Technical data, such as information about your internet connection, the equipment you use to access our Service, and usage details.
* API keys and credentials for accessing third-party vendor generative AI models provisioned by you.

We collect this information:

* Directly from you when you provide it to us.
* Automatically as you navigate through the Service. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.

### How We Use Your Information

We use information that we collect about you or that you provide to us, including any personal information:

* To provide you with the Service and its contents, and any other information, products or services that you request from us.
* To fulfill any other purpose for which you provide it.
* To provide you with notices about your account.
* To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.
* To notify you about changes to our Service or any products or services we offer or provide through it.
* To improve our Service, products, or services.
* To allow you to participate in interactive features on our Service.

### Disclosure of Your Information

We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:

* To third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
* To fulfill the purpose for which you provide it. For any other purpose disclosed by us when you provide the information.
* With your consent.

### Your Rights

You have certain rights under applicable data protection laws. These may include the right to:

* Request access to your personal data.
* Request correction of the personal data that we hold about you.
* Request erasure of your personal data.
* Object to processing of your personal data.
* Request restriction of processing your personal data.
* Request transfer of your personal data.
* Right to withdraw consent.

### Data Security

We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions and API keys will be encrypted using SSL technology.

### Changes to Our Privacy Policy

It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Service home page.

### Contact Information

To ask questions or comment about this privacy policy and our privacy practices, contact us at:

SkyDeck AI Inc. 548 Market St. PMB38234 San Francisco, CA 94104 Phone: 1.415.744.1557 Email: legal@skydeck.ai


==> use-cases/README.md <==
---
description: >-
  The following sections provide some concrete examples of the many ways SkyDeck
  GenStudio tools and features can be used to make your life easier.
---

# Introduction



==> security/bug-bounty-program.md <==
# Bug Bounty Program

### Introduction

SkyDeck.ai is committed to ensuring the security and integrity of our platform. We understand the important role that independent security researchers play in maintaining the security of our platform. We encourage security researchers to examine and test our platform and report any vulnerabilities they may find. In recognition of their efforts, we provide a bug bounty program.

### Scope

The scope of our bug bounty program is limited to vulnerabilities in SkyDeck.ai's platform and services available from the SkyDeck.ai domain. The scope includes all the features, functionalities, and tools mentioned on our website such as the AI Control Center, GenStudio, and any other services hosted on our domain.

### Out of Scope

Any third-party websites, services, or platforms linked from our website are not in the scope of this program. Additionally, any physical attempts to compromise our system or social engineering attempts are also out of the scope.

### Eligible Vulnerabilities

The following categories of vulnerabilities are eligible for our bug bounty program:

* Remote Code Execution (RCE)
* SQL Injection
* Cross-site Scripting (XSS)
* Cross-Site Request Forgery (CSRF)
* Server-side Request Forgery (SSRF)
* Insecure Direct Object References (IDOR)
* Authorization issues
* Information disclosure issues

### Ineligible Vulnerabilities

The following categories of vulnerabilities are not eligible for our bug bounty program:

* Denial of Service (DoS / DDoS) vulnerabilities
* Spamming
* Clickjacking on pages with no sensitive actions
* Unconfirmed reports from automated vulnerability scanners
* Issues related to software or protocols not under SkyDeck.ai's control

### Reporting a Vulnerability

To report a vulnerability, please send an email to security@skydeck.ai with the following information:

* Detailed steps to reproduce the vulnerability
* The potential impact of the vulnerability
* Any potential mitigations or fixes for the vulnerability
* Your contact information

### Reward

We offer a reward of $20 to $100 for vulnerabilities, depending on severity and impact. We determine the exact amount on a case-by-case basis.

### Rules

* You must not violate the privacy of any user data, disrupt our services, or cause harm to our users or systems.
* You must not disclose the vulnerability to anyone else until we've had a reasonable amount of time to fix it.
* You must be the first person to report the vulnerability to be eligible for a reward.

### Legal

By participating in the bug bounty program, you agree to comply with all applicable laws and regulations. You also agree not to exploit any vulnerability you discover for any purpose other than reporting it to us.


==> security/skydeck.ai-security-practices.md <==
---
description: As of November 1st, 2023
---

# SkyDeck.ai Security Practices

### **Data Security**

* All our components are **hosted within a secure VPC** and data is encrypted at rest with **AWS KMS using AES-256**. Furthermore, we employ **TLS 1.2 or higher** for encryption in transit.
* Our **application secrets** are also securely encrypted at rest with KMS and AES-256.

### Enhanced Conversation Security

In addition to encryption at rest we provide optional enhanced security features around user conversation content and conversation names.

* We can provide a second independent layer of encryption of conversation data at rest. The advantage of this approach is redundant security. But this comes at a cost of an extra layer on decryption when conversations are displayed or used in searches. \
  \
  This is an option in Control Center for enterprise customers.\

* Every user can hold the encryption keys to their own conversation data at rest. In this way we only have access to their conversation data while they are logged into our system. When they log out, the data is encrypted and we have no record of the decryption key. We use an independent hash of the user's password to implement that encryption. We do not store the password, and the hash exists only while the user is logged in.  \
  \
  The advantage of this approach is that no one can access user data if the user _simply stops using_ the platform.  The data is effectively gone when not actively in use by the user. The disadvantage of this approach is that if the user loses their password they lose all of their conversation data without any recourse. Another disadvantage is that displaying and working with conversation data will be slower and more _laggy_. Also, changing the user password will be a slower process because all data will need to be decrypted and re-encrypted. \
  \
  This is an optional feature for enterprise customers.&#x20;

### **Product Security**

* SkyDeck.ai implements regular **penetration testing** and conducts **vulnerability scanning** at crucial stages of our Secure Development Lifecycle (SDLC).
* Our security strategies include both **black-box and grey-box testing** during penetration testing.
* We utilize various methods to ensure the security of our system, including **Static analysis, Software composition analysis, Malicious dependency scanning, Dynamic analysis, and Network vulnerability scanning**.

### **Access Management**

* We leverage **reputed SSO services** for securing our identity and access management.
* Access to applications is role-based and is automatically revoked upon the end of employment.
* Any further access must comply with the policies set for each application.

### **Data Protection**

* We guarantee that all customer data is **encrypted both at rest and during transit**.
* **AWS Key Management System (KMS)** is responsible for managing our encryption keys.

### **Security Education**

* Comprehensive security training is provided to all employees during their onboarding process and is refreshed annually through educational modules within our platform.
* Our team shares regular threat briefings in communication channels to keep them informed of important security updates.

### **Vendor Security**

* We ensure secure remote access to internal resources using **WireGuard**.
* To provide an additional layer of protection, we also use **malware-blocking DNS servers** to safeguard employees and their endpoints while browsing the internet.


==> security/README.md <==
# Security Documentation

This directory contains key security documents for SkyDeck.ai:

1. [Bug Bounty Program](./bug-bounty-program.md)
2. [Security Practices](./skydeck.ai-security-practices.md)

## Bug Bounty Program

Outlines our program for security researchers, including:
- Scope and eligible vulnerabilities
- Reporting process and rewards
- Rules and legal considerations

## Security Practices

Describes our security measures as of November 1st, 2023, covering:
- Data and product security
- Access management
- Employee education
- Vendor security


==> developers/README.md <==
# Developers



==> developers/develop-your-own-tools/example-text-based-ui-generator.md <==
---
description: >-
  This tool generates a text-based user interface based on description. Full
  source code is provided for you to try out.
---

# Example: Text-based UI Generator

We are advocates of AI Driven Development as practiced by https://eastagile.com. To support that we use AI to help us develop user interfaces. This tool generates a text-based user interface based on description and an (optionl) request for certain user interface elements. The prompt for the tool asks for design elements as well as appropriate UI text.\
\
This example is presented as a concete and practical example of a tool that one might create and deploy throughout your team.\
\
Here is an example of its usage.\
\
User Input:

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-07 at 9.26.08 PM.png" alt=""><figcaption><p>Sample input using the specified input fields.</p></figcaption></figure>

Generated Output:

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-07 at 9.26.33 PM.png" alt=""><figcaption><p>A text-based user interface with text generated by our app.</p></figcaption></figure>

You add your custom tool json inside Genstudio.

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-07 at 9.44.56 PM.png" alt=""><figcaption><p>Upload json to define a custom tool</p></figcaption></figure>

\
\
Here is the actual json that you would update in a file (i.e. text-based-ux-designer.json).&#x20;

||CODE_BLOCK||json
{
"version": "0.1",
"metadata": {
"avatar": "",
"creator": {
"name": "Inspired by Khoa Tran",
"email": "admin@eastagile.com",
"organization": "East Agile"
},
"timestamp": "2023-06-01T10:00:00Z",
"variables": [
{
"name": "Feature Description",
"type": "text",
"default": "",
"description": "A brief description of the feature or functionality."
},
{
"name": "UI Components",
"type": "text",
"default": "Anything appropriate and conventional",
"description": "The type of user interface components (e.g., radio button, multi-select list)."
}
],
"parameters": {
"top_p": 1,
"max_tokens": 1024,
"temperature": 0.7,
"presence_penalty": 0,
"frequency_penalty": 0
},
"avatar_type": "base64",
"description": "This tool generates a text-based user interface based on your description and user interface components specified.",
"prompt_name": "Text-based User Interface Generator",
"usage_notes": "Provide a description of what sort of interface, feature, or app you want to generate (Feature Description) and any specific type of user interface elements you wish to use (UI Components). This application is designed to support AI Driven Development (AiDD) as practiced by East Agile https://eastagile.com.",
"model_version": [
"gpt-3.5",
"gpt-4",
"claude",
"palm"
],
"expected_output": {
"type": "text"
}
},
"model_prompt": "Generate a text-based user interface with wording for the following feature or functionality:\n\nFeature Description: {{Feature Description}}\nUser Interface Elements: {{UI Components}}.\n\nPlease follow these best practices for creating effective UX writing:\n1. Make it usable: Prioritize functionality and ease of use over clever language or unconventional design.\n2. Make it helpful: Provide useful information that guides users and helps them accomplish their goals.\n3. Make it accessible: Use simple, clear language and conentional design elements that make it easy for all users to understand, including those with disabilities.\n4. Make it clear: Avoid jargon and ambiguity; users should be able to understand the content and UI quickly and easily. When possible UI affordances should be obvious without needing to read text.\n5. Make it appropriate: Consider the cultural background and context of your users, if provided, and ensure the content is inclusive and respectful.\n6. Use the active voice: Prompt users to take action by using active, direct language.\n7. Write positively: Focus on affirmative statements and avoid negative phrases unless absolutely necessary.\n8. Be concise: Keep sentences short and to the point, eliminating unnecessary words and phrases.\n9. Perform constant A/B testing: Continuously test and refine the content to ensure it is effective and user-friendly.\n10. Keep brand voice and tone consistent: Ensure the content aligns with the overall brand personality and maintains a consistent tone throughout the user experience.\n11. Use action-oriented language: Encourage users to take action by using language that is clear, direct, and focused on specific tasks.\n12. Maintain contextual relevance: Provide relevant context to ensure the content is easily localizable and translatable for different languages and cultures.\n\nGenerated UX Writing Content:\n"
}

||CODE_BLOCK||

You could create your own icon and enter it as a base64 block of text to this json. Otherwise a nice default will be used.


==> developers/develop-your-own-tools/json-format-for-smart-tools.md <==
---
description: A portable way to share SkyDeck.AI smart tools written in Python code
---

# JSON Format for Smart Tools

## Overall <a href="#lgmg27qgfdrg" id="lgmg27qgfdrg"></a>

To create a smart tool on SkyDeck.AI, you need to upload a set of files according to the specifications mentioned in the File Structure section. Once uploaded, our platform will perform the initial setup, which may take a few minutes. Afterward, the tool will be available in the GenStudio Workspace.

## File Structure <a href="#id-7dcm0ac78x60" id="id-7dcm0ac78x60"></a>

### \<tool\_name>.json <a href="#xvdq6eic1eed" id="xvdq6eic1eed"></a>

The tool's behavior is also configured through a JSON file. Here is a brief overview of the key fields in the configuration:

* **version**: The current version of the tool.
* **tool\_name**: The name of the tool. This name should be unique in your workspace.
* **tool\_code**: Contains the Python code to be executed. More details on this field will be on the next section.
* **description**: A brief description of what the tool does.
* **usage\_notes**: Instructions on how to use the tool.
* **model\_version**: Specify the models that are allowed to use for follow-up questions. To specify all models, use _\["gpt-4", "gpt-3.5", "claude", "chat-bison"]_.
* **creator**: Information about the creator of the tool, including name, email, and organization.
* **variables**: An array of variables used by the tool. Each variable has a name, description, and default value. The order of variables in the UI follows the order in this array.
* **expected\_output**: The type of output produced by the tool. During the development stage, the value should always be text.
* **avatar\_type**: The format of the avatar used in the tool's UI.
* **timestamp**: The date and time when the tool was last updated.
* **requirements:** specifies the required packages to run the script in tool\_code.
* **avatar**: the string representing the logo of this tool

### tool\_code convention: <a href="#id-177qobv2sfe9" id="id-177qobv2sfe9"></a>

This script outlines the functioning of your tool. The main component of this script is the _execute_ function, which has the following requirements:

* The function should have a single input parameter called _variables_, which is a dictionary. Each key in this dictionary corresponds to a field that the user would input into your tool.
* The function should return a string, which will be displayed as the response on the GenStudio UI.

## Example Tools <a href="#h9o86a5lgfut" id="h9o86a5lgfut"></a>

### Image generation using DALL-E 2 <a href="#quzi31gwxka6" id="quzi31gwxka6"></a>

**Description:**

This tool accepts an image description as input and generates a corresponding URL for the image. The output includes the URL along with an expiration note. The tool functions by sending the query to the OpenAI DALL-E API and retrieving the response.

**Input:**

* Description: Image description, e.g., "A white furry cat"

**Output:**

* A message with the generated URL for the image along with the expiration note.

#### Python script (which would be a field inside image\_generation.json): <a href="#qw9m9923kptk" id="qw9m9923kptk"></a>

||CODE_BLOCK||python
import openai
def execute(variables):
    openai.api_key = '<USER API KEY>'
    description = variables['Description']
    response = openai.Image.create(
        prompt=description,
        n=1,
        size="1024x1024"
    )
    image_url = response['data'][0]['url']
    return f"Here is the link to your image:{image_url}. The link will expire in 1 hour."
||CODE_BLOCK||

#### image\_generation.json <a href="#id-4q3mtb2zf8gt" id="id-4q3mtb2zf8gt"></a>

||CODE_BLOCK||json
{
    "version": "0.1",
    "metadata": {
        "tool_name": "Image generation",
        "tool_code": "import openai\n\ndef execute(variables):\n openai.api_key = ''\n description = variables['Description']\n response = openai.Image.create(\n prompt=description,\n n=1,\n size=\"1024x1024\"\n )\n\n image_url = response['data'][0]['url']\n return f\"Here is the link to your image:{image_url}. The link will be expired in 1 hour.\"\n",
        "description": "Generated an image based on the description with OpenAI's DALL-E model.",
        "usage_notes": "Describe the image in detail and put it in the description field. An URL of the image will be returned. The lifetime of the URL is about 1 hour, so make sure to download it before expired",
        "model_version": ["gpt-3.5","gpt-3.5-turbo", "gpt-4", "claude"],
        "creator": {
            "name": "SkyDeck AI",
            "email": "skydeck@eastagile.com",
            "organization": "East Agile"
        },
        "variables": [
            {
                "name": "Description",
                "description": "Image description",
                "default": "a white siamese cat"
            }
        ],
        "expected_output": {
            "type": "text"
        },
        "avatar_type": "base64",
        "timestamp": "2023-05-23T10:00:00Z",
        "requirements": "openai>=0.27.4",
        "avatar": ""
    }
}
||CODE_BLOCK||

### Real-time weather report with Open-Meteo API <a href="#yhjv7lbl4mu0" id="yhjv7lbl4mu0"></a>

**Description**:

This tool leverages the Open-Meteo API to provide real-time weather information based on users' questions. By asking a question about the weather, such as temperature, precipitation, or wind conditions, the tool retrieves the most relevant and up-to-date data.

The functioning of this tool relies on APIChain - a feature from the LangChain library - to access the Open-Meteo API documentation. This enables the tool to learn how to make the correct API calls and retrieve the required information seamlessly.

**Input**:

* Question: Ask a specific question about the weather, e.g., "What is the current temperature in New York City?"

**Output**:

* A response providing the requested weather information.

#### Python script (which would be a field inside weather\_reporter.json): <a href="#qw9m9923kptk" id="qw9m9923kptk"></a>

||CODE_BLOCK||python
from langchain.chains.api import open_meteo_docs
from langchain.chat_models import ChatOpenAI
from langchain.chains import APIChain
def execute(variables):
    question = variables['Question']
    llm = ChatOpenAI(
        model_name='gpt-3.5-turbo',
        openai_api_key='<USER API KEY>'
    )
    api_chain = APIChain.from_llm_and_api_docs(
        llm, open_meteo_docs.OPEN_METEO_DOCS, verbose=False
    )
    result = api_chain.run(question)
    return result
||CODE_BLOCK||

{% hint style="info" %}
Note that Langchain is now integrated with Rememberizer. See [https://python.langchain.com/docs/integrations/retrievers/rememberizer/](https://python.langchain.com/docs/integrations/retrievers/rememberizer/)
{% endhint %}

#### weather\_reporter.json <a href="#bgnhw14oi99h" id="bgnhw14oi99h"></a>

||CODE_BLOCK||json
{
  "version": "0.1",
  "metadata": {
    "tool_name": "Weather Reporter",
    "tool_code": "from langchain.chains.api import open_meteo_docs\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.chains import APIChain\n\n\ndef execute(variables):\n question = variables['Question']\n llm = ChatOpenAI(model_name='gpt-3.5-turbo',\n openai_api_key='')\n api_chain = APIChain.from_llm_and_api_docs(\n llm, open_meteo_docs.OPEN_METEO_DOCS, verbose=False)\n result = api_chain.run(question)\n return result\n",
    "description": "Leverage the Open-Meteo API to retrieve real-time weather details",
    "usage_notes": "Enter your weather-related question in the provided field",
    "model_version": ["gpt-3.5", "gpt-3.5-turbo", "gpt-4", "claude"],
    "creator": {
      "name": "SkyDeck AI",
      "email": "skydeck@eastagile.com",
      "organization": "East Agile"
    },
    "variables": [
      {
        "name": "Question",
        "description": "Inquire about the weather conditions",
        "default": "What is the current temperature in Munich, Germany, expressed in degrees Celsius?"
      }
    ],
    "expected_output": {
      "type": "text"
    },
    "avatar_type": "base64",
    "timestamp": "2023-07-13T10:00:00Z",
    "requirements": "openai>=0.27.4\nlangchain>=0.0.229",
    "avatar": ""
  }
}
||CODE_BLOCK||

## Limitations <a href="#g32lfwd6xlxx" id="g32lfwd6xlxx"></a>

AWS Lambda only allows a function to run for a maximum of 15 minutes and 10GB of RAM. Therefore, the tools should finish their execution within this constraint.


==> developers/develop-your-own-tools/json-format-for-llm-tools.md <==
---
description: A Portable Way to Share Tools
---

# JSON Format for LLM Tools

## Introduction

Sharing a tool in a way that could be quickly added to a program or tool editor would be greatly improved with a standard way to represent a tool and how to use it. We want to enable features such as the following:

* An icon to visually represent the tool
* Metadata for the prompt:
  * A name for the tool
  * A description for the tool
  * Usage notes for the tool
* Placeholder parameters that are included in the tool string
* Expected output
* Versioning and timestamps.

## JSON Format Specification

||CODE_BLOCK||json
{
  "version": "string or integer",
  "model_prompt": "string with {{variable_name}} placeholders",
  "metadata": {
    "prompt_name": "string",
    "description": "string",
    "usage_notes": "string",
    "model_version": ["string", "string", …],
    "creator": {
      "name": "string",
      "email": "string",
      "organization": "string"
    },
    "parameters": {
      "temperature": "float",
      "max_tokens": "integer",
      "top_p": "float",
      "frequency_penalty": "float",
      "presence_penalty": "float"
    },
    "variables": [
      {
        "name": "variable name 1",
        "type": "text",
        "description": "string",
        "default": "string",
      },
      {
        "name": "variable name 2",
        "type": "single-select",
        "description": "string",
        "default": "value1",
        "allowed_values": ["value1", "value2", "value3"]
      },
      {
        "name": "variable name 3",
        "type": "multi-select",
        "description": "string",
        "default": ["value1", "value2"]
        "allowed_values": ["value1", "value2", "value3"]
      },
      ...
    ],
    "expected_output": {
      "type": "string (e.g., text, code, limited)",
      "format": "string (optional, e.g., JSON, XML, CSV)",
      "language": "string (optional, e.g., Python, JavaScript)",
      "allowed_values": ["string1", "string2", ...] (optional)
    },
    "avatar_type": "string (e.g., url, base64)",
    "avatar": "string (URL or base64-encoded image), 256x256 pixels recommended",
    "timestamp": "string (ISO 8601 format)"
  }
}
||CODE_BLOCK||

You can download our sample JSON [here](https://skydeck-public-assets.s3.amazonaws.com/sample\_tool.json).

## Fields Description

* **model\_prompt**: A string containing the GPT model prompt.
* **metadata**: An object containing additional information about the GPT model prompt, including the following sub-fields:
  * **model\_version**: A string indicating the version of the GPT model used.
  * **creator**: An object containing information about the creator of the GPT model prompt, with the following sub-fields:
    * **name**: A string representing the name of the creator.
    * **email**: A string representing the email of the creator.
    * **organization**: A string representing the organization the creator is affiliated with.
  * **parameters**: An object containing information about the GPT model parameters, with the following sub-fields:
    * **temperature**: A float indicating the temperature used for controlling the randomness of the output.
    * **max\_tokens**: An integer indicating the maximum number of tokens in the generated response.
    * **top\_p**: A float representing the nucleus sampling probability threshold.
    * **frequency\_penalty**: A float representing the penalty applied to tokens based on their frequency in the dataset.
    * **presence\_penalty**: A float representing the penalty applied to new tokens based on their presence in the prompt.
  * **timestamp**: A string in ISO 8601 format representing the date and time when the GPT model prompt was created or last modified.
  * **expected\_output (Optional)**: An object containing fields related to the expected output from the model\_prompt, including the following sub-fields:
    * **type**: A string indicating the type of output expected from the model\_prompt.
    * **format (Optional)**: A string representing the format of the expected output if applicable.
    * **language (Optional)**: A string representing the programming language of the expected output if the type is `code`.
    * **allowed\_values (Optional)**: An array of strings containing a list of allowed output values if the type is `limited`.
  * **variables (Optional)**: A list containing variables that might be inserted into the `model_prompt` string in an f-string style. Each variable contains the following sub-fields:
    * **name**: A string representing the variable name.
    * **type**: A string showing the type of variable. Currently the possible values of `type` are `text` for default variable, and `single-select` or `multi-select` for selection variables.
    * **description**: A string showing the description of the variable, including usages and examples.
    * **default**: A value showing the default value of the variable. This value is a string if `type` is `text` or `single-select`, and an array of strings for `multi-select`.
    * **allowed\_values**: An array of strings containing a list of allowed values if the variable type is `single-select` or `multi-select`
  * **avatar (Optional)**: An object containing fields related to the graphic image acting as an avatar or icon for the prompt, including the following sub-fields:
    * **avatar\_type**: A string specifying the type of avatar data included.
    * **avatar**: A string containing the URL pointing to the image if the avatar\_type is `url`, or a base64-encoded string representing the image if the avatar\_type is `base64`.
  * **prompt\_name (Optional)**: A string representing the name of the prompt.
  * **description (Optional)**: A string providing a brief description of the tool and its purpose.
  * **usage\_notes (Optional)**: A string containing free-form notes from the creator about the usage or any specific considerations related to the tool.

To specify the format of the expected output from the model\_prompt, you can add an `expected_output` object within the `metadata` object. Depending on the type of expected output, you can include the relevant sub-fields in the `expected_output` object.

To include fields for variables that might be inserted into the `model_prompt` string in an f-string style, you can add a separate `variables` list within the `metadata` object.

To include a graphic image acting as an avatar or icon for the prompt, you can add an `avatar` field within the `metadata` object.

Including the `expected_output`, `variables`, `avatar`, `prompt_name`, `description`, and `usage_notes` fields within the `metadata` object helps keep all the contextual information about the prompt in one place, making it easier to manage and understand.

You can use the `version` field at the top level of the JSON object to explicitly track the version of the entire JSON file


==> developers/develop-your-own-tools/README.md <==
---
description: >-
  You can create custom prompts, and advanced tools for use in SkyDeckAI or to
  share with other elsewhere.
---

# Develop Your Own Tools

You upload json that defines custom tools inside GenStudio.&#x20;

<figure><img src="../../.gitbook/assets/Custom Tools Upload Screen - GenStudio.png" alt=""><figcaption><p>Uploading json that defines a custom tool</p></figcaption></figure>


==> developers/develop-your-own-tools/json-format-for-tools.md <==
---
description: As of July 26, 2023
---

# JSON format for Tools

## Introduction

This documentation outlines the JSON structures supported by SkyDeck AI for two distinct types of tools: LLM Tools and Smart Tools. The purpose of this page is to provide a brief introduction to these tool categories and their respective JSON structures. Detailed information and examples for each tool type can be found in the corresponding sub-pages.

***

#### LLM Tools

LLM (Large Language Model) Tools are designed to facilitate user interaction with LLM models by sending user input to predefined prompts.

{% content-ref url="json-format-for-llm-tools.md" %}
[json-format-for-llm-tools.md](json-format-for-llm-tools.md)
{% endcontent-ref %}

#### Smart Tools

Smart Tools extend the capabilities of LLM Tools by incorporating Python code execution for data extraction and processing. The integration of Python enables users to perform complex calculations, data transformations, and other advanced operations beyond the scope of standard LLM Tools functionality.

{% content-ref url="json-format-for-smart-tools.md" %}
[json-format-for-smart-tools.md](json-format-for-smart-tools.md)
{% endcontent-ref %}


==> genstudio-workspace/web-browsing.md <==
# Web Browsing

Scraping content from websites to include in your prompts is a very helpful feature of GenStudio. Any URL you include in curly brackets will be replaced by the content scraped from that site. For example, you could write "Summarize the most important news from the following \{{https://nytimes.com\}}."

<figure><img src="../.gitbook/assets/web-scraping1.png" alt=""><figcaption><p>Web browsing with SkyDeck AI</p></figcaption></figure>

© 2023 SkyDeck AI Inc.


==> genstudio-workspace/conversations.md <==
# Conversations

### Interact with LLM

This is where you interact with your Large Language Model (LLM) Artificial Intelligence (AI) models. You do so in a conversational _chat_ fashion. You can 'talk' directly to your models using the "default" tool. This is how your session starts out.

<figure><img src="../.gitbook/assets/conversation-start.png" alt=""><figcaption><p>The beginning of a conversation</p></figcaption></figure>

Start a conversation by clicking the **New conversation** button, or you can resume an existing conversation by choosing one on the Sidebar.

Just ask your LLM anything. These are your "prompts" to the model. But there are best practices you can follow to get better results. For example, just asking for better results can produce better results, for example, "As an expert in physics explaining to a child, explain why the sky is blue."\
\
Your input should be entered in the input field at the bottom of the screen. You submit it to your LLM for a response by clicking the **Ask AI** button on the right hand side of the input field, or by pressing **Enter** while focusing the input.

You can select which model is to be used from the middle menu below the input field. You can change your model choice at any time. Some models will be more appropriate than others. For example, GPT-4 is one of the most advanced models to date and tends to produce more carefully thought out responses. However, Anthropic's Claude models can support much larger context windows (about as much as an entire book) which allows you to submit large documents in your prompt for review, background, or modification.

<figure><img src="../.gitbook/assets/models-menu.png" alt=""><figcaption><p>Choose your LLM for different messages</p></figcaption></figure>

### Regenerate and Edit the prompt

If you do not like the result your model produces, you can ask it to regenerate the response using the **Regenerate** button. You can also change your model and send another response.

<figure><img src="../.gitbook/assets/regenerate.png" alt="" width="563"><figcaption><p>Regenerate AI response</p></figcaption></figure>

Skydeck.AI also let you edit your prompt and try again. You can click the **Edit message** button, change the input and resubmit.

<figure><img src="../.gitbook/assets/edit-message.png" alt="" width="563"><figcaption></figcaption></figure>

### Sending non-AI messages

You can also sending your messages without asking the AI, and it will just appear like a normal message with no response in the conversation. This is useful when you want to take some notes directly in the conversation, or working with other members (Learn more in [Sharing and Collaboration](sharing-and-collaboration.md)).

To send a non-AI message, simply enter the texts in the input field and click **Send chat message** button, or you can press **Ctrl + Enter** while focusing the input.

<figure><img src="../.gitbook/assets/chat-buttons.png" alt=""><figcaption><p><strong>Send chat message (1) and Ask AI (2) buttons</strong></p></figcaption></figure>

### Retrieve the chat content

You can copy all the text of your prompts and responses to your clipboard using the icon in the upper right hand side. This is a handy way to include your work in other documents. You can also download the conversation content into a markdown file by clicking the **Download** button.

<figure><img src="../.gitbook/assets/copy-download-conversation.png" alt="" width="326"><figcaption><p>Download (1) and Copy (2) a conversation</p></figcaption></figure>

© 2023 SkyDeck AI Inc.


==> genstudio-workspace/slack-synchronization.md <==
# Slack Synchronization

By integrating with Slack, you can send your GenStudio conversations to a Slack channel and vice versa. This allows your team to collaborate seamlessly.

{% hint style="info" %}
This page will discuss about how you can synchronize between Slack and GenStudio. To learn more about how to set up Slack, please visit [Slack Integration](../integrations/app-integrations/slack-integration.md).
{% endhint %}

### Sending GenStudio conversations messages to Slack

Once you have connect a conversation with a public or private Slack channel, SkyDeck.AI will send all the current messages to that channel. This will only be done once at the beginning of the connection.

<figure><img src="../.gitbook/assets/sync-to-slack.png" alt="" width="563"><figcaption></figcaption></figure>

After that, for every new message that is sent to the conversation, it will also be sent to that Slack channel as well as its response.

<figure><img src="../.gitbook/assets/new-msg-from-conv.png" alt="" width="563"><figcaption></figcaption></figure>

### Sending Slack messages to GenStudio conversations

To send a message from Slack to the connected conversation:

1. Open the thread of that conversation
2. Tag the **SkyDeck.ai** app and write your prompt.
3. The message will be sent to GenStudio and you will receive the response back.

<figure><img src="../.gitbook/assets/new-msg-from-slack (1).png" alt="" width="563"><figcaption><p>Open the thread (1) - Send a message (2) - Response from GenStudio (3)</p></figcaption></figure>

Here is how the message will appear on GenStudio:

<figure><img src="../.gitbook/assets/gen-view.png" alt="" width="563"><figcaption></figcaption></figure>

### Formatting

Markdown does not work automatically in Slack when we send content from GenStudio Collaboration. So you will see `*hello*` instead of \*hello\*. This is a recent change in Slack. But there is a solution. In the desktop app you may manually turn markdown recognition \*on\* in the Advanced settings in Slack.

<figure><img src="../.gitbook/assets/Screenshot 2023-12-15 at 10.26.02 PM (1).png" alt=""><figcaption><p>Select "Format messages with markup"</p></figcaption></figure>

<figure><img src="../.gitbook/assets/Screenshot 2023-12-15 at 10.26.58 PM.png" alt=""><figcaption><p>An example of the improvement seen from turning on "Format messages with markdown".</p></figcaption></figure>


==> genstudio-workspace/public-snapshots.md <==
# Public Snapshots

The snapshot feature provides users with the ability to create a static, comprehensive view of a conversation and share it through a publicly accessible URL. It enhances collaboration by allowing users to disseminate their work quickly and efficiently to your colleagues and even external stakeholders.

### Create a Snapshot

When snapshot of a conversation is created, the system captures the current state of the conversation thread, including messages, timestamps, the LLMs that respond to the messages. Optionally, you can choose to include the participants' names or sharing anonymously. The snapshot is immutable, as it will not be updated when you continue your conversation. If you want to include the new messages, you have to create another snapshot.

To create a snapshot, choose a conversation that you want to share from the left sidebar and click the blue **Collaborate** button in the upper right corner.

<figure><img src="../.gitbook/assets/public_snapshot1.png" alt=""><figcaption><p>Click the Collaborate button</p></figcaption></figure>

A popup will appear. Choose the **Share publicly** tab and then click **Create new snapshot**. You have to options: **Share anonymously** or **Share with your name**. Choose the former if you do not want to include your name in the snapshot, and choose the latter if you are willing to share it.

<figure><img src="../.gitbook/assets/public_snapshot2.png" alt=""><figcaption><p>Click Create new snapshot and choose a sharing option</p></figcaption></figure>

{% hint style="info" %}
Once created, the snapshot will not include changes from the conversation, such as message addition or deletion.
{% endhint %}

A unique URL is generated for each snapshot so that you can give it to anyone to allow access to the conversation snapshot. The URL generation process employs cryptographic hashing techniques to ensure the uniqueness and integrity of each link.

<figure><img src="../.gitbook/assets/public_snapshot3.png" alt=""><figcaption></figcaption></figure>

### Snapshot View

If you choose **Share anonymously**, the participants' names of the conversation will not appear. Instead, you will see User 1, User 2... as the owner of the messages.

<figure><img src="../.gitbook/assets/public_snapshot4.png" alt=""><figcaption><p>Anonymized View</p></figcaption></figure>

If you choose **Share with your name**, the participants' names will appear.

<figure><img src="../.gitbook/assets/public_snapshot5.png" alt=""><figcaption><p>Unanonymized View</p></figcaption></figure>

{% hint style="info" %}
If you wish to anonymize the participants later, you have to create another snapshot. You can [disable](public-snapshots.md#disable-a-snapshot) or [delete](public-snapshots.md#delete-a-snapshot) the current one later.
{% endhint %}

### Continue from a Snapshot

When someone accesses your snapshot, they are able to continue the conversation from that point. Click **Continue this conversation** at the bottom of the page, and a popup will appear asking for your workspace account.

If you don't have one, you can sign up by entering your email address, and we will guide you through the process of [Setting up an account](../control-center/setup-guide/). After that, you can continue the snapshot once signed up.

<figure><img src="../.gitbook/assets/public_snapshot6.png" alt=""><figcaption></figcaption></figure>

### Disable a Snapshot

Users have the ability to toggle the accessibility of a snapshot via the management interface. Disabling a snapshot renders the URL inactive, and any attempt to access the URL afterwards will be responded with not found resources. You can choose to re-enable it later.

<figure><img src="../.gitbook/assets/public_snapshot7.png" alt=""><figcaption><p>Click the "Eye" icon to disable/enable a Snapshot</p></figcaption></figure>

### Delete a Snapshot

You can choose to delete a snapshot if you don't want to share it anymore. Be cautious that this action is irreversible, which means that you cannot regain the deleted snapshot with the same URL. When clicking the "Trash" icon, you have to confirm the deletion to avoid unintended removal.

<figure><img src="../.gitbook/assets/public_snapshot8.png" alt=""><figcaption><p>Click the "Trash" icon to delete a Snapshot</p></figcaption></figure>



==> genstudio-workspace/document-upload.md <==
# Document Upload

SkyDeck.AI allows you to add different types of documents and images to your conversations with AI. You can ask your favourite LLM to analyze your file, and you will be able to receive its summary, interpretation, or answers for your questions about its content.

### Add a document

To add a document, open a conversation and click **Add** next to the prompt input. Then, choose **Upload documents**. We are currently supporting these files extensions: PDF, DOC, DOCX, PPTX, and simple text files.

<figure><img src="../.gitbook/assets/image (57).png" alt="" width="563"><figcaption></figcaption></figure>

The document will be attached with your message and sent to LLM. You can see the file associated with the message and you can even re-download it.

<figure><img src="../.gitbook/assets/attached-document.png" alt=""><figcaption></figcaption></figure>

### Add an image

To add an image, click **Add** and then, choose **Upload images**. We are currently supporting these files extensions: JPEG, JPG, WEBP, PNG.

<figure><img src="../.gitbook/assets/image (58).png" alt="" width="563"><figcaption></figcaption></figure>

The image will be attached with your message and sent to LLM. Additionally, you can also click on the image, which will open a new popup window displaying it in more clearly.

<figure><img src="../.gitbook/assets/attached-image.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/preview-image.png" alt="" width="375"><figcaption><p>View the image directly in GenStudio</p></figcaption></figure>

### Restrictions <a href="#h_52e5a07158" id="h_52e5a07158"></a>

* Total size of all files per message: up to 20MB

<figure><img src="../.gitbook/assets/error1.png" alt="" width="490"><figcaption></figcaption></figure>

* If the file is less than 20MB but still exceeds the token limit, another error will be displayed:

<figure><img src="../.gitbook/assets/error2.png" alt=""><figcaption></figcaption></figure>

* Total number of files: up to 10

<figure><img src="../.gitbook/assets/error3.png" alt="" width="488"><figcaption></figcaption></figure>

### Rememberizer - Extending AI knowledge

You can utilize [Rememberizer](https://rememberizer.ai/), our solution for giving AI your own knowledge and information and allowing SkyDeck.AI to learn from your documents and discussions. Learn more about Rememberizer [here](https://docs.rememberizer.ai/).


==> genstudio-workspace/sharing-and-collaboration.md <==
# Sharing and Collaboration

SkyDeck.AI is committed to breaking down silos and promoting a culture of collaborative innovation. You don't have to work in isolation when using the GenStudio Workspace. Whether you are working on a general conversation with one of the LLM models or diving deep into one of the six specialized tools for targeted tasks, GenStudio provides a cohesive and intuitive platform for real-time collaboration.

### How to Invite Collaborators

To add collaborators to any existing conversation, select the conversation from the left sidebar and click the blue **Collaborate** button in the upper right corner.

<figure><img src="../.gitbook/assets/public_snapshot1.png" alt=""><figcaption><p>Click the Collaborate button</p></figcaption></figure>

A popup will appear with the default tab of **Invite to collaborate**. Toggle the **Collaboration** slider and then click the blue **Copy link** button.

{% hint style="info" %}
Should you wish to discontinue collaboration at any point, simply switch the slider to the off position. Please note that this will invalidate the current link, and it will be different if you generate a new one.
{% endhint %}

<figure><img src="../.gitbook/assets/collab2.png" alt="" width="563"><figcaption><p>Enable collaboration and copy the link</p></figcaption></figure>

With this link, you can invite any colleagues with ease. There is no need to add each collaborator's email address manually.

{% hint style="info" %}
All invitees must have an account registered in the same SkyDeck.AI workspace as the conversation owner. This protects organizational assets and confidential information that may be contained within the GenStudio Workspace conversation.
{% endhint %}

{% hint style="info" %}
You can further enhance collaboration by synchronizing Slack channels with your GenStudio conversations. To learn more, please visit [Slack Synchronization](slack-synchronization.md) and [Slack Integration](../integrations/app-integrations/slack-integration.md).
{% endhint %}

### Collaborator View

Collaborators can only see the conversation they have been invited to. They will not be able to see the rest of your GenStudio conversations. To include them in additional conversations, you must provide separate links for each respective dialogue.

<figure><img src="../.gitbook/assets/collab3.png" alt="" width="563"><figcaption></figcaption></figure>

Invited collaborators can exit a conversation whenever they want by clicking the **Collaborate** button and then the red **Leave this conversation** button.

<figure><img src="../.gitbook/assets/collab4.png" alt="" width="563"><figcaption></figcaption></figure>

### Your View

Once a colleague contributes to the conversation, you will see a notification bubble on the conversation in your GenStudio Workspace.

<figure><img src="../.gitbook/assets/collab6.png" alt="" width="563"><figcaption></figcaption></figure>

Each individual's input or contributions will be marked by their respective initials. Hovering over the initials will reveal your colleague's name.

<figure><img src="../.gitbook/assets/collab5.png" alt=""><figcaption></figcaption></figure>

### Working with your colleagues

In GenStudio conversations, not every message needs to be sent to AI. Sending non-AI messages can enhance personal and direct interactions. Whether you're sharing updates, giving feedback, or simply having a chat, relying on non-AI messages ensures clarity and authenticity, allowing for meaningful connections and effective communication without the influence of artificial intelligence.

You can simply send non-AI messages as discussed in this [page](conversations.md), but collaboration enables a more powerful way to interact with you colleagues. When writing a message, you can use the @ notation followed by the member's name to mention them for the next message. This method ensures that specific individuals are alerted about pertinent information, updates, or actions that require their attention. It streamlines communication by directly tagging the involved parties, reducing the chance of important messages being overlooked and ensuring that everyone stays informed and engaged.

<figure><img src="../.gitbook/assets/collab-mentioning.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/README.md <==
---
description: GenStudio
---

# GenStudio Workspace

* [**Conversations**](conversations.md)
* [**Sharing and Collaboration**](sharing-and-collaboration.md)
* [**Slack Synchronization**](slack-synchronization.md)
* [**Public Snapshots**](public-snapshots.md)
* [**Web Browsing**](web-browsing.md)
* [**Document Upload**](document-upload.md)
* [**Tools**](tools/)
* [**Data Security**](data-security/)


==> genstudio-workspace/data-security/data-loss-prevention.md <==
# Data Loss Prevention

Our data loss prevention system helps users safeguard their personal identifiable information (PII). It works by scanning user input for sensitive data, and provides real-time warnings to help prevent unintentional data exposure.

The system is designed to detect a wide range of sensitive data types. When a user's input includes these types of data, our system will alert the user. The user then has the option to send the message anyway, anonymize the text, or choose not to send the message at all.

## List of supported entities:

### **Global Entities:**

* Credit Card Numbers
* Crypto Wallet Numbers
* Email Addresses
* International Bank Account Numbers (IBAN)
* Phone Numbers
* Medical License Numbers

### **Country Specific Entities:**

#### USA:

* US Bank Account Numbers
* US Driver License Numbers
* US Individual Taxpayer Identification Numbers (ITIN)
* US Passport Numbers
* US Social Security Numbers (SSN)

#### UK:

* UK National Health Service (NHS) Numbers

#### Spain:

* Spanish Tax ID (NIF) Numbers

#### Italy:

* Italian Personal Identification Codes
* Italian Driver License Numbers
* Italian VAT Code Numbers
* Italian Passport Numbers
* Italian Identity Card Numbers

#### Singapore:

* Singapore National Registration Identification Card Numbers

#### Australia:

* Australian Business Numbers (ABN)
* Australian Company Numbers (ACN)
* Australian Tax File Numbers (TFN)
* Australian Medicare Numbers

© 2023 SkyDeck AI Inc.


==> genstudio-workspace/data-security/README.md <==
---
description: >-
  Every part of the SkyDeck AI system is designed to allow enhanced security
  over activities and data protection for all users.
---

# Data Security

## OpenAI API Usage

One of the key advantages of using your OpenAI api key in **SkyDeck AI** is that it **enables private access to OpenAI systems**. If one uses free or paid ChatGPT services OpenAI makes no promises about data security. But if one uses an OpenAI API key in Control Center then all of the chat interaction by your users in GenStudio remains private. \
\
This is what [OpenAI writes](https://openai.com/security) on the subject:\
\
"Data submitted through the OpenAI API is not used to train OpenAI models or improve OpenAI’s service offering. Data submitted through non-API consumer services ChatGPT or DALL·E may be used to improve our models."


==> genstudio-workspace/tools/README.md <==
# Tools

### Introduction

The Tool feature helps to construct more complex prompts easily. Generally, a tool includes one or many input fields, which serve as variables for crafting a more detailed prompt. This simplifies the interaction with AI, as users only need to provide the dynamic content, and our tool handler will take care of the rest. There are two types of tools: **LLM Tools** and **Smart Tools**.

* LLM tools allow users to only need to give some small of inputs, and these will be sent to predefined prompts to be processed by LLMs. Each tool acts as a template that outlines the necessary components of a prompt, allowing users to focus on content rather than format. It is is especially beneficial for users who frequently generate similar prompts and wish to streamline their workflow.
* Smart Tools extend the capabilities of LLM Tools by incorporating Python code execution for data extraction and processing. The integration of Python enables users to perform complex calculations, data transformations, and other advanced operations beyond the scope of standard LLM Tools functionality.

### Usage

To use a tool, click on **Default tool** button below the prompt input field and you will see a list of available tools in the right column of the page. When you click on one of these tools, the input section is modified and you will see the inputs that the tool expects. After you fill these in and submit your choices, the tool will respond with output in your current conversation. You will then fall back into the default conversation mode and you can interact with the response from your tool with replies or follow up.

<figure><img src="../../.gitbook/assets/tools-menu.png" alt=""><figcaption><p>The Tools menu</p></figcaption></figure>

Within a conversation you might find you benefit from using many tools. You might start with one tool to get strategy advise. Then you might use a SQL tool to write a query to produce some follow up analysis. And finally you might use a writing tool to take your results and write them up in fashion targeted to the audience for your results.

### Define your own tools

In the following sections, we will show you how to use our default tools for your daily tasks. To define a custom tool, learn more at [develop-your-own-tools](../../developers/develop-your-own-tools/ "mention").

© 2023 SkyDeck AI Inc.


==> genstudio-workspace/tools/pair-programmer/how-to-use.md <==
# How to Use

To get started with Pair Programmer, you will need to specify programming language you are using or want to use. By default, the field is set to Python.

Once you submit your programming language, you will receive a message similar to the one below (although the exact wording may differ) that details what Pair Programmer has to offer and provides some useful commands:

<figure><img src="../../../.gitbook/assets/pair-programmer-2.png" alt=""><figcaption></figcaption></figure>

If everything looks correct, you can then write your programming question into the prompt area.

### /change

The `/change` command allows you to modify your preferences when interacting with Pair Programmer. Currently, it supports two options:

* **Programming language** – Switch programming language. For example, enter `/change language=Java` to switch to Java.
* **Interaction language** – Change the communication language. For example, enter `/change language=Spanish` to switch to Spanish.

### /implement

The `/implement` command is used when you want to create a new program. It follows a five-step procedure to ensure a thorough approach:

For example, you could input`/implement task=TaskDescription`. Please replace `TaskDescription` with a description of the task you want to be implemented.

#### Example

Let's say you want to implement a program that calculates the sum of all elements in a list.

{% code overflow="wrap" %}
||CODE_BLOCK||
/implement task=Create a Python function that calculates the sum of all elements in a list. The function should take a list of integers as input and return an integer as output.
||CODE_BLOCK||
{% endcode %}

### /modify

The `/modify` command is used when you want changes or adjustments made to an existing program. Input `/modify code=ProgramCode modifications=ProgramModification`. Please replace `ProgramCode` with the program you want to modify, and `ProgramModification` with a description of what you want to change.

#### Example

For example, imagine you have a Python function that calculates the area of a rectangle, and you want to modify it to calculate the area of a circle instead.

{% code overflow="wrap" %}
||CODE_BLOCK||
/modify code=
def rectangle_area(length, width):
    return length * width

modifications=
Change the function to calculate the area of a circle instead, using the formula `pi * radius^2`. The function should take a single argument for the radius.
||CODE_BLOCK||
{% endcode %}

### /test

The `/test` command is used when you want me to create test cases for a given program. Input `/test code=ProgramCode description=ProgramDescription`. Please replace `ProgramCode` with the program you want to test, and `ProgramDescription` with a description of what the program does.

#### Example

Let's say you have a Python function that calculates the factorial of a number and you want to create test cases for it

{% code overflow="wrap" %}
||CODE_BLOCK||
/test code=
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

description=
This function calculates the factorial of a given number. The factorial of a number n is the product of all positive integers less than or equal to n.
||CODE_BLOCK||
{% endcode %}


==> genstudio-workspace/tools/pair-programmer/README.md <==
# Pair Programmer

Pair Programmer is an advanced AI programming tool that acts as your coding companion, providing immediate assistance with code-related queries, debugging challenges, and optimization tips. Whether you're grappling with complex algorithms or seeking best-practice advice, Pair Programmer is designed to improve your coding and streamline your development process, making software creation more efficient and intuitive.

<figure><img src="../../../.gitbook/assets/pair-programmer.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can Pair Programmer Help With?

Pair Programmer can help with tons of questions across the software development spectrum, from foundational concepts to advanced topics. While the following list of topics and examples is extensive, it doesn’t come close to covering every use case. We invite you to plug in any of these examples and explore the depth of Pair Programmer.

**Syntax and Semantics**

* What's the correct syntax for a for-loop in Java?
* How does Python's list comprehension work?

**Debugging and Troubleshooting**

* Why am I getting a "Segmentation fault" error in my C code?
* What causes a "NullPointerException" in Java?

**Best Practices**

* How should I structure a RESTful API?
* What are the recommended naming conventions for SQL tables?

**Libraries and Frameworks**

* How do I start a new project with React?
* Can you explain how Flask routing works?

**Algorithms and Data Structures**

* How does a quicksort algorithm work?
* Can you help me implement a binary tree?

**Performance Optimization**

* Why is my SQL query running slowly?
* How can I optimize my Python script for better memory management?

**Software Architecture**

* What's the difference between MVC and MVVM patterns?
* How can microservices benefit my application?

**Tooling and Environment Setups**

* How do I set up a virtual environment in Python?
* What's the difference between npm and yarn?

**Version Control**

* How do I resolve a git merge conflict?
* What's the best way to structure branch workflows in git?

**Deployment and Operations**

* How can I deploy my web application using Docker?
* What's the role of Kubernetes in modern software architecture?

**Security**

* How can I prevent SQL injection in my web application?
* What are best practices for securely storing user passwords?

**Languages and Paradigms**

* Can you explain functional programming concepts in JavaScript?
* What's the difference between Procedural and Object-Oriented programming?

**Databases and Storage**

* How do I normalize a relational database?
* What are the benefits of using a NoSQL database like MongoDB over traditional relational databases?

**Hardware and System-Level Questions**

* How does garbage collection work in programming languages?
* What's the difference between parallel and concurrent processing?

**Trends and Updates**

* What are the new features in the latest version of Python?
* How is WebAssembly changing web development?


==> genstudio-workspace/tools/pair-programmer/example-python-script-assistance.md <==
---
description: Follow along with a step-by-step demonstration of Pair Programmer
---

# Example – Python Script Assistance

In this example, we are asking Pair Programmer to help with a Python script that is not working as intended in relation to large CSV files.

<figure><img src="../../../.gitbook/assets/pair-programmer-3.png" alt=""><figcaption></figcaption></figure>

The tool takes a second to analyze your prompt. Every response is customized, so no prompts will have the exact same output. For this prompt, Pair Programmer started with Requirements that reiterated what we asked.

<figure><img src="../../../.gitbook/assets/pair-programmer-4.png" alt=""><figcaption></figcaption></figure>

Sometimes you may ask for a solution that does not exist. Pair Programmer may let you know if it can provide an adequate answer and how the tool is going to answer your prompt.

<figure><img src="../../../.gitbook/assets/pair-programmer-5.png" alt=""><figcaption></figcaption></figure>

For our Python script prompt, Pair Programmer is explaining different ways we can modify our script, complete with code examples.

<figure><img src="../../../.gitbook/assets/pair-programmer-6.png" alt=""><figcaption></figcaption></figure>

Pair Programmer may also provide us some follow-up questions so that AI can understand the specific needs of your situation. You can then ask those questions to request further assistance.

<figure><img src="../../../.gitbook/assets/pair-programmer-7.png" alt=""><figcaption></figcaption></figure>

Pair Programmer then provides updated strategies that better suit your needs. There may be more follow-up questions. As you answer more questions and provide further information, your output will be more specific. Pair Programmer automatically understands the context for each additional query.

<figure><img src="../../../.gitbook/assets/pair-programmer-8 (1).png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/image-generator/how-to-use.md <==
# How to Use

To get started with Image Generator, you need to provide a description of the image you wish to create. Here are some general guidelines for terms:

* **Objects** – Use names of objects such as apple, car, house, etc.
* **Colors** – Specify colors such as red, blue, green, etc.
* **Sizes** – Specify sizes like large, small, tall, etc.
* **Shapes** – Specify shapes like square, round, rectangular, etc.
* **Materials** – Specify types of materials like wooden, metal, glass, etc.
* **Animals/People** – Specify different types of animals or people like cat, dog, woman, man, etc.
* **Scenery** – Specify different types of scenery like sunset, beach, mountain, etc.
* **Moods** – Specify different moods like happy, sad, angry, etc.
* **Realism** – Specify the degree of accuracy or abstractness like photorealistic, cartoonish, impressionist, etc.

{% hint style="info" %}
You can only generate one image per request based on the provided description.
{% endhint %}

Remember, the more specific your description, the more accurate the generated image will be. For example, instead of just saying "cat", you might say "a large orange cat sitting on a blue sofa". This will give the model a more specific image to generate.

![](<../../../.gitbook/assets/image (43).png>)![](<../../../.gitbook/assets/image (44).png>)


==> genstudio-workspace/tools/image-generator/README.md <==
# Image Generator

Image Generator uses OpenAI's DALL-E model to produce visual content based on textual prompts. Unlike traditional LLMs that generate textual outputs, this specialized model can understand descriptive prompts and translate them into corresponding images.

<figure><img src="../../../.gitbook/assets/image-generator-1.png" alt=""><figcaption></figcaption></figure>

Its capabilities encompass a wide range of applications, including:

* **Concept Visualization** – Turn abstract ideas or textual descriptions into visual representations.
* **Design Mockups** – Provide a brief, and the model can generate initial design concepts or mockups.
* **Artistic Creations** – Describe a scene, mood, or style, and the LLM can craft a piece of art aligned with that vision.
* **Educational Diagrams** – Generate diagrams or illustrations for educational content based on specific topics or concepts.
* **Entertainment** – Create character designs, landscapes, or any visual content based on fictional narratives or stories.

Image Generator opens up a realm of possibilities for professionals, educators, artists, and enthusiasts, making the process of visual creation more accessible to all. By simply providing a detailed prompt, you can obtain custom visuals without the need for advanced design skills or software.


==> genstudio-workspace/tools/image-generator/example-winter-wonderland.md <==
---
description: Follow along with a step-by-step demonstration of Image Generator
---

# Example – Winter Wonderland

In this example, we are being as specific as possible to create an artistic image:

<figure><img src="../../../.gitbook/assets/image-generator-2.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
The image link will expire in 1 hour. Save the picture before it expires if you would like to use it or review it later.
{% endhint %}

Image Generator created the following image:

<figure><img src="../../../.gitbook/assets/image (46).png" alt=""><figcaption></figcaption></figure>

If you don't like the exact composition of the image, click **Regenerate** to create a new image with the same prompt:

<figure><img src="../../../.gitbook/assets/image (47).png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/strategy-consultant/how-to-use.md <==
# How to Use

To get started with Strategy Consultant, you just need to provide your questions or prompts!

<figure><img src="../../../.gitbook/assets/strategy-consultant-2.png" alt=""><figcaption></figcaption></figure>

The AI will follow a structured flow of operations to generate insightful responses:

1. **Thoughts Decomposition** – Break down the information given or the problem into smaller sub-questions or 'thoughts'.
2. **Thoughts Generation** – Generate potential answers or 'thoughts' for each of these sub-questions.
3. **Thoughts Evaluation** – Evaluate the relevance and potential impact of each thought.
4. **Search Algorithm** – Choose the most promising thought to further develop into a detailed response.
5. **I want to know more about** – If there are any knowledge gaps or specific types of information needed to provide a well-informed response, I will request additional information from you.

If the output seems to be missing some nuance or perspectives, you can submit additional information and Strategy Consultant with refine the strategies it presents.


==> genstudio-workspace/tools/strategy-consultant/README.md <==
# Strategy Consultant

Strategy Consultant serves as your digital advisory partner, delivering insightful recommendations to address your unique challenges and requests. Drawing from a wealth of business training data, this tool guides you through consultations that simulate the thought processes of high-end consultants. This LLM offers a holistic view of opportunities, risks, and actionable strategies to help you make decisions that are informed, strategic, and aligned with your objectives.

<figure><img src="../../../.gitbook/assets/strategy-consultant-1.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can Strategy Consultant Help With?

**Market Analysis and Entry**

* What factors should I consider before entering the Asian market with a new product?
* How do I evaluate the competitive landscape in the e-commerce sector in Europe?

**Business Growth and Expansion**

* What strategies can I employ to scale my startup in its next phase?
* Which acquisition targets might be suitable for my company to expand its reach?

**Branding and Positioning**

* How can I differentiate my brand in an oversaturated market?
* What are the key elements of a successful rebranding campaign?

**Operational Efficiency**

* How can I streamline my company's supply chain operations?
* Are there best practices to improve my inventory turnover rate?

**Financial Strategy**

* How can I optimize my business's capital structure?
* What pricing strategies could boost my product's profitability?

**Digital Transformation**

* What are the steps to successfully digitize my traditional retail business?
* How can I leverage emerging technologies like AI and blockchain for my services?

**Talent Management and Organizational Structure**

* How can I restructure my organization for better agility and innovation?
* What strategies can aid in employee retention during corporate transitions?

**Innovation and Product Development**

* How can I foster a culture of innovation within my company?
* Which markets or segments should I target with my new product line?

**Risk Management**

* How do I assess and mitigate risks when expanding to a new region?
* What strategies can help in managing currency fluctuation risks for my export-heavy business?

**Customer Experience and Loyalty**

* How can I improve customer satisfaction in my service industry?
* What are the key drivers of customer loyalty in the digital age?

**Stakeholder and Investor Relations**

* How can I effectively communicate a major strategic shift to my investors?
* What are best practices for managing stakeholder expectations during mergers?

**Sustainability and Corporate Social Responsibility**

* How can my business pivot towards more sustainable practices without compromising profitability?
* What are the tangible benefits of integrating CSR into my business model?


==> genstudio-workspace/tools/strategy-consultant/example-employee-retention.md <==
---
description: Follow along with a step-by-step demonstration of Strategy Consultant
---

# Example – Employee Retention

In this example, we are asking Strategy Consultant that will help a company retain employees during a corporate transition.

<figure><img src="../../../.gitbook/assets/strategy-consultant-3.png" alt=""><figcaption></figcaption></figure>

Strategy Consultant starts by decomposing the question down into a few sub-questions:

<figure><img src="../../../.gitbook/assets/strategy-consultant-4.png" alt=""><figcaption></figcaption></figure>

The AI then addresses each of those sub-questions:

<figure><img src="../../../.gitbook/assets/strategy-consultant-5.png" alt=""><figcaption></figcaption></figure>

And finally, Strategy Consultant asks for specific types of additional information that would help improve the strategy to match your specific needs:

<figure><img src="../../../.gitbook/assets/strategy-consultant-6.png" alt=""><figcaption></figcaption></figure>

We then added some extra background information and context, so the AI would better understand the situation:

<figure><img src="../../../.gitbook/assets/strategy-consultant-7.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/teach-me-anything/example-intro-to-programming.md <==
---
description: Follow along with a step-by-step demonstration of Teach Me Anything
---

# Example – Intro to Programming

In this example, we are interested in learning about Python Programming at an undergraduate level:

* **Lesson** – Introduction to Python Programming
* **Language** – English
* **Education Level** – Undergraduate
* **Learning Style** – Mixed - Visual (infographics, charts) and Lecture
* **Communication Style** – Informal
* **Tone Style** – Encouraging
* **Reasoning Framework** – Practical (step-by-step, actionable insights)
* **Using Emojis** – Yes

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-1.png" alt=""><figcaption></figcaption></figure>

Teach Me Anything generates a curriculum:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-2.png" alt=""><figcaption></figcaption></figure>

Once the lesson is started, the AI will work through each section of the curriculum:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-3.png" alt=""><figcaption></figcaption></figure>

At any time you can ask for more help or test your understanding, and Teach Me Anything will cover the topic or question with more depth:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-4.png" alt=""><figcaption></figcaption></figure>

You can then test your understanding:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-5.png" alt=""><figcaption></figcaption></figure>

When you are happy with your progress, jump back into the next curriculum topic any time:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-6.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/teach-me-anything/how-to-use.md <==
# How to Use

Teach Me Anything offers 8 different categories to help you create a personalized learning experience. Here's an overview of each field, along with some example selections you might consider:

{% hint style="info" %}
These examples are not exhaustive, you can enter anything that you think is appropriate, and the AI will adjust.
{% endhint %}

* **Lesson** – the specific subject or topic you want to learn about.
  * The History of Renaissance Art
  * Macroeconomics
* **Language** – the language in which you want the information to be presented.
  * Spanish
  * English
  * French
* **Education Level** – the complexity and depth of the lesson designed to match a specific educational background or understanding.
  * Elementary
  * High School
  * Undergraduate
  * Postgraduate
* **Learning Style** – the preferred method or approach through which you best understand and retain information.
  * Visual (infographics, charts)
  * Auditory (spoken explanations, podcasts)
  * Kinesthetic (interactive exercises, simulations)
  * Reading/Writing (textual content, worksheets)
* **Communication Style** – The manner in which the information is articulated or conveyed.
  * Formal (academic, business-like)
  * Informal (casual, conversational)
  * Succinct (brief, to-the-point)
  * Detailed (comprehensive, in-depth)
* **Tone Style** – The emotional quality or mood of the lesson.
  * Professional (neutral, objective)
  * Friendly (warm, approachable)
  * Humorous (light-hearted, funny)
  * Enthusiastic (passionate, animated)
* **Reasoning Framework** – The logical structure or method used to present and make sense of the information.
  * Analytical (break down of components)
  * Critical (evaluating pros and cons)
  * Conceptual (big picture, overarching themes)
  * Practical (step-by-step, actionable insights)
* **Using Emojis** – Incorporating emojis to add an expressive or illustrative element to the content.
  * True or False

{% hint style="info" %}
You don't have to fill out every category, but make sure to remove the default text if you don't want it to impact the results of your lesson.
{% endhint %}

<figure><img src="../../../.gitbook/assets/teach-me-anything-2.png" alt=""><figcaption></figcaption></figure>

After you've personalized these categories and pressed the **Generate button**, Teach Me Anything will reiterate your preferences and tell you how to create a lesson plan.

<figure><img src="../../../.gitbook/assets/teach-me-anything-3.png" alt=""><figcaption></figcaption></figure>

### /plan

The `/plan` command asks the AI to create a lesson plan that matches your preferences. The output will vary widely depending on your initial inputs.

<figure><img src="../../../.gitbook/assets/teach-me-anything-4.png" alt=""><figcaption></figcaption></figure>

### /change

The `/change` command allows you to modify your preferences. For example, you could change Learning Style by entering `/change learning style=Active`.

### /skip

The `/skip` command allows you to skip a certain part of the lesson For example, if Teach Me Anything is suggesting pre-requisite content that you already feel comfortable with, type `/skip` to move forward.

### /start

The `/start` command is used to officially start the lesson once you are happy with your preferences and the lesson plan.

<figure><img src="../../../.gitbook/assets/teach-me-anything-5.png" alt=""><figcaption></figcaption></figure>

### /continue

The `/continue` command is used to move the lesson forward to the next topic.

<figure><img src="../../../.gitbook/assets/teach-me-anything-6.png" alt=""><figcaption></figcaption></figure>

### /test

The `/test` command is used to test your understanding of a lesson section. Teach Me Anything will create questions or open-ended dialogue to test if you fully comprehend the curriculum or need more review/practice.

<figure><img src="../../../.gitbook/assets/teach-me-anything-7.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/teach-me-anything/README.md <==
# Teach Me Anything

Teach Me Anything is an LLM tutor offering personalized learning experiences on any topic you can imagine. Tailor each lesson to your preferences, selecting the teaching style, linguistic nuances, and depth of content. Then dive into /test mode, and the AI will asses your grasp of the subject.

<figure><img src="../../../.gitbook/assets/teach-me-anything-1.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can Teach Me Anything Help With?

Teach Me Anything has a wide scope, so there’s no end to what kinds of lessons you can request. Here is a list of general topics to give you an idea of how you can utilize this tool to learn:

* Sciences and Mathematics
* History
* Literature
* Technology and Computers
* Philosophy and Social Sciences
* Arts and Music
* Languages and Linguistics
* Geography and Earth Sciences
* Religion and Spirituality
* Sports and Recreation
* Health and Wellness
* Space and Astronomy
* Law and Governance
* Travel and Culture
* Business and Finance


==> genstudio-workspace/tools/sql-assistant/how-to-use.md <==
# How to Use

To get started with SQL Assistant, you will need to provide a Data Definition Language (DDL) segment and a task description.

* **DDL** **segment** – a subset of SQL commands, objects, attributes, and constraints that is focused on defining or modifying the structure of database objects.
* **Task description** – instructions related to the DDL that tells SQL Assistant what you need help with.

<figure><img src="../../../.gitbook/assets/sql-assistant-2.png" alt=""><figcaption></figcaption></figure>

The default placeholder prompt that loads whenever you create a new chat with SQL Assistant, models how to create your own prompts:

* The DDL statement creates a table called ‘transactions’ with 5 columns (transaction\_id, customer\_id, transaction\_date, amount, and description).
* The task description asks SQL Assistant to provide a query that will print all the transactions higher than 1000 dollars.


==> genstudio-workspace/tools/sql-assistant/README.md <==
# SQL Assistant

SQL Assistant is an innovative SQL database LLM that serves as your virtual database consultant, aiding in query optimization, schema design, and data management tasks. Whether you're troubleshooting performance bottlenecks or seeking advice on relational design principles, SQL Assistant empowers you to harness the full potential of your data through efficient database operations.

<figure><img src="../../../.gitbook/assets/sql-assistant-1.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can SQL Assistant Help With?

SQL Assistant can help with a range of SQL-related questions including, but no limited to:

* **Writing SQL queries** – Assist in writing various SQL queries like SELECT, INSERT, UPDATE, DELETE, ALTER, CREATE, DROP, etc.
* **Explaining SQL concepts** – Explain various SQL concepts, such as joins, normalization, indexing, transactions, stored procedures, etc.
* **Troubleshooting SQL queries** – Help debug and provide solutions or workarounds for queries that aren’t working as expected.
* **Optimizing SQL queries** – Suggest ways to optimize your SQL queries for better performance.
* **Data modeling** – Assist in designing database schemas and offer advice on best practices.
* **SQL for Data Analysis** – Write complex queries to perform data analysis tasks.
* **Database Management** – Help with concepts related to managing databases like backups, replication, partitioning, etc.


==> genstudio-workspace/tools/sql-assistant/example-query-debugging.md <==
---
description: Follow along with a step-by-step demonstration of SQL Assistant
---

# Example – Query Debugging

In this example, we are asking SQL Assistant to debug a query that is not working as intended.

<figure><img src="../../../.gitbook/assets/sql-assistant-3.png" alt="" width="563"><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/sql-assistant-4.png" alt="" width="563"><figcaption></figcaption></figure>

SQL Assistant identifies what is wrong and provides the correct query needed to fetch the intended customer emails.

<figure><img src="../../../.gitbook/assets/sql-assistant-5.png" alt="" width="563"><figcaption></figcaption></figure>


==> genstudio-workspace/tools/legal-agreement-review/how-to-use.md <==
# How to Use

To get started with Legal Agreement Review provide an **Introduction** prompt, which is just any background information, questions, or specific concerns you want to address and the **Clause**, or section of the legal text you want to review.

<figure><img src="../../../.gitbook/assets/legal-agreement-review-2.png" alt=""><figcaption></figcaption></figure>

After the initial review, the AI may ask for more information or context to improve it's recommendations for a clause. As always, the more specifics you can provide, the better.


==> genstudio-workspace/tools/legal-agreement-review/README.md <==
# Legal Agreement Review

Legal Agreement Review is your on-demand legal assistant, meticulously scanning contracts and agreements for potential pitfalls, inconsistencies, or non-standard clauses. By leveraging its vast knowledge base, Legal Agreement Review can help ensure that your legal documents are robust and compliant, offering clarity on intricate terms and providing recommendations that align with context.

<figure><img src="../../../.gitbook/assets/legal-agreement-review-1.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can Legal Agreement Review Help With?

**Clause Interpretation**

* What does this indemnification clause imply?
* How does this confidentiality clause impact my obligations?

**Comparison and Consistency**

* Is this non-compete clause standard for contracts in my industry?
* How does this termination provision compare to typical agreements?

**Legal Term Definitions**

* What is "force majeure"?
* Can you explain "fiduciary duty"?

**Risk Analysis**

* What potential liabilities does this contract expose me to?
* Are there any clauses that might be unfavorable in a dispute?

**Jurisdictional Queries**

* Is this choice of law clause advantageous for my business location?
* What does this arbitration provision mean for dispute resolution?

**Operational Implications**

* How does this service level agreement impact my business operations?
* What are the implications of this data protection clause on my company's IT policies?

**Compliance and Regulation**

* Does this contract comply with GDPR provisions?
* Are there any clauses that could be in conflict with local labor laws?

**Amendments and Changes**

* How can I modify this clause to be more favorable to my position?
* What's the process outlined in the contract for making amendments?

**Financial Queries**

* What does this payment term imply for cash flow?
* Are there any hidden fees or charges in this agreement?

**Terminology and Wording**

* Can this clause be simplified for better clarity?
* Is the wording of this provision legally binding or just a guideline?


==> genstudio-workspace/tools/legal-agreement-review/example-nda-clause.md <==
---
description: Follow along with a step-by-step demonstration of Legal Agreement Review
---

# Example – NDA Clause

In this example we are asking Legal Agreement Review to review this section of an NDA to see if there are any loopholes.

<figure><img src="../../../.gitbook/assets/legal-agreement-review-3.png" alt=""><figcaption></figcaption></figure>

The AI examines the clause and then outputs a thorough answer that looks at the clause from a few different angles.

<figure><img src="../../../.gitbook/assets/legal-agreement-review-4.png" alt=""><figcaption></figcaption></figure>


==> ai-documentations/llm-evaluation-report.md <==
# LLM Evaluation Report

| Model                      | Date       |   Total Response Time (s) |   Tests Passed |   Mean CodeBLEU (0-1) |   Mean Usefulness Score (0-4) |   Mean Functional Correctness Score (0-4) |
|:---------------------------|:-----------|--------------------------:|---------------:|----------------------:|------------------------------:|------------------------------------------:|
| o1-preview                 | 2024-11-28 |                  2280.2   |            133 |              0.313474 |                      3.53659  |                                  3.5      |
| o1-mini                    | 2024-11-28 |                   826.193 |            133 |              0.338396 |                      3.70732  |                                  3.73171  |
| gpt-4o                     | 2024-11-28 |                   283.045 |            125 |              0.329751 |                      3.69512  |                                  3.7378   |
| gpt-4o-mini                | 2024-11-28 |                   203.217 |            114 |              0.336173 |                      3.66463  |                                  3.67683  |
| claude-3-5-sonnet-20240620 | 2024-11-28 |                   367.409 |            114 |              0.298337 |                      3.62805  |                                  3.60366  |
| claude-3-5-sonnet-20241022 | 2024-11-28 |                   356.792 |            114 |              0.321336 |                      3.70122  |                                  3.66463  |
| gemini-1.5-pro             | 2024-11-28 |                   521.637 |            106 |              0.34057  |                      3.52439  |                                  3.45732  |
| gemini-1.5-flash           | 2024-11-28 |                   743.143 |              2 |              0.263247 |                      0.768293 |                                  0.932927 |

**Total Response Time (s):** The total time taken by the model to generate all the outputs.

**Tests passed:** The number of unit tests that the model has passed during evaluation, out of a total of 164 tests.

**Mean [CodeBLEU](https://arxiv.org/abs/2009.10297):** Average CodeBLEU score, a metric for evaluating code generation quality based on both syntactic and semantic correctness.

**Mean [Usefulness Score](https://arxiv.org/abs/2304.14317):** Average rating of the model's output usefulness as rated by a LLM model.

- **0:** Snippet is not at all helpful, it is irrelevant to the problem.
- **1:** Snippet is slightly helpful, it contains information relevant to the problem, but it is easier to write the solution from scratch.
- **2:** Snippet is somewhat helpful, it requires significant changes (compared to the size of the snippet), but is still useful.
- **3:** Snippet is helpful, but needs to be slightly changed to solve the problem.
- **4:** Snippet is very helpful, it solves the problem.

**Mean [Functional Correctness Score](https://arxiv.org/abs/2304.14317):** Average score of the functional correctness of the model's outputs, assessing how well the outputs meet the functional requirements, rated by a LLM model.

- **0 (failing all possible tests):** The code snippet is totally incorrect and meaningless.
- **4 (passing all possible tests):** The code snippet is totally correct and can handle all cases.



==> ai-documentations/README.md <==
# AI Documentations

This directory contains key documents related to LLM:

1. [LLM Evaluation Report](llm-evaluation-report.md)
2. [SkyDeck.ai LLM Ready Documentation](skydeckai-llm-ready-documentation.md)

## LLM Evaluation Report

Presents a comparative analysis of various LLM models, including:

* Performance metrics (response time, tests passed)
* Quality assessments (CodeBLEU, usefulness, functional correctness)
* Detailed explanations of scoring methodologies

## LLM-Ready Documentation

Provides a consolidated reference document designed for LLM consumption, combining various documentation into a single, easily accessible format.

These documents offer insights into LLM performance and provide resources for LLM interactions. They may be updated as new evaluations are conducted or documentation is revised.


==> ai-documentations/skydeckai-llm-ready-documentation.md <==
# SkyDeck.ai LLM Ready Documentation

*Generated at 2024-11-21 19:07:29 PST. Available as raw content at [skydeckai-llm-ready-documentation.md](https://raw.githubusercontent.com/skydeckai/skydeckai-webflow/refs/heads/docs/skydeckai-llm-ready-documentation.md).*

This document provides a comprehensive, consolidated reference of SkyDeck.ai's documentation, optimized for large language model (LLM) consumption. It combines various documentation sources into a single, easily accessible format, facilitating efficient information retrieval and processing by AI systems.

||CODE_BLOCK||
==> SUMMARY.md <==
# Table of contents

* [SkyDeck.ai](README.md)
* [GenStudio Workspace](genstudio-workspace/README.md)
  * [Conversations](genstudio-workspace/conversations.md)
  * [Sharing and Collaboration](genstudio-workspace/sharing-and-collaboration.md)
  * [Slack Synchronization](genstudio-workspace/slack-synchronization.md)
  * [Public Snapshots](genstudio-workspace/public-snapshots.md)
  * [Web Browsing](genstudio-workspace/web-browsing.md)
  * [Document Upload](genstudio-workspace/document-upload.md)
  * [Tools](genstudio-workspace/tools/README.md)
    * [Pair Programmer](genstudio-workspace/tools/pair-programmer/README.md)
      * [How to Use](genstudio-workspace/tools/pair-programmer/how-to-use.md)
      * [Example – Python Script Assistance](genstudio-workspace/tools/pair-programmer/example-python-script-assistance.md)
    * [SQL Assistant](genstudio-workspace/tools/sql-assistant/README.md)
      * [How to Use](genstudio-workspace/tools/sql-assistant/how-to-use.md)
      * [Example – Query Debugging](genstudio-workspace/tools/sql-assistant/example-query-debugging.md)
    * [Legal Agreement Review](genstudio-workspace/tools/legal-agreement-review/README.md)
      * [How to Use](genstudio-workspace/tools/legal-agreement-review/how-to-use.md)
      * [Example – NDA Clause](genstudio-workspace/tools/legal-agreement-review/example-nda-clause.md)
    * [Teach Me Anything](genstudio-workspace/tools/teach-me-anything/README.md)
      * [How to Use](genstudio-workspace/tools/teach-me-anything/how-to-use.md)
      * [Example – Intro to Programming](genstudio-workspace/tools/teach-me-anything/example-intro-to-programming.md)
    * [Strategy Consultant](genstudio-workspace/tools/strategy-consultant/README.md)
      * [How to Use](genstudio-workspace/tools/strategy-consultant/how-to-use.md)
      * [Example – Employee Retention](genstudio-workspace/tools/strategy-consultant/example-employee-retention.md)
    * [Image Generator](genstudio-workspace/tools/image-generator/README.md)
      * [How to Use](genstudio-workspace/tools/image-generator/how-to-use.md)
      * [Example – Winter Wonderland](genstudio-workspace/tools/image-generator/example-winter-wonderland.md)
  * [Data Security](genstudio-workspace/data-security/README.md)
    * [Data Loss Prevention](genstudio-workspace/data-security/data-loss-prevention.md)
* [Use Cases](use-cases/README.md)
  * [Creating a Privacy Policy](use-cases/creating-a-privacy-policy.md)
* [Developers](developers/README.md)
  * [Develop Your Own Tools](developers/develop-your-own-tools/README.md)
    * [JSON format for Tools](developers/develop-your-own-tools/json-format-for-tools.md)
    * [JSON Format for LLM Tools](developers/develop-your-own-tools/json-format-for-llm-tools.md)
    * [Example: Text-based UI Generator](developers/develop-your-own-tools/example-text-based-ui-generator.md)
    * [JSON Format for Smart Tools](developers/develop-your-own-tools/json-format-for-smart-tools.md)
* [Control Center](control-center/README.md)
  * [Admin & Owner Tools](control-center/admin-and-owner-tools.md)
  * [Setup Guide](control-center/setup-guide/README.md)
    * [Set Up Account](control-center/setup-guide/set-up-account.md)
    * [Set Up Integrations](control-center/setup-guide/set-up-integrations/README.md)
      * [Integration Assistance](control-center/setup-guide/set-up-integrations/integration-assistance.md)
    * [Set Up Security](control-center/setup-guide/security/README.md)
      * [Authentication (SSO)](control-center/setup-guide/security/authentication-setup.md)
    * [Organize Teams](control-center/setup-guide/organize-teams/README.md)
      * [Add New Group](control-center/setup-guide/organize-teams/add-new-group.md)
      * [Remove Groups](control-center/setup-guide/organize-teams/remove-groups.md)
    * [Curate Tools](control-center/setup-guide/curate-tools/README.md)
      * [System Tools](control-center/setup-guide/curate-tools/system-tools.md)
      * [Assign Tags](control-center/setup-guide/curate-tools/assign-tags.md)
    * [Manage Members](control-center/setup-guide/manage-members/README.md)
      * [Add Members](control-center/setup-guide/manage-members/add-members.md)
      * [Import File](control-center/setup-guide/manage-members/import-file.md)
      * [Invite Members](control-center/setup-guide/manage-members/invite-members.md)
      * [Edit Members](control-center/setup-guide/manage-members/edit-members.md)
* [Integrations](integrations/README.md)
  * [LLMs and Databases](integrations/llms-and-databases/README.md)
    * [Anthropic Integration](integrations/llms-and-databases/anthropic-integration.md)
    * [Database Integration](integrations/llms-and-databases/database-integration.md)
    * [Groq Integration](integrations/llms-and-databases/groq-integration.md)
    * [HuggingFace Integration](integrations/llms-and-databases/huggingface-integration.md)
    * [Mistral Integration](integrations/llms-and-databases/mistral-integration.md)
    * [OpenAI Integration](integrations/llms-and-databases/openai-integration.md)
    * [Perplexity Integration](integrations/llms-and-databases/perplexity-integration.md)
    * [Together AI Integration](integrations/llms-and-databases/together-ai-integration.md)
    * [Vertex AI Integration](integrations/llms-and-databases/vertex-ai-integration.md)
  * [App Integrations](integrations/app-integrations/README.md)
    * [Rememberizer Integration](integrations/app-integrations/rememberizer-integration.md)
    * [Slack Integration](integrations/app-integrations/slack-integration.md)
* [Notices](notices/README.md)
  * [Terms of Use](notices/terms-of-use.md)
  * [Privacy Policy](notices/privacy-policy.md)
  * [Cookie Notice](notices/cookie-notice.md)
* [Releases](releases/README.md)
  * [Nov 22nd, 2024](releases/nov-22nd-2024.md)
  * [Nov 15th, 2024](releases/nov-15th-2024.md)
  * [Nov 8th, 2024](releases/nov-8th-2024.md)
  * [Nov 1st, 2024](releases/nov-1st-2024.md)
  * [Oct 25th, 2024](releases/oct-25th-2024.md)
  * [Oct 18th, 2024](releases/oct-18th-2024.md)
  * [Oct 11th, 2024](releases/oct-11th-2024.md)
  * [Oct 4th, 2024](releases/oct-4th-2024.md)
  * [Sep 27th, 2024](releases/sep-27th-2024.md)
  * [Sep 20th, 2024](releases/sep-20th-2024.md)
  * [Sep 13th, 2024](releases/sep-13th-2024.md)
  * [Sep 6th, 2024](releases/sep-6th-2024.md)
  * [Aug 23rd, 2024](releases/aug-23rd-2024.md)
  * [Aug 16th, 2024](releases/aug-16th-2024.md)
  * [Aug 9th, 2024](releases/aug-9th-2024.md)
  * [Aug 2nd, 2024](releases/aug-2nd-2024.md)
  * [Jul 26th, 2024](releases/jul-26th-2024.md)
  * [Jul 12th, 2024](releases/jul-12th-2024.md)
  * [Jul 5th, 2024](releases/jul-5th-2024.md)
  * [Jun 28th, 2024](releases/jun-28th-2024.md)
  * [Jun 21st, 2024](releases/jun-21st-2024.md)
  * [Nov 12th 2023](releases/nov-12th-2023.md)
  * [Nov 6th 2023](releases/nov-6th-2023.md)
  * [Oct 30th 2023](releases/oct-30th-2023.md)
  * [Oct 23th 2023](releases/oct-23th-2023.md)
  * [Oct 16th 2023](releases/oct-16th-2023.md)
  * [Sep 18th 2023](releases/sep-18th-2023.md)
  * [Sep 8th 2023](releases/sep-8th-2023.md)
* [Security](security/README.md)
  * [SkyDeck.ai Security Practices](security/skydeck.ai-security-practices.md)
  * [Bug Bounty Program](security/bug-bounty-program.md)
* [AI Documentations](ai-documentations/README.md)
  * [LLM Evaluation Report](ai-documentations/llm-evaluation-report.md)
  * [SkyDeck.ai LLM Ready Documentation](ai-documentations/skydeckai-llm-ready-documentation.md)


==> README.md <==
---
description: How to get the most out of your generative AI workspace.
---

# SkyDeck.ai

We've put together some helpful guides for you to get set up with our product quickly and easily. GenStudio is the SkyDeck.ai workspace where everyone can interact in a conversational "chat" fashion with the tools and models available to them in their organization. You might find the experience similar to one you have had using OpenAI's ChatGPT.

© 2023 SkyDeck AI Inc.

###


==> integrations/README.md <==
# Integrations



==> integrations/llms-and-databases/huggingface-integration.md <==
---
description: Using SkyDeck.ai as the front end for your HuggingFace models.
---

# HuggingFace Integration

After deploying your inference endpoint on HuggingFace, you should see the following user interface:

<figure><img src="../../.gitbook/assets/Screenshot 2023-09-25 at 10.08.46.png" alt=""><figcaption></figcaption></figure>

On this page, you will need the following information:

* Endpoint URL
* Model Repository
* API token. You can view this by checking the "Add API token" box in the Call Examples code block.

In addition to these, you will also need the context window of your model. This can be found on the model's information page.

After collecting this information, format it into JSON as shown in the example below:

||CODE_BLOCK||json
{
    "api_key":"your_api_key",
    "endpoint": "your_api_endpoint",
    "model_name": "meta-llama/Llama-2-7b-chat-hf",
    "context_window": 4096
}
||CODE_BLOCK||

Next, paste this into the Credential field of your integration.

<figure><img src="../../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

Once the credential is successfully validated, you should see your HuggingFace model listed in GenStudio's model list:

<figure><img src="../../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

### Scaling HuggingFace Endpoints to Zero

Scaling to 0 is a dynamic feature offered by Inference Endpoints, designed to optimize resource utilization and costs. By intelligently monitoring request patterns and reducing the number of replicas to none during idle times, it ensures that you only use resources when necessary.

However, this does introduce a cold start period when traffic resumes, and there are a few considerations to be mindful of. For an in-depth look at how this feature functions, its benefits, and potential challenges, please refer to [HuggingFace's guide on Autoscaling](https://huggingface.co/docs/inference-endpoints/autoscaling).

### Supported models

At the moment, we only support endpoints for models with a `text-generation` tag that are deployed as `text-generation-inference` containers. We are working to expand our list of supported models.

<figure><img src="../../.gitbook/assets/image (48).png" alt=""><figcaption><p>LLaMA 2 is a model with Text Generation tag</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (49).png" alt=""><figcaption><p>Make sure you select Text Generation Inference as the container type during deployment</p></figcaption></figure>


==> integrations/llms-and-databases/perplexity-integration.md <==
# Perplexity Integration

### Overview

Perplexity is an advanced AI language model that leverages large language models to provide comprehensive and factual responses, making it a powerful tool for various applications, including content generation, language translation, summarization, and more.

### Generating a Perplexity API Key

To integrate Perplexity with the SkyDeck AI Platform, you need to generate an API key:

1. **Create an Account**: Register for a free account on the [Perplexity website](https://www.perplexity.ai/).
2. **Access API Keys**:
   * Log in to your Perplexity account.
   * Navigate to the settings.
   * Click on the API tab.
3. **Generate a New Key**:
   * Click on the "+ Generate" button to create a new API key.

### Adding the API Key to SkyDeck AI

To integrate Perplexity with SkyDeck AI, follow these steps:

1. **Log in to SkyDeck AI**: Access your SkyDeck AI Admin account.
2. **Navigate to Integrations**: Go to the integrations page.
3. **Add Perplexity Integration**:
   * Click the "+Add Integration" button.
   * Select "Perplexity" from the list of available integrations.
   * Enter your Perplexity API Key.
   * Configure any additional settings, such as selecting the desired Perplexity model.
4. **Save and Confirm**: After entering the API key and configuring settings, click "Save" to complete the integration.

### Supported Models

Perplexity offers several models, each optimized for different use cases and performance requirements. The latest models (as of September 2024) that SkyDeck supports:

#### Online Models

* **`llama-3.1-sonar-small-128k-online`**: Suitable for general online queries with moderate complexity.
* **`llama-3.1-sonar-large-128k-online`** and **`llama-3.1-sonar-huge-128k-online`** : Designed for more complex online queries requiring deeper contextual understanding.

#### Chat Models

* **`llama-3.1-sonar-small-128k-chat`**: Ideal for chat-based interactions with moderate complexity.
* **`llama-3.1-sonar-large-128k-chat`**: Optimized for more complex chat-based interactions.

### Verification of Successful Integration

After integrating Perplexity with the SkyDeck AI Platform, you should see Perplexity models available for selection in your SkyDeck AI GenStudio. The presence of these models indicates a successful integration.

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

### Conclusion

Integrating Perplexity with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models to deliver accurate and reliable answers. Ensure you stay updated with the latest models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Perplexity Documentation](https://docs.perplexity.ai/) or contact their support team.


==> integrations/llms-and-databases/openai-integration.md <==
---
description: OpenAI (ChatGPT) integration with the SkyDeck AI Platform
---

# OpenAI Integration

## **OpenAI Integration with the SkyDeck AI Platform**

\
ChatGPT is an AI-powered chatbot developed by OpenAI. It is based on the GPT-4 language model and can generate human-like text, translate languages, and write different kinds of creative content. ChatGPT is a powerful tool for a variety of applications. OpenAI is a non-profit research company that develops and deploys AI in a safe and responsible way. Integrating with SkyDeck AI will give you access to all current models of ChatGPT.

### **Generating an OpenAPI API Key**

\
To use the OpenAI API, you need to generate an API key by following these 3 simple steps:

1. Create a free account on the OpenAI website by signing up here: [https://beta.openai.com/signup. ↗](https://beta.openai.com/signup) You can use your Google or Microsoft account to sign up, or create an account using an email/password combination.
2. Once you've signed up, visit your OpenAI key page here: [https://beta.openai.com/account/api-keys, ↗](https://beta.openai.com/account/api-keys) or click the menu item "View API keys."
3. Click the "Create new secret key" button to generate a new API key. This key gives you access to both GPT-4 and ChatGPT models, so you don't need separate API keys.

All done! Once you have your API key, you can use ChatGPT's LLM in the SkyDeck AI Platform.

### **Adding the API Key to the SkyDeck AI Control Center**

API Keys are added to the Control Center Integrations Screen

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you are signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or click on the “Integrations” in the menu
3. Click on “+Add Integrations” button and enter your API Key as instructed.

That’s it! You can now use the powerful SkyDeck AI tools and directly access the GPT-4 and ChatGPT models.

NOTE: You will be charged based on your monthly usage of the ChatGPT API. The cost structure is based on the number of tokens used, with 750 words (approximately 1000 tokens) being the minimum chargeable unit. The cost per 1000 tokens varies depending on the model used, with the current ChatGPT default model being GPT-3.5 Turbo. As of July 2023 you can start experimenting with $5 in free credit that can be used during your first 3 months. ChatGPT pricing for general use is very low, but if you plan to use the service regularly, you must add your credit card information and are advised to set up a usage limit on the OpenAI website.

OpenAPI ChatGPT Pricing [https://openai.com/pricing ↗](https://openai.com/pricing)


==> integrations/llms-and-databases/README.md <==
# LLMs and Databases



==> integrations/llms-and-databases/mistral-integration.md <==
# Mistral Integration

## Overview

Mistral is an AI research company that focuses on developing cutting-edge large language models with a strong emphasis on efficiency and scalability. Their mission is to make frontier AI ubiquitous, and to provide tailor-made AI to all the builders. This requires fierce independence, strong commitment to open, portable and customizable solutions, and an extreme focus on shipping the most advanced technology in limited time.

## Generating a Mistral API Key

To use the Mistral API, you need to generate an API key by following these simple steps:

1. Go to **La Plateforme** of Mistral at [https://console.mistral.ai/](https://console.mistral.ai/) and sign in. If you don't have an account, you can sign up there.
2. Once you have signed in, go to **API Keys**. Please note that you need to set up a [Billing Plan](https://console.mistral.ai/billing/) first to generate and use Mistral API keys.
3. Click on the **Create new key** button to generate a new API key. Provide a name and an expiration day for the token. Copy the token for later use as it will not be shown again.

All done! Once you have your API key, you can use Mistral's LLMs in the SkyDeck AI Platform.

{% hint style="info" %}
Note that the API key may take a few minutes to be usable, so you might see an error message if you immediately add it into the Control Center. Wait a few minutes after generating an API key before integrating Mistral with SkyDeck AI.
{% endhint %}

## Adding the API Key to the SkyDeck AI Control Center

API Keys are added to the Control Center Integrations Screen.

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you have signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or select **Integrations** in the sidebar.
3. In the LLM Integration page, click on the **Add Integration** button, choose Mistral as the Integration Service and enter your API Key in the Credentials key.

<figure><img src="../../.gitbook/assets/mistral-integration.png" alt="" width="563"><figcaption></figcaption></figure>

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Mistral's models.

## Conclusion

Integrating Mistral with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models from Mistral to deliver accurate and reliable answers. Ensure you stay updated with the latest Mistral's models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Mistral Documentation](https://docs.mistral.ai/) or contact their support team.


==> integrations/llms-and-databases/together-ai-integration.md <==
---
description: Together AI integration with the SkyDeck AI Platform
---

# Together AI Integration

## **Together AI Integration with the SkyDeck AI Platform**

Together AI hosts a wide range of open source large language models on their platform. Integrating with SkyDeck AI will give you access to all the chat models of Together AI.

### **Generating a Together AI API Key**

\
To use the Together AI API, you need to generate an API key by following these 3 simple steps:

1. Create a free account on the Together AI website by signing up here: [https://api.together.xyz/](https://api.together.xyz/).&#x20;
2. Once you've signed up, visit your API key page here: [https://api.together.xyz/settings/api-keys](https://api.together.xyz/settings/api-keys). You should find your API key.
3. Once you have your API key, you can use Together AI's LLM in the SkyDeck AI Platform.

### **Adding the API Key to the SkyDeck AI Control Center**

API Keys are added to the Control Center Integrations Screen

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you are signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or click on the “Integrations” in the menu
3. Click on “+Add Integrations” button, select Together AI as the integration service, and enter your API Key in the Credential field.

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Together AI models.

NOTE: You will be charged based on your monthly usage of the Together AI API. The cost structure is based on the number of tokens used. For more details on their pricing policy, visit [https://api.together.xyz/playground](https://api.together.xyz/playground).


==> integrations/llms-and-databases/database-integration.md <==
---
description: Integration with Amazon AWS hosted databases.
---

# Database Integration

## **Purpose**

\
By adding one or more integrations to public or private databases you enable advanced apps and other capabilities to securely query your data using the power of AI agents.

### **Support**

SkyDeck AI currently supports Postgresql databases and Redshift datawarehouses hosted on AWS. It is not particularly hard to support other data sources, but we did have to start somewhere. If you have another data source you wish to use, please reach out to support to prioritize an integration that meets your needs.

### **Directions**

**The following are the steps to integrate your database with SkyDeck AI:**

1. Obtain or put together a connection URL.
2. Add the connection URL to the Integrations section in Control Center.
3. Assign that integration to a smart tool or AI agent in the Tools section of Control Center.

### Connection URL

If you are lucky, a database admin hands you a ready-to-use standard URL that points to your database. If not, you will need to put one together to add access SkyDeck access to your database. These directions will make that task rather easy.

\
\
To set up a connection URL to a PostgreSQL or Amazon Redshift database hosted on Amazon AWS, you need several pieces of information about your database: the host, port number, database name, username, and password. Here's a step by step guide:

#### PostgreSQL Database

1. **Host**: This is the address of the server where your database is hosted. It should be something like `your-db-instance-name.region-name.rds.amazonaws.com` for AWS RDS PostgreSQL or `your-cluster-name.region-name.redshift.amazonaws.com` for Amazon Redshift.
2. **Port Number**: This is the port on which your database server is listening. The default port for PostgreSQL is 5432, and for Amazon Redshift, it's 5439.
3. **Database Name**: This is the name of the database you want to connect to.
4. **Username & Password**: These are the credentials you need to authenticate with the database.

The general format of a connection URL is as follows:

||CODE_BLOCK||
protocol://username:password@host:port/database
||CODE_BLOCK||

Here's how you can create a connection URL:

1.  Start with the protocol, which is 'postgresql' for PostgreSQL and 'redshift' for Amazon Redshift:

    ||CODE_BLOCK||
     postgresql://
    ||CODE_BLOCK||
2.  Next, add your username and password, separated by a colon. If your username or password includes special characters, you'll need to URL encode them. For example, if your username is 'user' and your password is 'pass', it becomes:

    ||CODE_BLOCK||
     postgresql://user:pass@
    ||CODE_BLOCK||
3.  Then, add your host and port, separated by a colon:

    ||CODE_BLOCK||
     postgresql://user:pass@your-db-instance-name.region-name.rds.amazonaws.com:5432/
    ||CODE_BLOCK||
4.  Finally, add your database name:

    ||CODE_BLOCK||
     postgresql://user:pass@your-db-instance-name.region-name.rds.amazonaws.com:5432/your-database-name
    ||CODE_BLOCK||

That's it! You've created your connection URL. Be sure to replace 'user', 'pass', 'your-db-instance-name.region-name.rds.amazonaws.com', '5432', and 'your-database-name' with your actual database details.

Remember not to share this URL with anyone, as it contains sensitive information like your username and password.

#### RedShift DWH

The URL for a Redshift database would be very similar, but with a couple of key differences:

1. The protocol would be 'jdbc:redshift' instead of 'postgresql'. This is because JDBC (Java Database Connectivity) is commonly used to connect with Redshift databases.
2. The default port for Redshift is 5439, not 5432.

Here's the general format for a Redshift connection URL:

||CODE_BLOCK||
jdbc:redshift://host:port/database
||CODE_BLOCK||

So, if you were to create a connection URL for Redshift, it would look something like this:

||CODE_BLOCK||
jdbc:redshift://user:pass@your-cluster-name.region-name.redshift.amazonaws.com:5439/your-database-name
||CODE_BLOCK||

Remember to replace 'user', 'pass', 'your-cluster-name.region-name.redshift.amazonaws.com', '5439', and 'your-database-name' with your actual database details.

### Adding Your Integration

Paste your connection URL in the "Credentials" section of Add Integration. You can select PostgreSQL for either a postgresql or Redshift database. You can use any name you want for the Integration, but we suggest you pick something that will help you identify the specific database associated.

<figure><img src="../../.gitbook/assets/Add a DB Integration to Control Center.png" alt=""><figcaption></figcaption></figure>

### Accessing Your Data Through SkyDeckAI

Today users can access your database using the Analyst tools available to them in GenStudio. As an admin you can assign an integration to an analyst tool in Control Center's Tools section. You can then assign tags to that tool to ensure only authorized people have access to that tool and its database access in their SkyDeck AI GenStudio workspace.

<figure><img src="../../.gitbook/assets/Adding a DB Integration to Analyst Bob.png" alt=""><figcaption><p>Add a database integration to a tool that supports it in order to share access with your members of your organization.</p></figcaption></figure>

#### Security Notes

* Create a read-only user (role) on your database to use with your SkyDeck AI integration. SkyDeck does not need write to your system and it is safest if you use credentials that do not have more rights than necessary. However, the user should be able to query the structure of your data system in order to understand it.
* Do not share the access URL as it contains confidential connection information.
* You can limit which users in your organization have access to each database by ensuring that tools that use it, such as a copy of Analyst Bob, are assigned tags that correspond only to uers who you wish to have access.


==> integrations/llms-and-databases/groq-integration.md <==
# Groq Integration

## Overview

Groq is revolutionizing the landscape of artificial intelligence with its fast AI inference capabilities, designed to empower developers and enterprises with instant intelligence. GroqCloud allows seamless integration with openly-available models like Llama 3.1, enabling users to harness the power of AI with minimal latency. With its innovative Language Processing Unit (LPU), Groq delivers unparalleled speed, affordability, and energy efficiency, fundamentally transforming how AI models are deployed in the cloud and on-premises. By making advanced AI technology accessible to all, Groq is driving a new wave of innovation, productivity, and discovery, while maintaining a commitment to open-source principles.

## Generating a Groq API Key

To use the Groq API, you need to generate an API key by following these simple steps:

1. Go to **GroqCloud** at [https://console.groq.com/](https://console.groq.com/) and sign in. If you don't have an account, you can sign up there.
2. Once you have signed in, go to **API Keys**. You can use a Free Plan with low rate limits APIs, or you can upgrade to higher plans for large-scale needs.
3. Click on the **Create API key** button to generate a new API key. Provide a name for the token. Copy the token for later use as it will not be shown again.

All done! Once you have your API key, you can use Groq's LLMs in the SkyDeck AI Platform.

## Adding the API Key to the SkyDeck AI Control Center

API Keys are added to the Control Center Integrations Screen.

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you have signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or select **Integrations** in the sidebar.
3. In the LLM Integration page, click on the **Add Integration** button, choose Groq as the Integration Service and enter your API Key in the Credentials key.

<figure><img src="../../.gitbook/assets/groq-integration.png" alt="" width="563"><figcaption></figcaption></figure>

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Groq's models.

## Conclusion

Integrating Groq with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models from Groq to deliver accurate and reliable answers. Ensure you stay updated with the latest models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Groq Documentation](https://console.groq.com/docs/) or contact their support team.


==> integrations/llms-and-databases/vertex-ai-integration.md <==
# Vertex AI Integration

## Overview

Vertex AI is a fully-managed, unified AI development platform for building and using generative AI. Access and utilize Vertex AI Studio, Agent Builder, and 150+ foundation models. After integrating Skydeck.AI with Vertex AI, you will be able to use the Gemini models from Google in your workspace.

## Generating a service account credential

To enable Vertex AI and generate the necessary credential, you can follow these steps:

1. **Set up your Google Cloud account:** Go to the [Google Cloud Console](https://console.cloud.google.com/) and sign in with your Google account.
2. **Select a project:** At the top of the page, click on the project dropdown and select an existing project. If you don’t have a project, you’ll need to create one by clicking on "New Project" and following the prompts.
3. **Enable Vertex AI API:** Go to the [APIs & Services Dashboard](https://console.cloud.google.com/apis/dashboard) (you can choose it from the Menu in the Google Cloud Console), click on the "**+ ENABLE APIS AND SERVICES**" button, search for "**Vertex AI API**" in the API Library, and then enable the API for your project. Please note that Vertex AI API requires a project with a billing account, so you have to set it up [here](https://console.cloud.google.com/billing). You will be charged based on your usage of Vertex AI, so please refer to [their documentation](https://cloud.google.com/vertex-ai) for the latest updates.
4. **Create a Service Account and get the credential:** Go to the **IAM & Admin** section to create a new service account, assign the appropriate role to use Vertex AI (typically the Vertex AI Administrator role), and then generate a JSON key. You can visit this [link](https://developers.google.com/workspace/guides/create-credentials#service-account) for more details. Save the key securely and see the following section to add it to SkyDeck.AI platform. Here is a sample JSON key:

||CODE_BLOCK||json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "your-private-key",
  "client_email": "the-email-of-the-service-account",
  "client_id": "the-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "your-client_x509_cert_url",
  "universe_domain": "googleapis.com"
}
||CODE_BLOCK||

## Adding the credential to SkyDeck AI

API Keys are added to the Control Center Integrations Screen

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you have signed in, visit the your Integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or select **Integrations** on the sidebar.
3. In the LLM Integration page, click on the **Add Integration** button, choose **VertexAI** as the Integration Service, and enter your entire JSON Key in the Credentials field.

<figure><img src="../../.gitbook/assets/vertex-ai-integration (1).png" alt="" width="563"><figcaption></figcaption></figure>

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Gemini models.

## Conclusion

Integrating Vertex AI with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models from Google to deliver accurate and reliable answers. Ensure you stay updated with the latest Gemini models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs) or contact their support team.


==> integrations/llms-and-databases/anthropic-integration.md <==
# Anthropic Integration

## Overview

Anthropic is an AI research organization focused on building reliable and interpretable artificial intelligence systems that prioritize safety and alignment with human values. The company is dedicated to addressing the ethical and safety challenges posed by increasingly powerful AI systems, working to ensure that their models behave predictably and in accordance with human intentions.

Anthropic's LLMs, notably the "Claude" series, are designed to process and generate human-like text for a wide range of applications, including natural language understanding, reasoning, and dialogue. These models are developed with a focus on safety and usability, incorporating mechanisms to prevent harmful or biased outputs. As Anthropic continues to evolve its LLMs, it remains committed to creating AI systems that are transparent, interpretable, and aligned with ethical standards, making them useful for both commercial and research purposes.

## Generating an Anthropic API Key

To use the Anthropic API, you need to generate an API key by following these simple steps:

1. Go to the Anthropic Console at [https://console.anthropic.com/](https://console.anthropic.com/) and sign in. If you don't have an account, you can sign up there.
2. Once you have signed in, go to **Settings** and select [**API keys**](https://console.anthropic.com/account/keys).
3. Click the **Create Key** button to generate a new API key. Provide a name and a workspace for that key. Copy the token for later use as it will not be shown again.

All done! Once you have your API key, you can use Anthropic's LLMs in the SkyDeck AI Platform.

## Adding the API Key to the SkyDeck AI Control Center

API Keys are added to the Control Center Integrations Screen.

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you have signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or select **Integrations** in the sidebar.
3. In the LLM Integration page, click on the **Add Integration** button, choose Anthropic as the Integration Service and enter your API Key in the Credentials key.

<figure><img src="../../.gitbook/assets/anthropic-integration.png" alt="" width="563"><figcaption></figcaption></figure>

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Claude models.

## Conclusion

Integrating Anthropic with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models from Anthropic to deliver accurate and reliable answers. Ensure you stay updated with the latest Claude models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Anthropic Documentation](https://docs.anthropic.com/) or contact their support team.


==> integrations/app-integrations/README.md <==
# App Integrations



==> integrations/app-integrations/rememberizer-integration.md <==
# Rememberizer Integration

### Introduction

GenStudio offers two types of Rememberizer integrations: one for individual members and another for an entire workspace through the Control Center. This guide provides a comprehensive overview of both integration processes, enhancing search and memory capabilities across your workspace.

<figure><img src="../../.gitbook/assets/email masked.png" alt=""><figcaption></figcaption></figure>

### Steps to Authorize Rememberizer in GenStudio (Individual Members)

#### Step 1: Connect to Rememberizer

1. Go to the Rememberizer authorization page by clicking "Add account" to go to the Rememberizer authorization page.
2. Review the permissions that GenStudio will access, such as Mementos and Memory.

<figure><img src="../../.gitbook/assets/email masked 2.png" alt=""><figcaption></figcaption></figure>

#### Step 2: Configure Mementos

1. Select the "Change" option next to Memento.
2. Choose or create a new memento from the available list.
3. Confirm your selection.

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

#### Step 3: Set Memory Preferences

1. Click on "Change" next to Memory.
2. Select your preferred memory settings (e.g., Read All/Write Own).
3. Confirm the settings

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

#### Step 4: Authorize

1. Once you've configured your settings, click "Authorize" to complete the connection.

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

### Steps to Authorize Rememberizer in Control Center (Workspace-Wide)

#### Step 1: Access Integrations

1. Navigate to the **Integrations** section.
2. Click on the **Apps** tab.
3. Locate "Rememberizer" and click **Add**.

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

#### Step 2: Follow Authorization Steps

* The authorization process will follow the same steps as for individual members.
* Once authorized, Rememberizer will be available for the entire workspace.

### Rememberizer Integration Usage

Once authorized, SkyDeck will:

* Automatically call the Rememberizer API. For more details, please visit the [Rememberizer API Documentation](https://docs.rememberizer.ai/developer/api-documentations).
* Use the response to enhance interactions with the language model (e.g., GPT 4o).

#### Contextual LLM Integration

* The retrieved information is used to improve responses. For example, asking "What is my account?" will provide personalized details using Rememberizer's context.

<figure><img src="../../.gitbook/assets/email masked 3 (1).png" alt=""><figcaption></figcaption></figure>

### Conclusion

By following this guide, you can effectively integrate and utilize Rememberizer within GenStudio, leveraging advanced search capabilities and personalized memory sharing to enhance your application experience.


==> integrations/app-integrations/slack-integration.md <==
# Slack Integration

To further enhance team collaboration, you can integrate Slack with Skydeck.ai to let your GenStudio conversations go directly to your Slack channel. This allows your team to collaborate seamlessly.

### Enable Slack from the Control Center

You must have admin access of your Slack workspace to perform this action. In the **Integrations** section of your Control Center, choose **Apps**, and then click the **Add** button of Slack.

<figure><img src="../../.gitbook/assets/image (57) (1).png" alt=""><figcaption></figcaption></figure>

After that, you will be redirected to a new page where you can allow SkyDeck.ai to access your Slack workspace. Click Allow and then check the Control Center again to check if Slack has been added successfully. This step is only required by the GenStudio workspace owner or admins. The following step can be done by any user in your workspace.

### Add SkyDeck.ai app to a Slack channel

In your Slack workspace, choose any channel that you want to receive GenStudio conversation messages, and add the **SkyDeck.ai** app to that channel. The channel can be public or private, and each one will have a different way to connect to Slack.

<figure><img src="../../.gitbook/assets/image (58) (1).png" alt=""><figcaption></figcaption></figure>

### Send messages to a public channel

For public channels, SkyDeck.ai has already been able to see all of them after you connect Slack in the Control Center, so you don't have to configure more. Any user in your GenStudio Workspace can choose to connect their conversations to a public Slack channel. Here are the steps they need to do:

1. Choose a conversation in the left sidebar and enable [Collaboration](../../genstudio-workspace/sharing-and-collaboration.md)
2. Toggle the **Share to Slack** button
3. In the **Pick a channel** dropdown, choose a public channel. Ensure that SkyDeck.ai app has been added to that channel as discussed in the previous section.
4. Click the **Send** button next to the dropdown. If successful, you will see new messages in that Slack channel posted by SkyDeck.ai. If you have not added the app, you will see a message right under the dropdown explaining why.

<figure><img src="../../.gitbook/assets/image (59).png" alt=""><figcaption></figcaption></figure>

### Authorize Slack to send messages to a private channel

For private channels, each user will have to authorize with Slack. The steps are slightly different:

1. Choose a conversation in the left sidebar and enable [Collaboration](../../genstudio-workspace/sharing-and-collaboration.md)
2. Toggle the **Share to Slack** button
3. In the **Authorized applications**, click **Authenticate** right next to Slack. The user will be redirected to a new page to authorize Slack.

<figure><img src="../../.gitbook/assets/image (60).png" alt=""><figcaption></figcaption></figure>

4. If the authorization succeeds, the **Pick a channel** dropdown will now contain additional private channels that the user is in and has the SkyDeck.ai app. User can now connect their private channel with a GenStudio conversation.

<figure><img src="../../.gitbook/assets/image (61).png" alt=""><figcaption></figcaption></figure>

### Disconnect the channel

In both cases, if you want to disconnect the channel and the conversation, you can either click the red <mark style="color:red;">**End share**</mark> button in the popup above, or remove the SkyDeck.ai app from that channel.

<figure><img src="../../.gitbook/assets/image (62).png" alt=""><figcaption><p>Click the End share button at the below right corner of the popup</p></figcaption></figure>


==> control-center/admin-and-owner-tools.md <==
---
description: Control Center
---

# Admin & Owner Tools

The Control Center is a part of the Skydeck.ai system, located at admin.skydeck.ai that is intended for use by account owners and designated administrators. This is where an owner sets up their account and from where they invite users into this system. The Control Center is not normally accessed by users of the GenStudio workspace, although owners and admins may choose to use both. This is the first part of the Skydeck.ai system that is seen by account owners. They may, however, quickly move on to a pre-configured trial of the GenStudio workspace before returning to the Control Center to really get started.


==> control-center/README.md <==
---
description: How to get quickly setup with your control center.
---

# SkyDeck AI Control Center

We've put together some helpful guides for you to get set up with our product quickly and easily.\
\
You can sign in to the Control Center to administer your account, billing, integration, tool allocation and users (members) by going to admin.skydeck.ai and signing in with an Admin or Owner account such as the one you set up when first encountering SkyDeck AI.\
\
At [docs.skydeck.ai/genstudio](https://docs.skydeck.ai/genstudio) you can learn more about interacting with models using the SkyDeck AI user workspace we call GenStudio. You can reach your organization or company's workspace by going to your\_company\_domain.skydeck.ai where your\_company\_domain was the sub-domain name set up by the account owner during the onboarding process.

©2023 SkyDeck AI Inc.


==> control-center/setup-guide/set-up-account.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Set Up Account

From the **Account** page, you can select the **Company Profile** or **Billing** tabs.

<figure><img src="../../.gitbook/assets/admin-account.png" alt=""><figcaption></figcaption></figure>

***

### Account Information

Within the **Company Profile** tab, you can fill out the following fields:

* **Account Name** – Add your company name
* **Subdomain** – Select the subdomain you would like to use for SkyDeck AI — for example, google.skydeck.ai
* **Timezone** – Choose the appropriate timezone
* **Upload your logo** – Upload a PNG or JPEG image that is at least 100x100 pixels and less than 10MB in size.

<figure><img src="../../.gitbook/assets/admin-account-2.png" alt="" width="375"><figcaption></figcaption></figure>

When these four fields are complete, click **Save**. The page will then update to provide a link to your current workspace URL.

<figure><img src="https://lh6.googleusercontent.com/wRmj6kbqQaPY2yiFexvYjJIloet9K6Zi2ZZYaEONtMbRygmW02cGSjEt4DRthL_Er5ajQClssfUCqMYKmSww1Q1_qB9n3vLKS0XhNR5c5Ri_CsdfJaqpxp5vjR-nfh87ahPb_zLQzr6Tx_D6rpFv9xM" alt=""><figcaption></figcaption></figure>


==> control-center/setup-guide/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Setup Guide

Upon creating your SkyDeck AI account, you'll be introduced to the Setup Guide. This guide outlines the 5 core steps that ensure you get the most out of your SkyDeck AI experience. Whenever you need a refresher or want to check your progress, the Setup Guide is there to assist.

* [**Set Up Account**](set-up-account.md)
* [**Set Up Integrations**](set-up-integrations/)
* [**Set Up Security**](security/)
* [**Organize Teams**](organize-teams/)
* [**Curate Tools**](curate-tools/)
* [**Manage Members**](manage-members/)

<figure><img src="../.gitbook/assets/startup.png" alt=""><figcaption></figcaption></figure>


==> control-center/setup-guide/organize-teams/add-new-group.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Add New Group

Click on the **Add tag** button and a popup will appear. Provide a name for a high level group within your organization. Press **Enter** or click on the Add button to create the tag.

<figure><img src="../../../.gitbook/assets/admin-tags-2.png" alt="" width="563"><figcaption></figcaption></figure>

***

> **Tip** – Create one or two high level groups, then add a new group with more tags if you need more granular access control.


==> control-center/setup-guide/organize-teams/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Organize Teams

In SkyDeck.AI Control Center, tags are a way to organize the members of your company. A tag (or group) represents a team within your organization. You can assign a tag to a member or a tool, and members can only use tools that are assigned the same tag.

Select **Organize** from the sidebar. From this page, you can create tags to define and structure various teams within your organization. You will notice that the **All** tag already exists and cannot be removed. This is the default tag that applies to all members of your organization.

<figure><img src="../../../.gitbook/assets/admin-tags-1.png" alt=""><figcaption></figcaption></figure>


==> control-center/setup-guide/organize-teams/remove-groups.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Remove Groups

If you need to remove specific tags, click on the **Trash** icon next to the tag name and confirm the deletion. This action will also remove all the tag associations and cannot be undone.

<figure><img src="../../../.gitbook/assets/admin-tags-3.png" alt="" width="563"><figcaption></figcaption></figure>


==> control-center/setup-guide/manage-members/edit-members.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Edit Members

After adding members to your workspace, you can manage them such as changing displayed names, assigning tags, revoking accesses, etc. Each action may be available or not depending on the selected members and their current states (which is implied by their Guide actions).

### Change displayed name

You can change the name of any member after they are added to your workspace. Select one member from the list, click on the **Edit** button, change the user's name and click **Save**.

<figure><img src="../../../.gitbook/assets/edit-members-1.png" alt="" width="563"><figcaption></figcaption></figure>

### Assign Admin role

A member can be granted the admin role, and they will be able to access Control Center of your organization. Select one member from the list, click on the **Edit** button, toggle the **Administrator role** button and click **Save**. Then that user can sign in the Control Center and manage the account.

<figure><img src="../../../.gitbook/assets/edit-members-2.png" alt="" width="563"><figcaption></figcaption></figure>

### Assign tags

[Tags (or groups)](../organize-teams/) are used to curate which [AI tools](../curate-tools/system-tools.md) are accessible by whom. They can also provide groups for analytics and reporting. Members can be assigned multiple tags. Typically tags will define roles or departments in your organization.

There are 2 ways to assign tags to a user.

You can directly assign or remove tags of a user on the member list. Choose one member (without needing to select the checkbox), and in the **Tags** column, click the "+" icon. You can then see the current tags assigned to that member and will be able to assign or remove the tags by simply checking/unchecking the tags. The All tag is enabled by default for all members.

<figure><img src="../../../.gitbook/assets/edit-members-3.png" alt="" width="563"><figcaption><p>Assign tags on the member list</p></figcaption></figure>

The second way is to select a member by clicking a checkbox next to their name and click on the **Edit** button. You can then see the same interface as the above option, and you can manage the tags similarly. Once changes are complete, click **Save**.

<figure><img src="../../../.gitbook/assets/admin-members-5.png" alt="" width="563"><figcaption><p>Assigning tags in Edit popup</p></figcaption></figure>

Removing every tag from a member will remove their access to all tools and remove them from all reporting groups. You might wish to do this to limit access to a minimal level. Or to remove a member from global reports. Reports can still be produced for such members by naming them explicitly.

### Revoke access

You can revoke access of your members from GenStudio Workspace, after which they won't be able to it anymore. Select one or several invited members, click on the **Revoke** button and confirm the action. When the access is revoked, the user is still in the member list with the Guide action of **Invite**. You might want to invite them again later, so they are not removed completely.

### Delete a member

If you want to completely remove some members, select them and click on the **Delete** button. Once deleted, they will not appear on the list anymore. You will have to re-add them later if you want to using the [Add member](add-members.md) button.

### Transfer ownership

If the owner wish to transfer the ownership of the account to another user, they can select one admin and click on the **Transfer Ownership** button.


==> control-center/setup-guide/manage-members/import-file.md <==
---
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Import File

Before you import, check that your CSV file has the **name** and **email** fields in the following format:

<figure><img src="https://lh6.googleusercontent.com/UWhLOPa6UdBzO66s17El9htjl_JHS95Y4shkQ9nvuHYo8NlUdvAodSZ8nZ5zNgZbFEg2tjvdRZUm4SFP1rKmXNzoO-zRUzT275VOUNeVqTmyr-2ILt0hfkihnavR3BNzg26VUDHyXklms0eOzTC7Le8" alt=""><figcaption></figcaption></figure>

> **Tip** – Your file must be in CSV format or SkyDeck AI will not accept your import.

***

Select **Import File** tab in the Add member popup. Then click **Upload File** from the pop-up window and locate your CSV file.

<figure><img src="../../../.gitbook/assets/admin-members-3.png" alt="" width="563"><figcaption></figcaption></figure>

If the import is successful, you will see a **Success banner** at the top of the screen, and the page will populate with the new members' information.

{% hint style="info" %}
You can optionally include a third field named **tags** in the CSV file to assign tags to the added members. If not, you can [assign them later](edit-members.md).
{% endhint %}


==> control-center/setup-guide/manage-members/invite-members.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Invite Members

After adding members to SkyDeck.AI, they are not able to use your workspace yet. Their current Guide action is **Invite**, which indicates that you as an admin or owner will have to invite them by sending an email.

To invite members to use the [GenStudio workspace](https://eastagile.skydeck.ai/), check the first box next to **Name and Email** to select all members or select individual checkboxes for individual members. Then, the **Invite** button will appear at the top of the page. Click on that button to send email invites to all of the selected members.

In the pop-up window, click **Confirm**.

<figure><img src="../../../.gitbook/assets/admin-members-4.png" alt="" width="563"><figcaption></figcaption></figure>

After that, their Guide action will change to **Wait**, which means that you will be waiting for the members' responses. You can also resend the emails for those users if they miss their previous emails. After a member completes their signup process, their Guide action will change to **OK**, and they will be able to access your GenStudio workspace. You cannot resend an email to a member with Guide action of OK.

If the previous link expires, the Guide action will change to **Re-invite**. For more details about each Guide action, please refer to [.](./ "mention").


==> control-center/setup-guide/manage-members/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Manage Members

## Overview

Select **Members** from the sidebar. From this page, you can manually add members, import member files, send invites to members, and assign tags to members.

<figure><img src="../../../.gitbook/assets/admin-members-1.png" alt=""><figcaption><p>Add people to Members to invite them and manage their roles in your SkyDeck AI</p></figcaption></figure>

At the top of the screen you will see guidance about your account in terms of having enough paid seats to invite more members.

## Available Actions

The buttons (Add Member, Export members, Transfer Ownership, Edit, Invite, Revoke, Delete, Cancel) will be active or inactive depending on whether they are relevant to the members you have checked (or not checked) in the list below.

If you have not selected any members then relevant actions at the moment will be to add a single person via email or import a csv file of people to invite, and to export the current members of your workspace.

If you have selected one or more member, some actions are available on the list page such as inviting or revoking access. More advanced features that take up more space to work with are found using the **Edit** button. In particular, this is where Role and Tags can be changed to manage permissions within Control Center and access to tools and integrations via the GenStudio workspace.

All these actions will be discussed more in the following sections, which explain what can be done in the Members page.

## Guide action

In the list of members, pay particular attention to the **Guide** column. This provides a quick suggestion about what you should do next with that particular person.

There are different Guide actions:

1. When a member is added, the Guide action is **Invite**. We need to invite that member.
2. When a member is invited, the Guide action is **Wait**. We need to wait for that member to accept their email invitation.
3. When a member accepts their invitation, the Guide action is **OK**. It is ok now, we don't need to do anything more.
4. When a member's invitation expires, the Guide action is **Re-invite**. We need to re-invite them by sending another email.
5. When a member is revoked, they are still in the list, and the Guide action is back to Invite because you might want to invite them again next.

## Roles

A member can have one or multiple roles, each granting different levels of access to the Control Center and GenStudio Workspace. The roles are defined as follows:

* Member: Grants access to the GenStudio Workspace, provided the user has been invited and has set up their account.
* Admin: Provides access to the Control Center, enabling the management of the account, integrations, security, tags, tools, and members.
* Owner: Includes all admin permissions, plus the ability to manage billing, delete the account, and transfer ownership to another admin.


==> control-center/setup-guide/manage-members/add-members.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Add Members

Click on the **Add members** button on the Members page and then enter the new member’s **Name** and **Email**. You can also [Import a file](import-file.md) to add multiple members at the same time.

<figure><img src="../../../.gitbook/assets/admin-members-2.png" alt="" width="563"><figcaption></figcaption></figure>


==> control-center/setup-guide/set-up-integrations/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Set Up Integrations

Head back to the Setup Guide and click **Add Integration** or select **Integrations** from the sidebar. On the Integrations page, click on the **Add Integrations** button.

<figure><img src="../../../.gitbook/assets/admin-integrations-1.png" alt="" width="563"><figcaption></figcaption></figure>

In the **Add Integration** pop-up window, fill out the following fields:

* **Integration Service** – Choose an LLM service such as OpenAI, VertexAI, Anthropic... or a database service from the dropdown menu.
* **Integration Name** – Create a recognizable name for your integration.
* **Credentials** – Enter your [API credentials](integration-assistance.md).

<figure><img src="../../../.gitbook/assets/admin-integrations-2.png" alt="" width="563"><figcaption></figcaption></figure>


==> control-center/setup-guide/set-up-integrations/integration-assistance.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Integration Assistance

When you select a service (LLM or SQL database), a prompt labeled **Where can I get these credentials?** will appear. This is a dynamic link that directs you to the specific documentation for the selected service, guiding you on how to generate or find your API key.

As you switch between LLM Services, the link updates accordingly, ensuring you always have quick access to the right information within SkyDeck AI.

<figure><img src="../../../.gitbook/assets/admin-integrations-3.png" alt="" width="563"><figcaption></figcaption></figure>

This information on public pay-as-you-go conversational services is also linked here for easy reference:

* [**OpenAI**](../../../integrations/llms-and-databases/openai-integration.md)
* [**Vertex**](https://developers.google.com/workspace/guides/create-credentials#service-account)
* [**Anthropic**](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)
* [**HuggingFace**](../../../integrations/llms-and-databases/huggingface-integration.md)


==> control-center/setup-guide/security/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Set Up Security

Select **Security** from the sidebar.



==> control-center/setup-guide/security/authentication-setup.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Authentication Setup Guide

## Guidance

The members you invite to use the GenStudio workspace need to authenticate themselves when they initially sign up and when they later sign in. You can choose one or more allowed methods that are consistent with the way users normally identify themselves in your organization. Enterprise Single Sign On (SSO) methods are available in advanced plans.

### Google Authentication

If your organization has assigned IDs to your team such as Jane.Doe@yourcompany.com then you should use one (and just one) of our SSO methods. If your organization is a Google Workspace user then choose “Google” as an allowed authentication method.

### Microsoft Authentication

Choose “Azure AD” if your organization uses Microsoft’s enterprise Azure AD (Active Directory) authentication service (soon to start being called Microsoft Entra ID). This usually applies to business or academic deployments of Microsoft oriented SSO. Do not confuse this with the Microsoft individual consumer authentication method called “Microsoft Account” assigned to individuals when they sign up for Outlook.com, Microsoft 365, Xbox, etc. A consumer Microsoft account holder will not be able to sign in with Azure AD.

With Azure Active Directory, Microsoft provides the identity platform as a service but you can modify some of the configuration and settings, such as adding your own custom domain name (to get @yourcompany.com) or requiring multi-factor authentication. Your Azure Active Directory instance is available via the Azure Portal and other management tools like PowerShell, the Azure CLI and the REST API.

### Pick One SSO

If yours is a Google workspace shop, pick Google athentication. If yours is a Microsoft identity service shop, pick AD. This is the “Single” in SSO. It is the way you would primarily want members to sign in and sign up.

### Alternate Authentication

If you do not have any single source of identity, or use a method we do not support (contact us and let us know) then you might choose multiple methods or all methods for authentication. Or if members will join your GenStudio workspace who are not part of your regular organization you will need to choose alternative authentication methods for them to use.

Generally, if your organization uses Microsoft Azure AD, you might choose email or email and Google as supported authentication. If your organization uses Google authentication, you might add email to allowed options.

One downside to allowing alternative authentication methods is that some of your organization members might become confused and try to sign in with an alternative method. You might find it easier to manage allowing only your primary authentication method and providing identities (email addresses) to outside users you invite to your workspace.

**TL;DR**

- Email: Useful for 3rd party users or for hetrogeneous teams.
- Azure AD: The primary choice for organizations with enterprise Microsoft authentication.
- Google: Useful for 3rd party users, hetrogeneous teams, or organizations using Google Workspace.


==> control-center/setup-guide/curate-tools/system-tools.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# System Tools

SkyDeck AI's [GenStudio workspace](https://eastagile.skydeck.ai/) comes with several default AI tools. Here's a quick overview of these tools to help you understand how to set up your permissions.

<table data-full-width="false"><thead><tr><th width="190" align="center">Icon</th><th width="190.33333333333331" align="center">Name</th><th align="center">Description</th></tr></thead><tbody><tr><td align="center"><img src="../../../.gitbook/assets/sql-assistant-logo.png" alt="" data-size="original"></td><td align="center"><strong>SQL Assistant</strong></td><td align="center">Provide the DDL that defines the tables in your database, then ask your SQL Assistant to write SQL code to produce any result.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/legal-agreement-review-logo.png" alt=""></td><td align="center"><strong>Legal Agreement Review</strong></td><td align="center">Evaluate a clause in your legal document. Have it explained to you. Modify it to change the document’s provisions.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/strategy-consultant.png" alt="" data-size="original"></td><td align="center"><strong>Strategy Consultant</strong></td><td align="center">Assists users by generating thoughtful responses to a specific question that lead you through a consultative approach to the request.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/teach-me-anything-logo.png" alt="" data-size="original"></td><td align="center"><strong>Teach Me Anything</strong></td><td align="center">This AI tutor will provide a lesson on any topic under the sun. You can choose the teaching style, language, and sophistication of the lesson.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/pair-programmer-logo.png" alt="" data-size="original"></td><td align="center"><strong>Pair Programmer</strong></td><td align="center">Your AI pair programmer will review your code, help you add new features, modify existing features, add test coverage, add comments or documentation, and more.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/image-generator-logo.png" alt="" data-size="original"></td><td align="center"><strong>Image Generator</strong></td><td align="center">Generated an image based on the description with OpenAI's DALL-E model.</td></tr></tbody></table>

You can add a custom tool in the Control Center and it will be enabled in your entire workspace. Learn more at [Develop Your Own Tools](https://docs.skydeck.ai/developers/develop-your-own-tools).


==> control-center/setup-guide/curate-tools/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Curate Tools

The Tool feature helps to construct more complex prompts easily by asking users for a few brief inputs and then generating the complete, detailed prompt.

Select **Tools** from the sidebar. From this page, you can manage the tools for the entire organization, including uploading, editing, duplicating, and deleting tools. You can also use the tags you created within [**Organize**](../organize-teams/) to determine which AI tools are available to specific groups or individuals.

<figure><img src="https://lh4.googleusercontent.com/ETDbRxZdiQPH3nrVpku_6EYP7FOlgS8BHUF5-euuHuy3rHnVwG5kW2UzOvm10lLK9KN0FDOh5wqpm59cCBxn9tjvMoHk8K7twj6bX_Mec2JP57MxLXdWnVkAc3mnDjIEQIUUegl_ZciqCfINB1XAqD4" alt=""><figcaption></figcaption></figure>


==> control-center/setup-guide/curate-tools/assign-tags.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Assign Tags

Tags allow you to associate the tools with one or many group of members in your organization. After a tag is assigned to a tool, it can only be used by members who are also assigned that tag.

In the Tools page, click on the **Assign** button for each tool you want to manage. In the pop-up window, you can choose multiple tags from the multi-select dropdown. Toggle between selection and deselection for the tags as needed. Then click **Save**.

<figure><img src="../../../.gitbook/assets/admin-tags-4.png" alt="" width="563"><figcaption></figcaption></figure>

Repeat this process for each AI tool to create customized permission groups.


==> releases/oct-16th-2023.md <==
---
description: >-
  We're excited to share the latest updates to GenStudio and Control Center.
  We've introduced new features, made significant improvements, and fixed some
  bugs to enhance your user experience.
---

# Oct 16th 2023

## GenStudio

### New Features

* **Collaboration Chat**: You can now view a list of members in a collaborated conversation, chat within the conversation, and view the conversation history. Additionally, collaborators can now edit the name of shared conversations.
* **Display Sender Name**: We've added visual elements to improve your chat experience - the sender's name is displayed in collaboration chats, and if you hover over the sender's avatar, the sender's name will also appear.
* **Multiple Language Support**: We've supported French translations.
* **Logo Updates**: We've added the SkyDeck.ai TM logo to the user.skydeck.ai page and updated the SkyDeck TM logo for auth.skydeck.ai.
* **Enhanced Member List UI**: The user interface for the member list has been enhanced for better readability and navigation.
* **Model Selection Persistence**: Your model selection will now persist across sessions, saving you time and effort.

### Improvements

* **UI Enhancements**: We've made various improvements to the user interface to make it more intuitive and user-friendly.
* **Migration to SSO**: We've migrated Rapid Onboarding to Single Sign-On (SSO) to streamline user access across multiple platforms.
* **Conversation Reordering**: Conversations are now reordered based on their last-updated-at time, enabling you to easily track your recent conversations.

### Bug Fixes

* **Fixed Navigation Bug**: We've fixed a bug that affected navigation to the home page after viewing a collaborated URL.
* **Fixed Message API Logic**: We've fixed a bug in the logic of the messages API to ensure accurate data retrieval and display.
* **Fixed Broken Links**: We've fixed a broken link to the Control Center sign-in page to ensure easy and uninterrupted access.
* **Fixed Styling Issue**: We've addressed a styling issue with the conversation title in Firefox and Safari for better readability.
* **Fixed DLP Modal Cache Issue**: We've fixed a bug where the DLP modal was showing old cache and flashing.
* **Fixed Auto Scroll**: We've fixed an issue that now auto scrolls to the bottom when a conversation is opened.
* **DLP Mode**: We've fixed a bug where the system was checking for sensitive data even when the DLP mode was set to OFF.
* **Owner Rights:** We've fixed a bug that prevented owners from seeing their conversations after SSO migration.

## Control Center

### New Features

* **Billing Enhancements**: We've made major strides in improving the billing experience with features like payment status synchronization with Stripe and an improved Billing UI.
* **Feature Access Control**: We've implemented feature access control in three phases, providing you the flexibility to manage access to different features.
* **Locale Synchronization**: We've improved locale in the Control Center, enhancing the user experience for different locales.

### Improvements

* **Onboarding Guide**: We've made improvements to the onboarding guide, making it easier for new users to navigate through the product.
* **Rapid Onboarding**: We've updated the rapid onboarding feature to only show the popup if the owner is in an Active Free Trial Plan.
* **Timezone Setting**: The system now automatically sets the timezone for the account when a user signs up.

### Bug Fixes

* **Owner Rights**: We've fixed a bug where the owner couldn't assign/delete tags of members. Additionally, we've addressed an issue that prevented owners from re-inviting members.


==> releases/nov-22nd-2024.md <==
---
description: >-
    GenStudio and Control Center receive enhancements focusing on snapshot functionality, error message improvements, UI refinements, and the introduction of new features such as Gemini integration and Auto Join control.
---
# Nov 22nd, 2024

## GenStudio

### Improvements
- **UI Enhancements**: Removed unnecessary refetching indicators for a cleaner interface.

### New Features
- **Snapshot Interaction Tracking**: Implemented tracking of snapshot interactions to enhance user experience.

### Bug Fixes
- **Duplicate Snapshots Resolved**: Fixed an issue where duplicated snapshots appeared due to incorrect item IDs.
- **Improved Error Messages**: Provided user-friendly messages for token limit errors after scraping.

## Control Center

### Improvements
- **Enhanced LLM Responses**: Improved responses when extra knowledge is irrelevant, providing more accurate information.
- **Refined Function Prompting**: Prompts now include function call histories, enhancing the context for better interactions.

### New Features
- **Gemini Integration**: Added integration with Gemini, including Experiment 1114.
- **Auto Join Control**: Organization owners can now enable or disable the Auto Join feature.

### Bug Fixes
- **Deadlock Issue Resolved**: Fixed a deadlock that occurred when updating conversation size.
- **Improved Error Messages**: Provided user-friendly messages for token limit errors after scraping.

==> releases/oct-4th-2024.md <==
---
description: >-
  This release focuses on enhancing user experience in GenStudio and Control Center with new features, performance improvements, and crucial bug fixes.
---

# Oct 4th, 2024

## GenStudio

### New Features

- **'Show More' Button**: Added a "Show More" button to tool messages, allowing you to view extended content.
- **Conversation Search**: Implemented the ability to search through conversations to find information quickly.
- **Auto-Translate**: Introduced an auto-translate feature to support multi-language communication.

### Improvements

- **Collaboration for All Users**: Enabled collaboration features for non-business users, fostering teamwork and communication.
- **Enhanced UI/UX**: Made several user interface and experience enhancements for smoother navigation and a better overall experience.
- **Improved Snapshot Loading**: Optimized snapshot loading times, allowing quicker access to your snapshots.
- **Input Responsiveness**: Improved input responsiveness by adding debounce, enhancing typing and interaction smoothness.
- **Updated Placeholders**: Reworded placeholder text for better clarity and guidance.
- **Preview Organization**: Enhanced the order of previews to help you find what you need faster.

### Bug Fixes

- **Tools Sidebar Display**: Fixed an issue where the tools sidebar did not display all pages, ensuring full access to all tools.
- **Conversation Pagination**: Resolved errors with conversation pagination for seamless navigation through messages.
- **Participant Submission**: Fixed a bug where participants were undefined upon submission, ensuring correct participant information.
- **'@' Mention Functionality**: Corrected the '@' mention feature in conversations, allowing you to tag colleagues effectively.
- **Chat Page Stability**: Fixed crashes on the chat page when using special tokens, improving stability.

## Control Center

### New Features

- **Conversation Search**: Introduced the ability to search for conversations, making it easier to locate past discussions.
- **Enhanced Tool Management**: Added search, pagination, and sorting functionalities for tools, improving the management and accessibility of your tools.

### Improvements

- **Larger Data Submissions**: Increased the maximum request body size, allowing you to submit larger data without encountering errors.
- **Improved Snapshot Preview**: Enhanced the public snapshot preview for a better viewing experience.
- **Automatic Username Population**: Your username now automatically populates from your Google account during Google sign-up, streamlining the registration process.
- **Updated Default Images**: Refreshed default images for a more appealing visual experience.

### Bug Fixes

- **Snapshot Media Access**: Fixed issues with snapshot media URLs expiring, ensuring uninterrupted access to your media files.
- **VertexAI Model Stability**: Resolved instability issues with VertexAI models to ensure consistent performance.
- **Routine Validation**: Added missing token limit validation for routines to prevent errors and maintain system integrity.

==> releases/sep-20th-2024.md <==
---
description: >-
  This release introduces new AI integrations, enhanced account management,
  improved data protection, and various user interface and performance
  improvements to enhance your experience with GenStudio an
---

# Sep 20th, 2024

## GenStudio

### New Features

* **LaTeX Equation Support**: You can now include LaTeX equations in your content.

### Improvements

* **Simplified Account Management**: Access your account settings without needing to re-login.
* **Improved Code Display**: Code blocks now support word wrapping for better readability.
* **Enhanced Import Messages**: Clearer error messages when importing JSON tools.
* **Consistent Title Length**: Titles are now limited to 60 characters for uniformity.
* **Optimized Sign-in Experience**: Enhanced sign-in and sign-up pages for better work account integration.

### Bug Fixes

* **Resolved Message Errors**: Fixed issues with parsing HTML in Markdown that caused errors in messages.
* **Stability Improvements**: Fixed a crash when using collapsible sections in assistant messages.

## Control Center

### New Features

* **Perplexity AI Integration**: Access enhanced content generation capabilities with the new Perplexity AI integration.
* **Expanded AI Models**: Added new OpenAI models, providing enhanced AI capabilities.

### Improvements

* **Simplified Account Management**: Manage your account without needing to re-login, saving you time.
* **Improved Tool Integration**: Conversations now use appropriate system prompts when tools are activated, enhancing accuracy.
* **Enhanced Error Messages**: Clearer messages during tool validation for easier troubleshooting.
* **Unified Title Display**: Routines and conversations now share consistent title truncation for a uniform experience.
* **Optimized Sign-in Experience**: Enhanced sign-in and sign-up pages for better work account integration.
* **Enhanced PDF Processing**: Improved extraction of uploaded PDFs, even when they contain unsupported images.
* **Advanced Data Protection**: Data Loss Prevention now checks for personal names and locations to secure sensitive information.
* **Updated DLP Settings**: Data Loss Prevention is now turned off by default, giving you more control over data handling.

### Bug Fixes

* **Performance Improvements**: Resolved issues where routines could exhaust resources when called multiple times.

==> releases/nov-8th-2024.md <==
---
description: >-
  This release focuses on enhancing collaboration features, improving user interface elements, and refining real-time communication for a better user experience.
---
# Nov 8th, 2024

## GenStudio

### Improvements

- **Optimized Logo for Faster Loading**: Replaced the logo with an optimized version to reduce loading times.
- **Improved Real-Time Messaging**: Enhanced unread message notifications using WebSockets for instant communication updates.
- **Visually Distinct User Messages in Snapshots**: User messages in snapshots now have a different background color for better distinction.

### New Features

- **"My Collaborations" Tab**: Added a "My Collaborations" tab in Account Settings for efficient collaboration management.
- **Clear Search Button**: Introduced a clear search button to the conversation search field for easier navigation.

### Bug Fixes

- **Resolved Collaboration State Inconsistencies**: Fixed issues causing inconsistent collaboration states across conversations.
- **Fixed UI Rendering Issues**: Addressed rendering issues that reset the conversation title input field unnecessarily.
- **Corrected Responsive Layout in Chat Box**: Fixed layout problems in the chat box when using responsive design with two sidebars.
- **UI Bug Fixes in "My Collaborations" Data Tables**: Resolved various UI bugs in the "My Collaborations" data tables for a smoother user experience.

## Control Center

### Improvements

- **Enhanced URL Detection**: Improved recognition of URLs in messages and during content scraping for a smoother experience.
- **Business Domain Visibility**: Users can now view their business domain information on the account page, providing better account transparency.
- **Optimized Real-Time Notifications**: Updated conversation notifications via WebSockets for more immediate updates.
- **Improved Onboarding for Verified Businesses**: Streamlined the onboarding process for verified businesses, making it quicker to get started.
- **Increased System Reliability**: Implemented high availability with Redis Sentinel to enhance performance and stability.

### New Features

- **"My Collaborations" Tab**: Introduced a new "My Collaborations" tab in the Account Settings page for easier collaboration management.
- **Enhanced Tool Search**: Enabled searching within tool descriptions and usage notes to help users find tools more efficiently.


==> releases/nov-12th-2023.md <==
---
description: >-
  Welcome to our latest update! We've been working hard to enhance your
  experience with new features, improvements, and fixes. Below, you'll find the
  most user-impactful changes.
---

# Nov 12th 2023

## GenStudio

### New Features

* **Slack Member Authorization**: Effortlessly manage team access with the new integration for Slack member authorization.

### Improvements

* **Infinite Scrolling**: Enjoy a seamless conversation experience with the new infinite scrolling feature, allowing you to browse without interruption.

### Bug Fixes

* **Unread Message Status**: Resolved an issue where deleting a message would mark the entire conversation as unread.
* **Documentation Links**: Fixed documentation links to ensure they work correctly across multiple language versions.
* **Message Trimming**: Upgraded litellm to prevent unintended message trimming for a clearer conversation history.

## Control Center

### New Features

* **Azure AD & Okta Script**: Gain better control over application settings with a script that disables Azure AD and Okta across all current applications.
* **Automatic Azure AD Disable**: New accounts will now have Azure Active Directory disabled by default for enhanced initial security.

### Improvements

* **More Data Per Page**: View up to 100 items per page, reducing the need to flip through pages to find what you need.
* **Security Enhancements**: Updated package versions to address and resolve known vulnerabilities, keeping your data safe.

### Bug Fixes

* **Smooth Sign-Up**: Fixed the sign-up redirection to ensure new users are smoothly transitioned to the sign-in page upon registration.


==> releases/aug-16th-2024.md <==
---
description: >-
    This release focuses on enhancing authentication methods and user access across GenStudio and Control Center, streamlining login experiences, and ensuring account security.
---
# Aug 15th, 2024

## GenStudio

### Improvements

- **Synchronized Authentication Methods**: GenStudio now reflects the authentication options configured in Control Center, providing a consistent login experience.
- **Prioritized Google Login**: Placed the Google login option at the top of the login page for easier access.
- **Updated Translations**: Refreshed internationalization settings for better multilingual support.

## Control Center

### New Features

- **Multiple Authentication Methods**: Introduced new sign-in options to provide flexibility in accessing your account.
- **Email Verification for Control Center Users**: Implemented email verification to strengthen account security.

### Improvements

- **Prioritized Google Sign-In**: Moved the Google sign-in option to the top of the login page for easier access, and updated field labels for clarity.
- **Enhanced Account Verification**: Newly verified owners are now correctly recognized, improving access rights management.
- **Enhanced Search Functionality**: Integrated advanced date range support in the search feature, improving data retrieval efficiency.

### Bug Fixes

- **Fixed Rememberizer Integration**: Resolved an issue causing Rememberizer to fail in reconnecting, ensuring continuous service.

==> releases/jul-26th-2024.md <==
---
description: >-
  This release adds snapshot and file upload improvements to GenStudio, and
  better login redirection to Control Center. Enjoy smoother workflows and
  smarter management!
---

# Jul 26th, 2024

## GenStudio

### New Features

* **Snapshot Generation:** Now you can easily generate snapshots with just a click, simplifying your workflow.
* **Public Snapshot View:** Share your snapshots publicly with a new view feature for better collaboration.

### Improvements

* **File Upload Tooltip:** Hover over uploaded files to see their full names, making it easier to identify your files.
* **Revamped Message Sending:** Improved the process of sending messages with file uploads for a smoother experience.

### Bug Fixes

* **Text Overflow:** Fixed text overflow issues in the rememberizer integration component for better readability.
* **Breadcrumbs and Default Conversations:** Improved navigation by fixing default conversations and breadcrumbs.

## Control Center

### New Features

* **Enhanced Login Experience:** Now, when you log back in, you'll be redirected to the last page you visited, ensuring a seamless experience.
* **Logout Path Memory:** The system will remember your last visited path on logout, making your next login smoother.

### Bug Fixes

* **Smooth Sign-Up:** Fixed the sign-up redirection to ensure new users are smoothly transitioned to the sign-in page upon registration.


==> releases/oct-23th-2023.md <==
---
description: >-
  We're excited to bring you major enhancements! We've rolled out a new user
  interface in GenStudio and bolstered real-time communication in Control
  Center, along with several improvements.
---

# Oct 23th 2023

## GenStudio

### New Features

* **GenStudio User Interface**: A brand new user interface has been introduced, designed to offer an improved and more intuitive experience.

### Improvements

* **System Responsiveness**: The system's response time when processing new information has been enhanced.
* **User Interface**: Several aspects of the user interface have been refined, including the behavior of the conversation sidebar, the layout of conversation messages and chat box, and the confirmation modal for deleting tools.
* **Navigation**: The display of navigation breadcrumbs have been further refined for a smoother user experience.
* **Collaboration**: Collaborators can now edit the name of the shared conversation. The display of collaboration members have been further refined for a smoother user experience.
* **Handle Unread Messages:** We've improved how our system manages unread messages, ensuring no important updates are missed.
* **Update Execution Progress:** An enhancement to the execution progress of the smart tool in GenStudio for better user experience.

### Bug Fixes

* **Locale Switching in Conversations**: An issue has been fixed where model selection would disappear when changing languages in new conversations.

## Control Center

### **Improvements**

* **Switching Plans:** We've improved the way our system handles the process of switching between different plans to ensure a smoother, error-free experience.
* **Refactor Payment:** The payment process has been restructured to enhance your checkout experience.

### **Bug Fixes**

* **Identity Provider Description:** Implemented a fix to handle missing descriptions from identity providers.
* **Guide Text on Members Page:** Corrected the guide text on the Members page from "Waiting" to "Wait" for clarity.


==> releases/sep-27th-2024.md <==
---
description: >-
  This release introduces new features and enhancements in GenStudio and Control
  Center, including improved conversation titling, tool pagination, and
  independent language settings, as well as important
---

# Sep 27th, 2024

## GenStudio

### New Features

* **Added Caddy Template**: Introduced a new Caddy template to enhance deployment and configuration options.

### Improvements

* **Conversation Titles in Browser Tabs**: Manually edited or auto-generated conversation titles now populate browser tabs and webpage titles, providing better context.
* **Increased Timeout Settings**: Extended timeout limits to 10 seconds to improve system responsiveness under heavy loads.

### Bug Fixes

* **UI Enhancements**: Resolved various issues in the new user interface to enhance overall experience.

## Control Center

### New Features

* **Tool Pagination**: Implemented pagination in the tool list for easier navigation when managing many tools.
* **Automated Tag Creation for CSV Upload**: New tags are now automatically created during CSV file uploads if they don't exist, simplifying the tagging process.
* **Enhanced Conversation Titles with AI**: Conversation titles are now generated using AI for more concise and meaningful summaries.

### Improvements

* **Independent Language Settings**: Language preferences for GenStudio tools can now be set independently from the Control Center, offering a more personalized experience.
* **Optimized Tool List Loading**: Reduced payload and improved loading times by detaching images from the tool list API.
* **Improved Conversation Titling**: Now uses the first non-empty message to generate conversation titles, ensuring they are more relevant.

### Bug Fixes

* **Fixed Conversation Titles for OpenAI Models**: Resolved an issue where conversation titles weren't generated for certain OpenAI models.
* **Prevented Token Limit Issues in Prompts**: Fixed a bug where token limits could be exceeded when filling prompts, preventing errors.
* **Routine Deletion Stability**: Ensured routines are properly stopped before deletion to maintain stability.
* **Corrected Error Reporting**: Fixed an issue where errors were reported to the wrong dashboard, ensuring accurate error tracking.
* **Adjusted Token Limits for Claude 3 Models**: Set maximum token limits to prevent input errors when using Claude 3 models.


==> releases/oct-30th-2023.md <==
---
description: >-
  We're excited to bring you our latest updates, featuring new user-centric
  features, interface enhancements, and important bug fixes. This includes a new
  Okta sign-in icon, email templates, etc.
---

# Oct 30th 2023

## GenStudio

### **New Features**

* **Okta Sign-In Button Icon**: We've added an icon for the Okta sign-in button, enhancing the visual cues in our user interface.
* **Reset Tools to Default**: You can now reset your tools to their default settings with a simple click of the navigate back button.
* **Message Time-stamping**: We've added a timestamp to messages, enabling you to track the timing of messages more accurately.

### **Improvements**

* **Email Templates in French**: We've updated our email templates in French, improving communication for our French-speaking users.
* **Error Messaging**: We've improved the error message you see when getting subdomain info fails, helping you understand the issue more clearly.
* **Sidebar Item and Conversation Message Layout**: We've refined the layout of the sidebar item and conversation message, improving the overall user interface.
* **Sidebar and Message UI**: We've further refined the sidebar and message UI, ensuring a more user-friendly and visually-appealing experience.
* **Long Conversation Truncation**: Fixed an issue where long conversations were not being truncated properly, improving the readability of conversations.

### **Bug Fixes**

* **Collaboration Conversation Error**: We've fixed an issue that was causing errors when joining a collaboration conversation.
* **Model Selection Default Value**: We've fixed an issue where the model selection was persisting an incorrect default value.
* **Overflow Table in Assistant Message**: We've fixed an overflow issue in the assistant message table, improving its readability and appearance.

## Control Center

### **Bug Fixes**

* **Session Timeout**: Increased session timeout for tenants to 72 hours, ensuring you can stay logged in for longer without interruption.
* **Case Sensitivity Check**: Reviewed and fixed issues with the case sensitivity checking, enhancing the robustness of our system.


==> releases/aug-2nd-2024.md <==
---
description: >-
  This release adds recommended LLM models, improves snapshot management, and
  enhances performance. Control Center now supports Mistral Large 2 and removes
  FusionAuth.
---

# Aug 2nd, 2024

## GenStudio

### New Features

* **Recommended LLM Models:** Discover our highlighted Large Language Models (LLMs) to make informed choices and enhance your projects.

### Improvements

* **Snapshot Management:** Enjoy an improved snapshot management modal for a better user experience.
* **Display Name Update:** We've updated the display names for models to make them more intuitive.

### Bug Fixes

* **Nullable Account Names:** Fixed an issue where account names could be null, ensuring smoother operation.
* **Duplicate Tooltip:** Fixed the duplicate tooltips for delete and copy buttons for clearer navigation.

## Control Center

### New Features

* **Mistral Large 2 Support:** Added support for Mistral Large 2 in SkyDeck, giving you more options to enhance your work.


==> releases/aug-23rd-2024.md <==
---
description: >-
    This release focuses on enhancing media display, improving document processing, and fixing various bugs to provide a better user experience.
---

# Aug 22nd, 2024

## GenStudio

### Bug Fixes

- **Access to Update Password Page**: Fixed an issue where the Update Password page was not accessible when password authentication was disabled.

## Control Center

### New Features

- **Media Display in Snapshots**: Enabled viewing of media files within snapshots for enhanced content review.

### Improvements

- **High-Definition Image Processing**: Improved image detail when processing images via the LLM API for clearer outputs.

### Bug Fixes

- **Accurate Token Calculation for PDFs with Images**: Corrected token calculation errors to ensure precise processing of PDFs containing images.
- **Improved PDF Compatibility**: Handled JB2 pages in PDFs to enhance document processing reliability.
- **Enhanced Document Upload Reliability**: Removed null characters in uploaded documents to prevent processing issues.
- **Corrected Email Links**: Fixed issues with email URLs to ensure proper navigation from email communications.
- **General Stability Improvements**: Addressed various backend issues to enhance overall system reliability.

==> releases/oct-25th-2024.md <==
---
description: >-
  This release focuses on enhancing user experience through improved
  personalization, messaging features, and user interface refinements. It also
  includes several bug fixes to enhance stability and perf
---

# Oct 25th, 2024

## GenStudio

### Improvements

* **Optimized Mobile Logo Display**: A smaller Skydeck logo enhances mobile device compatibility.
* **Conversation View Modes**: Users can change view modes in conversations for a customized interface.
* **User Avatars in Conversations**: User images are now displayed in conversations for a personal touch.
* **Enhanced WebSocket Handling**: Improved connection handling with user notifications ensures better connectivity.
* **Focused Conversation Generation**: The interface now focuses on the conversation when generating messages.
* **UI Enhancements**: Various interface improvements contribute to a smoother experience.
* **Message Editing with AI Regeneration**: Users can regenerate AI responses when editing messages.

### New Features

* **Snapshot Visit Analytics**: Added analytics to track when users visit snapshots for better insights.

### Bug Fixes

* **Snapshot Layout Fixed**: Resolved layout issues for a better snapshot viewing experience.
* **Model Selection Dropdown Fixed**: Fixed truncation issues with the model selection dropdown.
* **Message Collapse State Fixed**: Corrected the initial collapse state of messages for consistency.
* **Profile Cancel Function Fixed**: The "Cancel" button now redirects to Conversations, and a "Clear" button was added.

## Control Center

### Improvements

* **Personalized Conversation Views**: Users can now save their preferred conversation view modes for a more tailored experience.
* **Enhanced Admin Management**: Admins can now manage other admins, providing better control over team roles.
* **Improved Streaming Error Messages**: More descriptive error messages during streaming issues enhance troubleshooting.
* **Collaborative Message Editing**: Edited messages are broadcasted to all collaborators, improving real-time collaboration.
* **Customizable Support Targeting**: Customer support conversations can be configured to engage only new users.
* **CSA Messages with Documents**: Support agents can now include documents in messages for more effective assistance.

### New Features

* **Tool Max Tokens Support**: Tools now support the max\_tokens parameter, offering better control over outputs.
* **Refined Tool Editing**: Enhanced tool editing capabilities for a smoother user experience.

### Bug Fixes

* **Login Issue Resolved**: Fixed an issue where sign-ins returned null claims, improving login reliability.
* **Model API Update Fixed**: Resolved issues with updating the last used model API.
* **Optimized Vertex AI Credentials**: Vertex AI now uses cached credentials for improved performance.
* **Workspace Access Bug Fixed**: Addressed the "Visit your workspace" navigation issue.
* **Parameter Validation Fixed**: Fixed missing validation in parameter correction functions.


==> releases/oct-18th-2024.md <==
---
description: >-
  This release focuses on enhancing user authentication options, improving tool creation and management, and refining the overall user experience across GenStudio and Control Center.
---

# Oct 18th, 2024

## GenStudio

### New Features

- **Microsoft Sign-In Support**: Added support for signing in with your Microsoft account for a seamless authentication experience.

- **Enhanced Chatbox**: Improved the chatbox with new features for better communication.

- **Partial User Mentioning**: Implemented partial matching for mentioning users, simplifying collaboration in GenStudio.

- **WebSocket Connection Stability**: Enhanced WebSocket connection reliability while using GenStudio, ensuring continuous real-time communication.

- **"Try" Button in Tool Modals**: Added a "Try" button on edit and create tool modals, allowing users to test tools immediately.

- **Mobile Support Tuning**: Improved mobile support for better accessibility on various devices.

- **Updated Logos**: Refreshed the Google and Skydeck logos for a modern look.

- **WebSocket Retry Mechanism**: Implemented a retry mechanism for WebSocket connections of up to 30 minutes, enhancing connectivity.

### Improvements

- **Improved Message Sending UX**: Enhanced user experience when sending messages that take longer to process.

- **Account Settings UI**: Updated the account settings interface for better usability.

### Bug Fixes

- **Markdown Parsing Fix**: Resolved an issue where the app could crash when parsing markdown code blocks with undefined content.

- **Message Editing Resolved**: Fixed a problem that prevented users from editing messages due to code merging issues.

- **Expired Tool Image Fix**: Corrected an issue where tool images would expire improperly.

## Control Center

### New Features

- **Microsoft Sign-In Support**: Added the ability to sign in using your Microsoft account, providing a convenient and secure authentication option.

- **Enhanced Tool Creation**: Introduced the capability to create blank tools, allowing for more customization and flexibility in tool development.

- **SMS Verification Management**: Implemented SMS code management and user SMS verification for improved account security.

- **Expanded Tool Context**: Tools can now include documents and images in their context, enriching the information available during tool use.

- **Optimized Conversation Titles**: Conversation titles are now generated by the language model only when they are empty, keeping your workspace organized.

- **Admin Role Management**: Admins can now set other members as admins, and owners can transfer ownership to admins without approval, streamlining team management.

- **Consistent Password Setting Page**: The "Set Password" page now matches the style of the Sign-In and Sign-Up pages for a consistent user experience.

### Bug Fixes

- **Image Upload Issue Resolved**: Fixed an issue where images exceeding the allowed size could not be uploaded.

- **Streaming Disabled for Specific Models**: Addressed a bug that caused streaming issues with certain models.

- **User Deletion Handling**: GenStudio now redirects to the login page if a user has been deleted or revoked, ensuring proper session management.

==> releases/README.md <==
---
description: Public Declarations, Compliance Alterations, and User Assistance Updates.
---

# Releases

© 2023 SkyDeck AI Inc.


==> releases/sep-6th-2024.md <==
---
description: >-
  This release focuses on enhancing snapshot management in GenStudio and improving admin role management and messaging reliability in Control Center.
---

# Sep 6th, 2024

## GenStudio

### Improvements

- **Enhanced Snapshot Management Modal**: The snapshot management interface has been updated for a more user-friendly experience when managing snapshots.
- **Improved Snapshot Titles**: Snapshot titles have been refined for better clarity and organization.

## Control Center

### Improvements

- **Enhanced Admin Role Management**: Admins can now manage user roles more effectively, improving access control and permissions.
- **Improved Messaging Reliability**: The system now better handles concurrent message streams to prevent errors and enhance performance.

==> releases/aug-9th-2024.md <==
---
description: >-
  This release brings username/password logins and mobile-friendly snapshots to
  GenStudio. Control Center now supports email logins, email verification, and
  reCAPTCHA for improved security.
---

# Aug 9th, 2024

## GenStudio

### New Features

* **Username/Password Login:** You can now log in using your username and password for a simpler sign-in process.
* **Password Reset:** Easily reset your password if you forget it, making account recovery more convenient.
* **File Uploads to S3:** Upload your files directly to S3 for improved storage and management.
* **Groq Integration:** Integrate with Groq to enhance system capabilities.

### Improvements

* **Snapshot UI for Mobile:** Enjoy a better snapshot viewing experience on mobile devices.
* **Padding Update:** Updated padding for snapshot content to enhance the visual experience.
* **Logo Rendering:** Fixed issues with logo rendering for a more polished look.
* **Uploaded Files:** You can now view uploaded files directly within the platform.
* **SMS Verification Not Required:** Signing in to GenStudio no longer requires SMS verification, simplifying the process.

### Bug Fixes

* **Rememberizer Integration:** Fixed an issue where the Rememberizer integration failed to reconnect.

## Control Center

### New Features

* **Email/Password Login:** Control Center users can now sign up and log in using their email and password, with SMS verification for added security.
* **Email Verification:** Added email verification to ensure secure account setups.
* **reCAPTCHA Integration:** Added reCAPTCHA to authentication pages and the Forgot Password page to enhance security.


==> releases/sep-8th-2023.md <==
---
description: >-
  Introducing the first release of SkyDeck.ai, equipped with enhanced features,
  improvements, and bug fixes for a more intuitive, customizable, and efficient
  AI productivity experience.
---

# Sep 8th 2023

## GenStudio

### New Features

* **SkyDeck.ai Text Update**: The SkyDeck.ai text has been updated for better clarity.
* **Multiple Choice Variable Format**: Support for multiple choice variable format has been added, increasing the flexibility for data inputs.
* **Image Rendering**: We've improved our system to render images right away when receiving a response, speeding up the display process.

### Improvements

* **Theme Colors and Text Update**: We've updated the theme colors and fetched new text for a more coherent visual experience. Also, we've ensured the consistent use of sign-in, sign-up, sign-out text throughout the platform.
* **Favicon Fix**: Fixed an issue with the favicon for pages ending with "/".

### Bug Fixes

* **Broken Image Display**: Solved an issue where images would not display when they were expired or broken, enhancing the visual experience.
* **List Display in GenStudio**: Fixed an issue where the display of lists was broken in GenStudio.

## Control Center

### New Features

* **Language Selection**: We've added a language selection feature to the Control Center, providing a more user-friendly experience for non-English speakers.
* **Control Center Customization**: We've now allowed for customization of the Control Center's Sign in and Sign up pages for a more personalized experience.

### Improvements

* **CSV Upload**: Spaces in emails and names are now automatically stripped when uploading a CSV file of members, ensuring better data consistency.
* **Password Validation**: We've updated the password validation to be more inclusive of symbol characters.
* **Logo Update**: Users can now upload logos with larger file sizes, and we've also changed the logo format to .png for better quality. Company logo in emails has also been enlarged for better visibility.
* **Sign up Page**: A new sign-up page has been implemented for a smoother onboarding process.
* **Onboarding Enhancement**: We've made improvements to the onboarding process for new users, making it easier and more intuitive.
* **Assets Optimization**: Assets used in Sign in and Sign up pages have been optimized for faster load times.

### Bug Fixes

* **Case Insensitive Emails**: Emails for login and reset password functionality are now case insensitive, avoiding confusion for users.
* **Key Error in JSON Format**: Fixed a key error issue in the conversion of old JSON format.
* **Menu Sidebar**: Fixed a bug where the menu sidebar was not appearing.
* **Responsive UI**: Fixed console errors on Sign in, Sign up pages, and improved responsive design for the Control Center.


==> releases/nov-1st-2024.md <==
---
description: >-
  This release enhances search capabilities, introduces new collaboration features, and includes important bug fixes to improve the overall user experience in GenStudio and Control Center.
---
# Nov 1st, 2024
## GenStudio
### New Features
- **Countdown Feature**: Added a countdown feature to enhance time management during tasks.

### Improvements
- **Optimized Conversation Search**: Improved the performance of conversation search requests for faster results.

### Bug Fixes
- **Conversation Name Update in Breadcrumb**: Fixed an issue where the conversation name in the breadcrumb did not update after renaming.
- **Safari Browser Compatibility**: Corrected the positioning of dialog boxes on Safari for a better user experience.
- **Chat Box Truncation Issue**: Resolved issues where text was being truncated in the conversation chat box.
- **Conversation Deletion UI Update**: Deleting a conversation now correctly updates the user interface.
- **Conversation List Loading on Tall Monitors**: Fixed loading issues of the conversation list on tall monitors.
- **Duplicate Connection Notifications**: Prevented multiple connection success toast notifications for a cleaner interface.
- **Enhanced Message Rendering**: Improved message rendering to exclude ending tags from URL-highlighted text.

## Control Center
### New Features
- **Conversation Search by Collaborator Names**: Users can now search conversations using collaborators' names, making it easier to find relevant discussions.
- **Full-Text Search Within Conversations**: Introduced full-text search within conversation messages, allowing users to search message content directly.
- **Member List Sorting**: Added the ability to sort member lists for easier management and organization.

### Improvements
- **Optimized CSA Conversation Handling**: CSA conversations are now only created for signed-in GenStudio users, enhancing conversation management.

### Bug Fixes
- **Transfer Ownership Button Access**: Resolved an issue where the transfer ownership button was not enabled for the owner.
- **Duplicate CSA Conversations**: Fixed an issue where CSA conversations were being duplicated.
- **Conversation Deletion Stability**: Addressed a race condition bug when deleting a conversation to improve stability.
- **Enhanced Error Handling**: Improved handling of streaming errors for increased reliability.
- **Restored Missing Functions**: Fixed issues caused by missing functions to ensure features work as intended.


==> releases/nov-15th-2024.md <==
---
description: >-
    This release focuses on performance enhancements, new features, and bug fixes to improve your overall experience with GenStudio and Control Center.
---

# Nov 15th, 2024

## GenStudio

### New Features

- **Resizable Sidebars**: Users can now resize sidebars for a customized workspace layout.
- **Stop Collaboration Conversation Button**: Added a button to end collaborative conversations, giving users more control.
- **Sorting by Similarity**: Implemented the option to sort items by similarity for more relevant results.

### Improvements

- **Enhanced UI for Filters Bar**: Improved the user interface for conversation and tool filters for better usability.

### Bug Fixes

- **Fixed Double Scroll Bar**: Resolved an issue where a double scroll bar would appear.
- **Fixed Collapsible Section Titles**: Corrected default titles in collapsible sections to improve navigation.

## Control Center

### New Features

- **Sorting by Similarity**: Introduced the ability to sort results by similarity, enhancing the relevance of your searches.
- **Account Ownership Claims**: Added account ownership claim messages to the Members Page and Homepage, improving account management transparency.

### Improvements

- **Enhanced Embedding Performance**: Improved the performance of embeddings for faster and more efficient data processing.
- **New Blank Tool Supports All Models**: The new blank tool now supports all models by default, offering greater flexibility.
- **Popular Domain Support**: Streamlined domain usage by focusing on the most popular top-level domains.
- **Filtered User Authentication**: User authentication attempts are now filtered by email for increased security.
- **Updated Wording on Embedding Tab**: Revised wording on the embedding tab for better clarity.
- **Verified Business Info in Signup Emails**: Signup email alerts now include information about verified businesses.

### Bug Fixes

- **Fixed Invitation Status Handling**: Resolved an issue where invitation status was incorrectly set when a member role did not exist.
- **Replaced Invalid Symbols in Tags**: Corrected tags by replacing invalid symbols to prevent errors.
- **Limited Search Characters**: Limited the number of characters in search queries to improve reliability.
- **Fixed Invitation Status for Owners/Admins**: Corrected the display of invitation status for owners and administrators.


==> releases/nov-6th-2023.md <==
---
description: >-
  Welcome to our updated platform! We've added new features, made improvements,
  and fixed bugs for a seamless and efficient experience. Let's explore what's
  new.
---

# 6th November 2023

## GenStudio

### **New Features**

* **Share to Slack**: Collaboration just became easier! You can now share content directly to Slack from our platform.
* **Additional Languages**: We've expanded our language support! GenStudio now supports 10 additional languages, allowing for a more inclusive user experience.

### **Improvements**

* **Image Display**: To provide a better viewing experience, we've added a maximum width limit for generated images.
* **Sign-in and Sign-up Pages UI**: We've made the spaces between FA sign-in and sign-up pages consistent and also changed the email field icon for a more intuitive user interface.
* **Re-share Collaborative URL**: You can now re-share collaborative URLs, making team collaboration more efficient.

### **Bug Fixes**

* **Unauthorized Okta User Error Message**: We've improved the error message displayed for unauthorized Okta users for better clarity.
* **Logout Flow**: Fixed a bug where setting the locale cookie prevented the logout flow. You should now be able to log out smoothly.
* **Deleting Active Conversations**: We've fixed the issue where deleting active conversations was problematic. You can now manage your conversations more efficiently.
* **Message Deletion**: Deleting a message no longer causes all messages of the conversation to appear in the "unread" state.

## Control Center

### **New Features**

* **Streaming Response**: Responses are now streamed in real-time, providing consistent and live updates.
* **Addition of 10 New Languages**: Control Center now supports 10 new languages, making it even more user-friendly and accessible.

### **Improvements**

* **Okta Integration**: We've enhanced our Okta integration capabilities, providing a more secure and streamlined user experience.

### **Bug Fixes**

* **Access to Private Pages in Control Center**: We've fixed an issue where unauthenticated requests could access some private pages in Control Center.
* **Email Authentication Toggle**: Users can now turn off email authentication in Control Center as expected.


==> releases/jun-21st-2024.md <==
---
description: >-
  We’re excited to bring you our latest updates, featuring conversation sorting
  and size display in GenStudio. Various bug fixes and improvements included.
---

# Jun 21, 2024

## GenStudio

### New Features

* **Conversation Sorting**: Easily organize your conversations with the new sorting feature.
* **Conversation Size in Sidebar**: View the size of each conversation directly in the sidebar for better management.

### Improvements

* **Tool Serialization Update**: Improved tool serialization to enhance functionality.
* **Dependency Updates**: Updated LiteLLM and OpenAI dependencies to the latest versions for better stability and performance.


==> releases/sep-13th-2024.md <==
---
description: >-
  This release introduces new features and improvements to enhance data security, improve user experience, and provide better tools for account and data management.
---

# Sep 13th, 2024

## GenStudio

### New Features

- **Snapshot Management Modal**: Introduced a snapshot management modal for collaborative users to improve workflow.

### Improvements

- **Meta Tags for Public Snapshots**: Added meta tags to public snapshots for better SEO and easier sharing.
- **DLP Validation Flow**: Implemented a new DLP validation flow for enhanced security.
- **Markdown Formatting**: Improved formatting of user-submitted Markdown content for better readability.
- **Expand/Collapse Long Messages**: Added an expand/collapse feature for long user messages in snapshots to improve usability.
- **Free Trial Countdown Clarity**: Enhanced the free trial countdown clock for improved clarity.

### Bug Fixes

- **Markdown Parsing Errors**: Fixed parsing errors when HTML is included in Markdown in user messages.
- **Breadcrumb Update Issue**: Resolved an issue where changing conversations didn't update breadcrumbs.

## Control Center

### New Features

- **Tag Support in CSV Uploads**: Added support for tagging members when uploading CSV files to enhance member organization.
- **Export Members to CSV**: Introduced the ability to export members to CSV, simplifying data management.
- **Admin Password Reset**: Enabled owners and administrators to reset passwords for better account management.

### Improvements

- **Enhanced DLP Processing**: Increased maximum word length for Data Loss Prevention (DLP), allowing users to process larger documents securely.
- **Improved Snapshot Management**: Refined snapshot management permissions for better control over user access.
- **New DLP Validation Flow**: Implemented a new DLP validation flow for enhanced data security.
- **Enhanced Onboarding Experience**: Improved user onboarding by redirecting new sign-ups to GenStudio with helpful links.
- **Translation Feature Enhancement**: Enhanced translation features with rerun capabilities for better multilingual support.

### Bug Fixes

- **Duplicate Collaboration Members**: Fixed an issue where collaboration members were duplicated in the same conversation.
- **Admin Role Isolation**: Resolved role isolation issues for admin users to ensure proper access controls.
- **Account Security Improvement**: Removed verified emails from old admin records to enhance account security.

==> releases/sep-18th-2023.md <==
---
description: >-
  Welcome to our first major features update for both Control Center and
  GenStudio. This update brings you new features, improvements, and bug fixes to
  enhance your experience.
---

# Sep 18th 2023

## GenStudio

### New Features

* **Data Loss Prevention**: A new feature has been introduced to prevent the loss of conversation data (only Advanced plan).
* **Rapid Onboarding**: A new trial modal has been implemented to help you get onboard faster.
* **Sign Out from All Tabs**: This new feature allows you to sign out from all tabs at once, saving you time and effort.
* **Subdomain Improvement**: The subdomain input field on the sign-in page has been improved for a better user experience.

### Bug Fixes

* **Grammar Correction**: We've corrected a grammatical error to improve the clarity of our content.

## Control Center

### New Features

* **Access Control**: Owners can now revoke access for team members, providing more control over team management.
* **Setup Guide**: A separate page has been created for the Setup Guide to help you get started more easily.
* **French Translation**: The Billing & Payment section now supports French language for easier understanding.
* **Member Seats Information**: We've added more details about 'seats' on the Members page to give you a better understanding of your team structure.

### Bug Fixes

* **Data Accuracy**: We've fixed an issue that was causing duplicate data entries to provide you with more accurate information.


==> releases/oct-11th-2024.md <==
---
description: >-
  This release focuses on enhancing collaboration and conversation experiences,
  introducing message editing capabilities, and improving the user interface for
  a more seamless experience.
---

# Oct 11th, 2024

## GenStudio

### Improvements

* **Enhanced LaTeX Rendering**: Improved the display of LaTeX in code blocks for clearer mathematical expressions.
* **Consistent Set Password Page Design**: Updated the "Set Password" page to match the sign-in/sign-up pages for a uniform experience.
* **Collapsible Conversation Bar**: Added collapse functionality to the conversation bar to maximize workspace area.

### New Features

* **Scroll to Top Button**: Introduced a button to quickly scroll to the top in conversations for easier navigation.
* **Message Editing**: Enabled users to edit their messages, allowing corrections and updates.
* **Markdown Support in Tool Inputs**: Added support for Markdown formatting in tool inputs for enhanced content creation.

### Bug Fixes

* **Safari Copy Conversation Fix**: Resolved an issue that prevented copying conversations in Safari.

## Control Center

### Improvements

* **Unified Workspace for Admins**: Admins with the same email domain are now grouped into a single workspace, simplifying collaboration.
* **Capped Conversation Names**: Limited the length of conversation names created from CSA for better readability.

### New Features

* **User Type Targeting in Conversations**: CSA admins can now target conversations to specific user types (admin/owner or regular member) for more relevant content delivery.
* **Welcome to SkyDeck Conversation**: Added a welcome conversation to guide new users through SkyDeck features.&#x20;
* **Message Editing**: Enabled message editing capabilities, enhancing communication flexibility for users.

### Bug Fixes

* **System Message URL Preview Update**: Corrected the display of URLs in system messages for accurate link previews.
* **Migration Conflict Resolutions**: Fixed database migration conflicts to ensure system stability.
* **Task Execution Improvement**: Improved task processing by cleaning up connections before and after running tasks.


==> releases/jul-12th-2024.md <==
---
description: >-
  We're excited to bring you our latest updates, featuring enhanced Rememberizer
  and document/image uploads in GenStudio. Both GenStudio and Control Center now
  have a new authentication system.
---

# Jul 12th, 2024

## GenStudio

### New Features

* **Upload Documents in Conversations**: Easily upload and view various document file types directly within your GenStudio conversation history.
* **Image Upload Functionality**: Now you can upload images through the chat completion API, enhancing your visual communication.
* **New Authentication System:** We have replaced the old FusionAuth system with a new, more secure, and efficient authentication system.

### Improvements&#x20;

* **Enhanced Rememberizer Integration:** Experience a smoother Rememberizer integration flow, making your tasks more efficient.
* **Quick Action Links**: After onboarding, quickly access essential links to get started faster.
* **Revamped Sign-In/Sign-Up Pages**: Enjoy a more user-friendly sign-in and sign-up experience with updated pages.
* **Non-AI Mentions Update**: Improved handling and display of non-AI mentions within the conversations.

### Bug Fixes

* **Rememberizer Integration View:** Addressed a bug in the Rememberizer integration view to ensure smooth functionality.
* **File Display in Conversations**: Limited the max-width for file items to ensure better display in conversation history.
* **Prevent Multiple Clicks**: Prevented users from clicking the Confirm button multiple times in the confirmation modal to avoid duplicate actions.
* **Size Limit Error Handling**: Improved error handling for file uploads that exceed size limits.
* **Uninvited User Error**: Updated error messages and other stylings for uninvited users.

## Control Center

### New Features

* **New Authentication System**: We've replaced the old FusionAuth system with a new, more secure and efficient authentication system.


==> releases/jun-28th-2024.md <==
---
description: >-
  We’re excited to bring you our latest updates, featuring a new ADMIN role in
  the Control Center and simplified access for admins. Various bug fixes enhance
  your experience.
---

# Jun 28th, 2024

## GenStudio

### Bug Fixes

* **Collaboration Messages Avatar Color**: Resolved an issue where collaboration messages displayed the wrong avatar color in conversations.
* **Edit Modal Title Reload**: Fixed a bug where the title would incorrectly reload in the edit modal.

## Control Center

### New Features

* **ADMIN Role**: We've added a new ADMIN role, providing enhanced control and management capabilities.

### Improvements

* **Removed Email Verification for Admins**: Admins no longer need to go through email verification, simplifying access and management.


==> releases/jul-5th-2024.md <==
---
description: >-
  We’re excited to bring you our latest updates, featuring non-AI content
  submission and @ mentions in GenStudio. Trial accounts can now invite up to 5
  users. Bug fixes included.
---

# Jul 5th, 2024

## GenStudio

### New Features

* **Non-AI Content Submission**: You can now submit non-AI content within GenStudio, making it easier to include diverse types of information in your conversations.
* **@ Mentions Support**: Easily mention other users within your conversations for better collaboration and communication.

### Bug Fixes

* **Rememberizer Integration Email**: Fixed an issue where the Rememberizer integration email text would over-scroll on mouse hover.
* **Bottom Elements Overlap**: Fixed an issue with the z-index of bottom elements to ensure they display correctly.


==> notices/cookie-notice.md <==
---
description: As of July 20, 2023
---

# Cookie Notice

Notice of Cookie Use While you engage with SkyDeck AI Inc.'s websites and applications (collectively referred to as "**Sites**"), our data processing platform goods and services ("**Platform Services**") and our regular business operations, including events, sales, and marketing (collectively referred to as "**SkyDeck Services**"), we utilize automated data collection tools such as Cookies, Web Beacons, and other identifiers for the reasons detailed below.

"**Cookies**" are small text files downloaded onto your hard drive by a web server when you visit our Sites or use our Services. These cookies may either be first party cookies (set by us) or third party cookies (set by others), with several types (explained in the subsequent table).

"**Web beacons**" (also known as web bugs, pixel tags, or clear GIFs) are small graphics with a unique identifier, used on our Sites and Services for various purposes. These include delivering or communicating with cookies, tracking and measuring the performance of our Sites and Services, and monitoring the number of visitors on our Sites and Services. Unlike cookies, which are stored on the user’s hard drive, web beacons are typically embedded invisibly on web pages (or in an email).

**What types of cookies are used and what is their function?**

The following provides a representative but non-exhaustive overview of the cookies we might use:

**Cookie Types**

**Essential Cookies** These are necessary for certain features of our Sites and Services, and cannot be disabled in our systems. They are usually activated in response to actions taken by you, such as setting your privacy preferences, logging in, or filling out forms. If you block or alert these cookies on your browser, certain parts of the site may not function properly.

**Performance Cookies** These help us count visits and identify traffic sources, enabling us to enhance the performance of our site. They assist us in identifying the most and least visited pages and understanding visitor behavior on the site.

**Functionality Cookies** These enable our Sites and Services to offer improved functionality and personalization. They may be set by us or third-party providers whose services we have integrated into our pages. If these cookies are blocked, some or all of these services may not work properly.

**Advertising Cookies** These may be set through our Sites by our advertising partners. They can be used by these third parties to create a profile of your interests and display relevant ads on other sites. If these cookies are blocked, you might see less personalized advertising.

**What other identifiers are used and what is their function?**

Some of our Sites utilize Google Analytics, a web analytics service offered by Google, Inc. Google Analytics uses cookies to help us understand how users interact with our Sites. The data gathered by the cookies regarding your usage of our Sites (including your IP address) and collected through Google Analytics ("Google Analytics Data") may be transferred to and stored by Google on servers in the United States. Google utilizes the Google Analytics Data on behalf of SkyDeck AI Inc. to evaluate your usage of our Sites, compile reports for us on website activity, and offer other services relating to website activity and internet usage. Google may also use the collected Google Analytics Data to contextualize and personalize the ads of its own advertising network. You can opt out of Google’s collection and use of the Google Analytics Data by downloading and installing the browser plug-in available at [https://tools.google.com/dlpage/gaoptout](https://tools.google.com/dlpage/gaoptout).

If you have further inquiries, please see our [Privacy Policy](privacy-policy.md) or contact us at legal@skydeck.ai.



==> notices/README.md <==
---
description: Legal, Regulatory, and Customer Support Notices
cover: >-
  https://images.unsplash.com/photo-1526958097901-5e6d742d3371?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw1fHxoZWxwfGVufDB8fHx8MTY5MDIwMTI2NXww&ixlib=rb-4.0.3&q=85
coverY: 0
---

# Introduction



© 2023 SkyDeck AI Inc.


==> notices/terms-of-use.md <==
---
description: As of July 22, 2023
---

# Terms of Use

### 1. Introduction

This document outlines the terms of use ("Terms") for SkyDeck.ai, including our administrative tools at admin.skydeck.ai and the GenStudio tools provided to the user in a custom or generally available domain within \*.skydeck.ai and any other pages that link to these Terms (the "Sites"). These Terms constitute a binding legal agreement between you, as the user, and SkyDeck AI Inc. ("SkyDeckAI"), as the provider of this platform. By accessing or using this platform, you affirm your agreement to abide by these Terms.

### 2. Acceptance of Terms

By accessing or using any part of the Sites, you confirm that you are at least 18 years old, have read and understood these Terms of Use and the SkyDeckAI Privacy Policy (which is incorporated into these Terms by reference), and agree to be legally bound by them.

In these Terms, "we," "us," and "our" refer to SkyDeckAI, while "you" refers to both you as an individual and any entity you represent. By using our platform, you confirm that you can accept these Terms on behalf of any such entity, thereby binding it to these Terms.

### 3. Contact Information

SkyDeck AI Inc. is the entity you are contracting with. Our mailing address and contact information are as follows:

SkyDeck AI Inc.\
548 Market St. PMB38234\
San Francisco, CA 94104\
Phone: 1.415.744.1557\
For legal inquiries: [legal@skydeck.ai](mailto:legal@skydeck.ai)

### 4. License Grant and Proprietary Rights

Subject to your full compliance with these Terms, any other policies or restrictions posted on the platform, and your timely payment of any fees agreed upon with SkyDeckAI, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the platform.

Unless otherwise noted, all content made available through the platform (including but not limited to software, submissions, information, user interfaces, graphics, trademarks, logos, images, artwork, videos, documents, and the overall "look and feel" of the platform) is owned, controlled, or licensed by or to SkyDeckAI. This content is protected by various laws including trade dress, copyright, patent and trademark laws, and other intellectual property rights and unfair competition laws. SkyDeckAI reserves all rights in and to this content.

Any unauthorized reproduction, redistribution, use, or exploitation of any part of the platform is expressly prohibited by law and may result in civil or criminal penalties.

### 5. Account Responsibility

If you open an account on the platform, you are responsible for maintaining the confidentiality of your account information and for all activity under your account. By accepting these Terms and creating an account, you agree to our collection, use, and disclosure of your information as described in the Privacy Policy. No one under age 18 may register for an account or provide any personal information to SkyDeckAI or the platform. Notify SkyDeckAI immediately of any unauthorized account use. You may be held liable for losses due to unauthorized use. Do not use anyone else’s account without pre-approval from SkyDeckAI Account registration is void where prohibited.

### 6. User Rights and Responsibilities

As a user, you have the right to use our AI tools for your legitimate business purposes. You are responsible for not misusing or abusing the tools, infringing on others' rights, or violating any laws. You are required to comply with all applicable laws and regulations in your use of the platform.

### 7. Provider Rights and Responsibilities

We, SkyDeckAI., reserve the right to monitor use, enforce these Terms, and update the platform and its terms as needed. We are responsible for providing a reliable service, respecting users' privacy, and responding to any issues or concerns.

### 8. Content Rules

Content generated by our AI tools is owned by you, the user, subject to any restrictions or conditions specified in these Terms. The content should not be used for illegal or inappropriate purposes.

### 9. Misuse and Breach

Misuse or breach of these Terms can result in penalties, including but not limited to, suspension or termination of access to the platform, legal action, and/or damages.

### 10. Disclaimer of Warranties

You agree that your use of the platform, including any content, is at your sole risk. The platform and content are provided on an “as is” and “as available” basis. SkyDeckAI makes no warranties, express or implied, and disclaims all possible warranties, including without limitation implied warranties of merchantability, fitness for a particular purpose, title and non-infringement. SkyDeckAI does not warrant that the platform or content are accurate, continuously available, complete, reliable, secure, current, error-free, or free of viruses or other harmful components.

### 11. Indemnification

You agree to indemnify, defend, and hold harmless SkyDeckAI, its officers, directors, shareholders, successors, employees, agents, subsidiaries, and affiliates, from any actual or threatened third-party claims, demands, losses, damages, costs, liability, proceedings, and expenses (including reasonable attorneys' and expert fees and costs of investigation), to the fullest extent permitted by law. This includes any issues arising out of or in connection with your use of the platform, your breach of these Terms, your violation of any law or regulation, your violation of any third-party rights, or the disclosure, solicitation, or use of any personal information by you, whether with or without your knowledge or consent. SkyDeckAI reserves the right to assume exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with SkyDeckAI's defense of such a claim. You may not agree to any settlement affecting SkyDeckAI. without SkyDeckAI's prior written consent.

### 12. Suspension or Termination of Access

SkyDeckAI reserves the right to suspend or terminate your access to any or all of the platform, with or without notice, for any reason. This includes but is not limited to breaches of these Terms, requests by law enforcement or other government agencies, discontinuation or significant modification of the platform, or unexpected technical issues. SkyDeckAI is not liable for any termination of your access to the platform. Any rights and obligations under these Terms that should naturally continue beyond your use of the platform will survive any termination of your access.

### 13. Limitation of Liability

To the maximum extent permitted by law, you agree to bear the entire risk arising out of your access to and use of the platform and content. SkyDeckAI or any of its directors, employees, agents or suppliers will not be liable for any special, indirect, incidental, exemplary, consequential or punitive damages of any kind arising out of or in connection with the platform, and any content, services or products included on or otherwise made available through the platform. SkyDeckAI's total cumulative liability to you arising out of or in connection with these Terms, or from the use of or inability to use the platform, will not exceed one hundred dollars ($100.00).

### 14. Dispute Resolution

Any disputes, controversies, or claims arising out of or in connection with these Terms, including their validity, invalidity, breach, or termination, shall be resolved by arbitration in accordance with the rules of the American Arbitration Association. The place of arbitration shall be San Jose, California, and the proceedings shall be governed by the laws of California. The arbitration award shall be final and binding upon both parties.

### 15. Changes to the Terms

SkyDeckAI reserves the right, at our discretion, to change these Terms at any time. Changes will be communicated to users through appropriate channels, such as email notifications, website banners, or in-app messages, and users will be given a reasonable period of time to accept the new terms.

### 16. Translations

For your convenience we provide machine translations of this document in languages other than English. At any time when there is a conflict or contradiction between the original English language version and a version in another language, the English language version will apply and prevail. By relying on a non-English translation of this document you accept that there could be unintended differences between the translated text and the actual terms to which you have agreed.


==> notices/privacy-policy.md <==
---
description: As of July 20, 2023
---

# Privacy Policy

## SkyDeck AI Inc. Privacy Policy

SkyDeck AI Inc. ("SkyDeck AI," "we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you use the SkyDeck.ai generative AI platform (our "Service") and our practices for collecting, using, maintaining, protecting, and disclosing that information.

### Information We Collect About You and How We Collect It

We collect several types of information from and about users of our Service, including:

* Personal information, such as your name, email address, and other identifiers by which you may be contacted online or offline.
* Technical data, such as information about your internet connection, the equipment you use to access our Service, and usage details.
* API keys and credentials for accessing third-party vendor generative AI models provisioned by you.

We collect this information:

* Directly from you when you provide it to us.
* Automatically as you navigate through the Service. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.

### How We Use Your Information

We use information that we collect about you or that you provide to us, including any personal information:

* To provide you with the Service and its contents, and any other information, products or services that you request from us.
* To fulfill any other purpose for which you provide it.
* To provide you with notices about your account.
* To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.
* To notify you about changes to our Service or any products or services we offer or provide through it.
* To improve our Service, products, or services.
* To allow you to participate in interactive features on our Service.

### Disclosure of Your Information

We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:

* To third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
* To fulfill the purpose for which you provide it. For any other purpose disclosed by us when you provide the information.
* With your consent.

### Your Rights

You have certain rights under applicable data protection laws. These may include the right to:

* Request access to your personal data.
* Request correction of the personal data that we hold about you.
* Request erasure of your personal data.
* Object to processing of your personal data.
* Request restriction of processing your personal data.
* Request transfer of your personal data.
* Right to withdraw consent.

### Data Security

We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions and API keys will be encrypted using SSL technology.

### Changes to Our Privacy Policy

It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Service home page.

### Contact Information

To ask questions or comment about this privacy policy and our privacy practices, contact us at:

SkyDeck AI Inc.\
548 Market St. PMB38234\
San Francisco, CA 94104\
Phone: 1.415.744.1557\
Email: [legal@skydeck.ai](mailto:legal@skydeck.ai)


==> use-cases/creating-a-privacy-policy.md <==
---
description: A business and legal use case using Strategy Consultant
---

# Creating a Privacy Policy

{% hint style="info" %}
**Professional Services:** there are many complex issues that require the expertise of domain specialists or other professionals such as lawyers. Instead of waiting for access to these experts you can get a head start by using SkyDeck.ai GenStudio tools to write an initial draft or proposal that looks like a finished product. Shared with professionals, this can serve as a starting point for discussion, saving time and money. Or kept to yourself, this can serve as a way for you to be highly prepared before you engage with an expert.
{% endhint %}

## Strategy Consultant: Creating Legal Notices

The following conversation with the Strategy Consultant shows how you can use this tool to create a Privacy Policy from scratch that is compliant with European and U.S. privacy regulations. \
\
What we enter into the tool appears in _`italics and blocks`_.  The rest is produced by the Strategy Consultant tool and GenStudio using OpenAI GPT-4.

Strategy Consultant

Your questions or prompts: \
\
_`Help me develop a privacy policy for my generative AI platform for business users.`_

## Thoughts Decomposition:

1. What is the purpose and scope of the generative AI platform?
2. What type of data will the AI platform collect?
3. How will the collected data be used?
4. How will the data be stored and protected?
5. What are the user's rights regarding their data?
6. How will the platform comply with data protection laws?

## Thoughts Generation:

1. The generative AI platform allows businesses to generate AI models for various purposes such as data analysis, prediction, or automation.
2. The platform may collect data such as user information, user interaction with the platform, generated models and their outputs, and other usage data.
3. The collected data will be used for improving the platform, providing personalized service, troubleshooting, and potentially for research and development.
4. The data will be stored securely with encryption and access controls. Regular audits and security measures will be employed to protect the data.
5. The users have the right to access their data, correct inaccuracies, delete their data, and withdraw their consent at any time.
6. The platform will comply with data protection laws by informing users of the data collection and usage, obtaining consent when necessary, and providing mechanisms for users to exercise their rights.

## I want to know more about:

1. Do you have any specific data protection laws or regulations in mind that the platform needs to comply with?
2. Are there any specific types of data that the platform will collect or any specific ways in which the data will be used that haven't been mentioned already?
3. Will the data be shared with any third parties? If so, under what circumstances?
4. Do you have any specific data security measures in mind that the platform should implement?

_`We should comply with General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). The platform will additionally collect api keys and credential for access to third party vendor generative AI models for which customers have signed up. Data will be shared with the third party vendors that customers provision on our system. We may also share some data with outside services to support user requests such as urls submitted to direct scraping and ingestion into generative AI models. Site usage data may also be shared anonymously with analytics vendors such as Google to understand customer usage and help improve our product's design. The platform supports the ability for customers to completely delete their entire account and all associated information.`_

## Thoughts Decomposition:

Given the new information, let's decompose the thoughts again:

1. How will the platform comply with GDPR and CCPA?
2. How will the platform handle API keys and credentials for third-party vendors?
3. Under what circumstances and with whom will the data be shared?
4. How will the platform ensure anonymity when sharing data with analytics vendors?
5. How will the platform handle account deletion and data removal?

## Thoughts Generation:

1. To comply with GDPR, the platform will provide clear information about data collection and usage, obtain explicit consent before collecting personal data, allow users to access, correct, and delete their data, and implement data protection measures. For CCPA compliance, the platform will inform users about the categories of personal information to be collected, the purposes for which these categories will be used, and provide a "Do Not Sell My Personal Information" link to users.
2. API keys and credentials for third-party vendors will be stored securely with encryption, and will only be used for the purpose of providing the service requested by the user. These credentials will not be shared with any other parties without the explicit consent of the user.
3. Data will be shared with third-party vendors as provisioned by customers, and with outside services for specific user requests. The platform will inform users about these data sharing practices and obtain consent where necessary.
4. When sharing data with analytics vendors, all personally identifiable information will be removed or anonymized to protect user privacy.
5. The platform will provide a mechanism for users to completely delete their account and all associated information. This process will include deleting all stored data, including API keys and credentials, user information, and generated AI models.

## I want to know more about:

1. How are you planning to inform users about your data collection, usage, and sharing practices?
2. How will you obtain consent from users for data collection and sharing?
3. Can you provide more details on the "Do Not Sell My Personal Information" link for CCPA compliance?
4. What steps will the platform take to ensure that all user data is completely deleted upon account deletion?

_`We will inform users about our data collection, usage, and sharing practices through a web page that contains our privacy policy with a link to that page in our footer and our sign up page. 2. We will obtain consent for users for data collection and sharing by asking them to positively check a box which is not checked by default. The user will receive a confirmation of this approval in email when possible. 3. The "Do Not Sell My Personal Information" link will describe the data that will not be sold. It will provide a button to press to turn activate this request. When possible users will receive an email confirmation of this request. And the request will remain active for at least one year.`_

## Thoughts Decomposition:

With the new information, let's decompose the thoughts again:

1. How will the platform ensure that the privacy policy is easily accessible to the users?
2. How will the platform implement the user consent mechanism?
3. How will the "Do Not Sell My Personal Information" link work?
4. How will the platform handle consent withdrawal and the activation of the "Do Not Sell My Personal Information" request?

## Thoughts Generation:

1. The platform will keep the privacy policy visible and easily accessible by placing a link to it in the footer and on the sign-up page. The privacy policy will be written in clear, plain language so that users can understand how their data is collected, used, and shared.
2. The platform will implement a user consent mechanism where users have to actively check a box to give consent. This box will not be checked by default, ensuring that consent is given actively and not passively. Users will receive an email confirmation of their consent when possible.
3. The "Do Not Sell My Personal Information" link will provide information about what data is not sold and will provide a button for users to activate this request. Users will receive an email confirmation of this request when possible, and the request will remain active for at least one year.
4. The platform will honor consent withdrawals and activations of the "Do Not Sell My Personal Information" request promptly. Users will have the ability to change their consent status at any time, and the platform will reflect these changes in its data handling practices.

## Thoughts Evaluation:

The strategy seems to cover all important aspects of a privacy policy for a generative AI platform. It considers the nature of the platform, the type of data collected, user rights, and compliance with GDPR and CCPA.

## Search Algorithm:

The most promising thought to pursue would be to create a draft of the privacy policy based on the generated thoughts and information provided.

## Examples:

Here's a potential starting point for your privacy policy:

"Our generative AI platform is committed to protecting your privacy and handling your data in an open and transparent manner. The personal data that we collect and process depends on how you use our services.

We collect and process your data for the purposes of providing you with our services, improving the platform, and for our research and development efforts. We may also share your data with third-party vendors as provisioned by you, and with outside services to support your requests.

We take your privacy very seriously and will always handle your data in accordance with applicable data protection laws, including GDPR and CCPA. We will always inform you about how we use your data, and we will only process your data if we have a lawful basis to do so.

For more information on how we handle your data, please see our Privacy Policy \[Link]. Please note that by using our services, you agree to our data practices as set out in our Privacy Policy.

You have the right to access, correct, or delete your data at any time. You can also withdraw your consent to data processing at any time. If you wish to do so, please contact us at \[Contact Information]."

_`Please write the privacy policy as it would appear using the following information:`_ \
\
_`Service: SkyDeck.ai`_ \
_`Location: https://skydeck.ai`_ \
_`Company Name: SkyDeck AI Inc`_ \
_`Company mailing address: SkyDeck AI Inc., 548 Market St. PMB38234, San Francisco, CA 94104`_ \
_`Contact email: legal@skydeck.ai`_ \
_`Phone: 1.415.744.1557`_ \
\
_`Do not make the privacy policy recursive, as you have done above, by having a policy that refers the reader to follow a link to see the privacy policy.`_

## SkyDeck AI Inc. Privacy Policy

SkyDeck AI Inc. ("SkyDeck AI," "we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you use the SkyDeck.ai generative AI platform (our "Service") and our practices for collecting, using, maintaining, protecting, and disclosing that information.

### Information We Collect About You and How We Collect It

We collect several types of information from and about users of our Service, including:

* Personal information, such as your name, email address, and other identifiers by which you may be contacted online or offline.
* Technical data, such as information about your internet connection, the equipment you use to access our Service, and usage details.
* API keys and credentials for accessing third-party vendor generative AI models provisioned by you.

We collect this information:

* Directly from you when you provide it to us.
* Automatically as you navigate through the Service. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.

### How We Use Your Information

We use information that we collect about you or that you provide to us, including any personal information:

* To provide you with the Service and its contents, and any other information, products or services that you request from us.
* To fulfill any other purpose for which you provide it.
* To provide you with notices about your account.
* To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.
* To notify you about changes to our Service or any products or services we offer or provide through it.
* To improve our Service, products, or services.
* To allow you to participate in interactive features on our Service.

### Disclosure of Your Information

We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:

* To third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
* To fulfill the purpose for which you provide it. For any other purpose disclosed by us when you provide the information.
* With your consent.

### Your Rights

You have certain rights under applicable data protection laws. These may include the right to:

* Request access to your personal data.
* Request correction of the personal data that we hold about you.
* Request erasure of your personal data.
* Object to processing of your personal data.
* Request restriction of processing your personal data.
* Request transfer of your personal data.
* Right to withdraw consent.

### Data Security

We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions and API keys will be encrypted using SSL technology.

### Changes to Our Privacy Policy

It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Service home page.

### Contact Information

To ask questions or comment about this privacy policy and our privacy practices, contact us at:

SkyDeck AI Inc. 548 Market St. PMB38234 San Francisco, CA 94104 Phone: 1.415.744.1557 Email: legal@skydeck.ai


==> use-cases/README.md <==
---
description: >-
  The following sections provide some concrete examples of the many ways SkyDeck
  GenStudio tools and features can be used to make your life easier.
---

# Introduction



==> security/bug-bounty-program.md <==
# Bug Bounty Program

### Introduction

SkyDeck.ai is committed to ensuring the security and integrity of our platform. We understand the important role that independent security researchers play in maintaining the security of our platform. We encourage security researchers to examine and test our platform and report any vulnerabilities they may find. In recognition of their efforts, we provide a bug bounty program.

### Scope

The scope of our bug bounty program is limited to vulnerabilities in SkyDeck.ai's platform and services available from the SkyDeck.ai domain. The scope includes all the features, functionalities, and tools mentioned on our website such as the AI Control Center, GenStudio, and any other services hosted on our domain.

### Out of Scope

Any third-party websites, services, or platforms linked from our website are not in the scope of this program. Additionally, any physical attempts to compromise our system or social engineering attempts are also out of the scope.

### Eligible Vulnerabilities

The following categories of vulnerabilities are eligible for our bug bounty program:

* Remote Code Execution (RCE)
* SQL Injection
* Cross-site Scripting (XSS)
* Cross-Site Request Forgery (CSRF)
* Server-side Request Forgery (SSRF)
* Insecure Direct Object References (IDOR)
* Authorization issues
* Information disclosure issues

### Ineligible Vulnerabilities

The following categories of vulnerabilities are not eligible for our bug bounty program:

* Denial of Service (DoS / DDoS) vulnerabilities
* Spamming
* Clickjacking on pages with no sensitive actions
* Unconfirmed reports from automated vulnerability scanners
* Issues related to software or protocols not under SkyDeck.ai's control

### Reporting a Vulnerability

To report a vulnerability, please send an email to security@skydeck.ai with the following information:

* Detailed steps to reproduce the vulnerability
* The potential impact of the vulnerability
* Any potential mitigations or fixes for the vulnerability
* Your contact information

### Reward

We offer a reward of $20 to $100 for vulnerabilities, depending on severity and impact. We determine the exact amount on a case-by-case basis.

### Rules

* You must not violate the privacy of any user data, disrupt our services, or cause harm to our users or systems.
* You must not disclose the vulnerability to anyone else until we've had a reasonable amount of time to fix it.
* You must be the first person to report the vulnerability to be eligible for a reward.

### Legal

By participating in the bug bounty program, you agree to comply with all applicable laws and regulations. You also agree not to exploit any vulnerability you discover for any purpose other than reporting it to us.


==> security/skydeck.ai-security-practices.md <==
---
description: As of November 1st, 2023
---

# SkyDeck.ai Security Practices

### **Data Security**

* All our components are **hosted within a secure VPC** and data is encrypted at rest with **AWS KMS using AES-256**. Furthermore, we employ **TLS 1.2 or higher** for encryption in transit.
* Our **application secrets** are also securely encrypted at rest with KMS and AES-256.

### Enhanced Conversation Security

In addition to encryption at rest we provide optional enhanced security features around user conversation content and conversation names.

* We can provide a second independent layer of encryption of conversation data at rest. The advantage of this approach is redundant security. But this comes at a cost of an extra layer on decryption when conversations are displayed or used in searches. \
  \
  This is an option in Control Center for enterprise customers.\

* Every user can hold the encryption keys to their own conversation data at rest. In this way we only have access to their conversation data while they are logged into our system. When they log out, the data is encrypted and we have no record of the decryption key. We use an independent hash of the user's password to implement that encryption. We do not store the password, and the hash exists only while the user is logged in.  \
  \
  The advantage of this approach is that no one can access user data if the user _simply stops using_ the platform.  The data is effectively gone when not actively in use by the user. The disadvantage of this approach is that if the user loses their password they lose all of their conversation data without any recourse. Another disadvantage is that displaying and working with conversation data will be slower and more _laggy_. Also, changing the user password will be a slower process because all data will need to be decrypted and re-encrypted. \
  \
  This is an optional feature for enterprise customers.&#x20;

### **Product Security**

* SkyDeck.ai implements regular **penetration testing** and conducts **vulnerability scanning** at crucial stages of our Secure Development Lifecycle (SDLC).
* Our security strategies include both **black-box and grey-box testing** during penetration testing.
* We utilize various methods to ensure the security of our system, including **Static analysis, Software composition analysis, Malicious dependency scanning, Dynamic analysis, and Network vulnerability scanning**.

### **Access Management**

* We leverage **reputed SSO services** for securing our identity and access management.
* Access to applications is role-based and is automatically revoked upon the end of employment.
* Any further access must comply with the policies set for each application.

### **Data Protection**

* We guarantee that all customer data is **encrypted both at rest and during transit**.
* **AWS Key Management System (KMS)** is responsible for managing our encryption keys.

### **Security Education**

* Comprehensive security training is provided to all employees during their onboarding process and is refreshed annually through educational modules within our platform.
* Our team shares regular threat briefings in communication channels to keep them informed of important security updates.

### **Vendor Security**

* We ensure secure remote access to internal resources using **WireGuard**.
* To provide an additional layer of protection, we also use **malware-blocking DNS servers** to safeguard employees and their endpoints while browsing the internet.


==> security/README.md <==
# Security Documentation

This directory contains key security documents for SkyDeck.ai:

1. [Bug Bounty Program](./bug-bounty-program.md)
2. [Security Practices](./skydeck.ai-security-practices.md)

## Bug Bounty Program

Outlines our program for security researchers, including:
- Scope and eligible vulnerabilities
- Reporting process and rewards
- Rules and legal considerations

## Security Practices

Describes our security measures as of November 1st, 2023, covering:
- Data and product security
- Access management
- Employee education
- Vendor security


==> developers/README.md <==
# Developers



==> developers/develop-your-own-tools/example-text-based-ui-generator.md <==
---
description: >-
  This tool generates a text-based user interface based on description. Full
  source code is provided for you to try out.
---

# Example: Text-based UI Generator

We are advocates of AI Driven Development as practiced by https://eastagile.com. To support that we use AI to help us develop user interfaces. This tool generates a text-based user interface based on description and an (optionl) request for certain user interface elements. The prompt for the tool asks for design elements as well as appropriate UI text.\
\
This example is presented as a concete and practical example of a tool that one might create and deploy throughout your team.\
\
Here is an example of its usage.\
\
User Input:

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-07 at 9.26.08 PM.png" alt=""><figcaption><p>Sample input using the specified input fields.</p></figcaption></figure>

Generated Output:

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-07 at 9.26.33 PM.png" alt=""><figcaption><p>A text-based user interface with text generated by our app.</p></figcaption></figure>

You add your custom tool json inside Genstudio.

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-07 at 9.44.56 PM.png" alt=""><figcaption><p>Upload json to define a custom tool</p></figcaption></figure>

\
\
Here is the actual json that you would update in a file (i.e. text-based-ux-designer.json).&#x20;

||CODE_BLOCK||json
{
"version": "0.1",
"metadata": {
"avatar": "",
"creator": {
"name": "Inspired by Khoa Tran",
"email": "admin@eastagile.com",
"organization": "East Agile"
},
"timestamp": "2023-06-01T10:00:00Z",
"variables": [
{
"name": "Feature Description",
"type": "text",
"default": "",
"description": "A brief description of the feature or functionality."
},
{
"name": "UI Components",
"type": "text",
"default": "Anything appropriate and conventional",
"description": "The type of user interface components (e.g., radio button, multi-select list)."
}
],
"parameters": {
"top_p": 1,
"max_tokens": 1024,
"temperature": 0.7,
"presence_penalty": 0,
"frequency_penalty": 0
},
"avatar_type": "base64",
"description": "This tool generates a text-based user interface based on your description and user interface components specified.",
"prompt_name": "Text-based User Interface Generator",
"usage_notes": "Provide a description of what sort of interface, feature, or app you want to generate (Feature Description) and any specific type of user interface elements you wish to use (UI Components). This application is designed to support AI Driven Development (AiDD) as practiced by East Agile https://eastagile.com.",
"model_version": [
"gpt-3.5",
"gpt-4",
"claude",
"palm"
],
"expected_output": {
"type": "text"
}
},
"model_prompt": "Generate a text-based user interface with wording for the following feature or functionality:\n\nFeature Description: {{Feature Description}}\nUser Interface Elements: {{UI Components}}.\n\nPlease follow these best practices for creating effective UX writing:\n1. Make it usable: Prioritize functionality and ease of use over clever language or unconventional design.\n2. Make it helpful: Provide useful information that guides users and helps them accomplish their goals.\n3. Make it accessible: Use simple, clear language and conentional design elements that make it easy for all users to understand, including those with disabilities.\n4. Make it clear: Avoid jargon and ambiguity; users should be able to understand the content and UI quickly and easily. When possible UI affordances should be obvious without needing to read text.\n5. Make it appropriate: Consider the cultural background and context of your users, if provided, and ensure the content is inclusive and respectful.\n6. Use the active voice: Prompt users to take action by using active, direct language.\n7. Write positively: Focus on affirmative statements and avoid negative phrases unless absolutely necessary.\n8. Be concise: Keep sentences short and to the point, eliminating unnecessary words and phrases.\n9. Perform constant A/B testing: Continuously test and refine the content to ensure it is effective and user-friendly.\n10. Keep brand voice and tone consistent: Ensure the content aligns with the overall brand personality and maintains a consistent tone throughout the user experience.\n11. Use action-oriented language: Encourage users to take action by using language that is clear, direct, and focused on specific tasks.\n12. Maintain contextual relevance: Provide relevant context to ensure the content is easily localizable and translatable for different languages and cultures.\n\nGenerated UX Writing Content:\n"
}

||CODE_BLOCK||

You could create your own icon and enter it as a base64 block of text to this json. Otherwise a nice default will be used.


==> developers/develop-your-own-tools/json-format-for-smart-tools.md <==
---
description: A portable way to share SkyDeck.AI smart tools written in Python code
---

# JSON Format for Smart Tools

## Overall <a href="#lgmg27qgfdrg" id="lgmg27qgfdrg"></a>

To create a smart tool on SkyDeck.AI, you need to upload a set of files according to the specifications mentioned in the File Structure section. Once uploaded, our platform will perform the initial setup, which may take a few minutes. Afterward, the tool will be available in the GenStudio Workspace.

## File Structure <a href="#id-7dcm0ac78x60" id="id-7dcm0ac78x60"></a>

### \<tool\_name>.json <a href="#xvdq6eic1eed" id="xvdq6eic1eed"></a>

The tool's behavior is also configured through a JSON file. Here is a brief overview of the key fields in the configuration:

* **version**: The current version of the tool.
* **tool\_name**: The name of the tool. This name should be unique in your workspace.
* **tool\_code**: Contains the Python code to be executed. More details on this field will be on the next section.
* **description**: A brief description of what the tool does.
* **usage\_notes**: Instructions on how to use the tool.
* **model\_version**: Specify the models that are allowed to use for follow-up questions. To specify all models, use _\["gpt-4", "gpt-3.5", "claude", "chat-bison"]_.
* **creator**: Information about the creator of the tool, including name, email, and organization.
* **variables**: An array of variables used by the tool. Each variable has a name, description, and default value. The order of variables in the UI follows the order in this array.
* **expected\_output**: The type of output produced by the tool. During the development stage, the value should always be text.
* **avatar\_type**: The format of the avatar used in the tool's UI.
* **timestamp**: The date and time when the tool was last updated.
* **requirements:** specifies the required packages to run the script in tool\_code.
* **avatar**: the string representing the logo of this tool

### tool\_code convention: <a href="#id-177qobv2sfe9" id="id-177qobv2sfe9"></a>

This script outlines the functioning of your tool. The main component of this script is the _execute_ function, which has the following requirements:

* The function should have a single input parameter called _variables_, which is a dictionary. Each key in this dictionary corresponds to a field that the user would input into your tool.
* The function should return a string, which will be displayed as the response on the GenStudio UI.

## Example Tools <a href="#h9o86a5lgfut" id="h9o86a5lgfut"></a>

### Image generation using DALL-E 2 <a href="#quzi31gwxka6" id="quzi31gwxka6"></a>

**Description:**

This tool accepts an image description as input and generates a corresponding URL for the image. The output includes the URL along with an expiration note. The tool functions by sending the query to the OpenAI DALL-E API and retrieving the response.

**Input:**

* Description: Image description, e.g., "A white furry cat"

**Output:**

* A message with the generated URL for the image along with the expiration note.

#### Python script (which would be a field inside image\_generation.json): <a href="#qw9m9923kptk" id="qw9m9923kptk"></a>

||CODE_BLOCK||python
import openai
def execute(variables):
    openai.api_key = '<USER API KEY>'
    description = variables['Description']
    response = openai.Image.create(
        prompt=description,
        n=1,
        size="1024x1024"
    )
    image_url = response['data'][0]['url']
    return f"Here is the link to your image:{image_url}. The link will expire in 1 hour."
||CODE_BLOCK||

#### image\_generation.json <a href="#id-4q3mtb2zf8gt" id="id-4q3mtb2zf8gt"></a>

||CODE_BLOCK||json
{
    "version": "0.1",
    "metadata": {
        "tool_name": "Image generation",
        "tool_code": "import openai\n\ndef execute(variables):\n openai.api_key = ''\n description = variables['Description']\n response = openai.Image.create(\n prompt=description,\n n=1,\n size=\"1024x1024\"\n )\n\n image_url = response['data'][0]['url']\n return f\"Here is the link to your image:{image_url}. The link will be expired in 1 hour.\"\n",
        "description": "Generated an image based on the description with OpenAI's DALL-E model.",
        "usage_notes": "Describe the image in detail and put it in the description field. An URL of the image will be returned. The lifetime of the URL is about 1 hour, so make sure to download it before expired",
        "model_version": ["gpt-3.5","gpt-3.5-turbo", "gpt-4", "claude"],
        "creator": {
            "name": "SkyDeck AI",
            "email": "skydeck@eastagile.com",
            "organization": "East Agile"
        },
        "variables": [
            {
                "name": "Description",
                "description": "Image description",
                "default": "a white siamese cat"
            }
        ],
        "expected_output": {
            "type": "text"
        },
        "avatar_type": "base64",
        "timestamp": "2023-05-23T10:00:00Z",
        "requirements": "openai>=0.27.4",
        "avatar": ""
    }
}
||CODE_BLOCK||

### Real-time weather report with Open-Meteo API <a href="#yhjv7lbl4mu0" id="yhjv7lbl4mu0"></a>

**Description**:

This tool leverages the Open-Meteo API to provide real-time weather information based on users' questions. By asking a question about the weather, such as temperature, precipitation, or wind conditions, the tool retrieves the most relevant and up-to-date data.

The functioning of this tool relies on APIChain - a feature from the LangChain library - to access the Open-Meteo API documentation. This enables the tool to learn how to make the correct API calls and retrieve the required information seamlessly.

**Input**:

* Question: Ask a specific question about the weather, e.g., "What is the current temperature in New York City?"

**Output**:

* A response providing the requested weather information.

#### Python script (which would be a field inside weather\_reporter.json): <a href="#qw9m9923kptk" id="qw9m9923kptk"></a>

||CODE_BLOCK||python
from langchain.chains.api import open_meteo_docs
from langchain.chat_models import ChatOpenAI
from langchain.chains import APIChain
def execute(variables):
    question = variables['Question']
    llm = ChatOpenAI(
        model_name='gpt-3.5-turbo',
        openai_api_key='<USER API KEY>'
    )
    api_chain = APIChain.from_llm_and_api_docs(
        llm, open_meteo_docs.OPEN_METEO_DOCS, verbose=False
    )
    result = api_chain.run(question)
    return result
||CODE_BLOCK||

{% hint style="info" %}
Note that Langchain is now integrated with Rememberizer. See [https://python.langchain.com/docs/integrations/retrievers/rememberizer/](https://python.langchain.com/docs/integrations/retrievers/rememberizer/)
{% endhint %}

#### weather\_reporter.json <a href="#bgnhw14oi99h" id="bgnhw14oi99h"></a>

||CODE_BLOCK||json
{
  "version": "0.1",
  "metadata": {
    "tool_name": "Weather Reporter",
    "tool_code": "from langchain.chains.api import open_meteo_docs\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.chains import APIChain\n\n\ndef execute(variables):\n question = variables['Question']\n llm = ChatOpenAI(model_name='gpt-3.5-turbo',\n openai_api_key='')\n api_chain = APIChain.from_llm_and_api_docs(\n llm, open_meteo_docs.OPEN_METEO_DOCS, verbose=False)\n result = api_chain.run(question)\n return result\n",
    "description": "Leverage the Open-Meteo API to retrieve real-time weather details",
    "usage_notes": "Enter your weather-related question in the provided field",
    "model_version": ["gpt-3.5", "gpt-3.5-turbo", "gpt-4", "claude"],
    "creator": {
      "name": "SkyDeck AI",
      "email": "skydeck@eastagile.com",
      "organization": "East Agile"
    },
    "variables": [
      {
        "name": "Question",
        "description": "Inquire about the weather conditions",
        "default": "What is the current temperature in Munich, Germany, expressed in degrees Celsius?"
      }
    ],
    "expected_output": {
      "type": "text"
    },
    "avatar_type": "base64",
    "timestamp": "2023-07-13T10:00:00Z",
    "requirements": "openai>=0.27.4\nlangchain>=0.0.229",
    "avatar": ""
  }
}
||CODE_BLOCK||

## Limitations <a href="#g32lfwd6xlxx" id="g32lfwd6xlxx"></a>

AWS Lambda only allows a function to run for a maximum of 15 minutes and 10GB of RAM. Therefore, the tools should finish their execution within this constraint.


==> developers/develop-your-own-tools/json-format-for-llm-tools.md <==
---
description: A Portable Way to Share Tools
---

# JSON Format for LLM Tools

## Introduction

Sharing a tool in a way that could be quickly added to a program or tool editor would be greatly improved with a standard way to represent a tool and how to use it. We want to enable features such as the following:

* An icon to visually represent the tool
* Metadata for the prompt:
  * A name for the tool
  * A description for the tool
  * Usage notes for the tool
* Placeholder parameters that are included in the tool string
* Expected output
* Versioning and timestamps.

## JSON Format Specification

||CODE_BLOCK||json
{
  "version": "string or integer",
  "model_prompt": "string with {{variable_name}} placeholders",
  "metadata": {
    "prompt_name": "string",
    "description": "string",
    "usage_notes": "string",
    "model_version": ["string", "string", …],
    "creator": {
      "name": "string",
      "email": "string",
      "organization": "string"
    },
    "parameters": {
      "temperature": "float",
      "max_tokens": "integer",
      "top_p": "float",
      "frequency_penalty": "float",
      "presence_penalty": "float"
    },
    "variables": [
      {
        "name": "variable name 1",
        "type": "text",
        "description": "string",
        "default": "string",
      },
      {
        "name": "variable name 2",
        "type": "single-select",
        "description": "string",
        "default": "value1",
        "allowed_values": ["value1", "value2", "value3"]
      },
      {
        "name": "variable name 3",
        "type": "multi-select",
        "description": "string",
        "default": ["value1", "value2"]
        "allowed_values": ["value1", "value2", "value3"]
      },
      ...
    ],
    "expected_output": {
      "type": "string (e.g., text, code, limited)",
      "format": "string (optional, e.g., JSON, XML, CSV)",
      "language": "string (optional, e.g., Python, JavaScript)",
      "allowed_values": ["string1", "string2", ...] (optional)
    },
    "avatar_type": "string (e.g., url, base64)",
    "avatar": "string (URL or base64-encoded image), 256x256 pixels recommended",
    "timestamp": "string (ISO 8601 format)"
  }
}
||CODE_BLOCK||

You can download our sample JSON [here](https://skydeck-public-assets.s3.amazonaws.com/sample\_tool.json).

## Fields Description

* **model\_prompt**: A string containing the GPT model prompt.
* **metadata**: An object containing additional information about the GPT model prompt, including the following sub-fields:
  * **model\_version**: A string indicating the version of the GPT model used.
  * **creator**: An object containing information about the creator of the GPT model prompt, with the following sub-fields:
    * **name**: A string representing the name of the creator.
    * **email**: A string representing the email of the creator.
    * **organization**: A string representing the organization the creator is affiliated with.
  * **parameters**: An object containing information about the GPT model parameters, with the following sub-fields:
    * **temperature**: A float indicating the temperature used for controlling the randomness of the output.
    * **max\_tokens**: An integer indicating the maximum number of tokens in the generated response.
    * **top\_p**: A float representing the nucleus sampling probability threshold.
    * **frequency\_penalty**: A float representing the penalty applied to tokens based on their frequency in the dataset.
    * **presence\_penalty**: A float representing the penalty applied to new tokens based on their presence in the prompt.
  * **timestamp**: A string in ISO 8601 format representing the date and time when the GPT model prompt was created or last modified.
  * **expected\_output (Optional)**: An object containing fields related to the expected output from the model\_prompt, including the following sub-fields:
    * **type**: A string indicating the type of output expected from the model\_prompt.
    * **format (Optional)**: A string representing the format of the expected output if applicable.
    * **language (Optional)**: A string representing the programming language of the expected output if the type is `code`.
    * **allowed\_values (Optional)**: An array of strings containing a list of allowed output values if the type is `limited`.
  * **variables (Optional)**: A list containing variables that might be inserted into the `model_prompt` string in an f-string style. Each variable contains the following sub-fields:
    * **name**: A string representing the variable name.
    * **type**: A string showing the type of variable. Currently the possible values of `type` are `text` for default variable, and `single-select` or `multi-select` for selection variables.
    * **description**: A string showing the description of the variable, including usages and examples.
    * **default**: A value showing the default value of the variable. This value is a string if `type` is `text` or `single-select`, and an array of strings for `multi-select`.
    * **allowed\_values**: An array of strings containing a list of allowed values if the variable type is `single-select` or `multi-select`
  * **avatar (Optional)**: An object containing fields related to the graphic image acting as an avatar or icon for the prompt, including the following sub-fields:
    * **avatar\_type**: A string specifying the type of avatar data included.
    * **avatar**: A string containing the URL pointing to the image if the avatar\_type is `url`, or a base64-encoded string representing the image if the avatar\_type is `base64`.
  * **prompt\_name (Optional)**: A string representing the name of the prompt.
  * **description (Optional)**: A string providing a brief description of the tool and its purpose.
  * **usage\_notes (Optional)**: A string containing free-form notes from the creator about the usage or any specific considerations related to the tool.

To specify the format of the expected output from the model\_prompt, you can add an `expected_output` object within the `metadata` object. Depending on the type of expected output, you can include the relevant sub-fields in the `expected_output` object.

To include fields for variables that might be inserted into the `model_prompt` string in an f-string style, you can add a separate `variables` list within the `metadata` object.

To include a graphic image acting as an avatar or icon for the prompt, you can add an `avatar` field within the `metadata` object.

Including the `expected_output`, `variables`, `avatar`, `prompt_name`, `description`, and `usage_notes` fields within the `metadata` object helps keep all the contextual information about the prompt in one place, making it easier to manage and understand.

You can use the `version` field at the top level of the JSON object to explicitly track the version of the entire JSON file


==> developers/develop-your-own-tools/README.md <==
---
description: >-
  You can create custom prompts, and advanced tools for use in SkyDeckAI or to
  share with other elsewhere.
---

# Develop Your Own Tools

You upload json that defines custom tools inside GenStudio.&#x20;

<figure><img src="../../.gitbook/assets/Custom Tools Upload Screen - GenStudio.png" alt=""><figcaption><p>Uploading json that defines a custom tool</p></figcaption></figure>


==> developers/develop-your-own-tools/json-format-for-tools.md <==
---
description: As of July 26, 2023
---

# JSON format for Tools

## Introduction

This documentation outlines the JSON structures supported by SkyDeck AI for two distinct types of tools: LLM Tools and Smart Tools. The purpose of this page is to provide a brief introduction to these tool categories and their respective JSON structures. Detailed information and examples for each tool type can be found in the corresponding sub-pages.

***

#### LLM Tools

LLM (Large Language Model) Tools are designed to facilitate user interaction with LLM models by sending user input to predefined prompts.

{% content-ref url="json-format-for-llm-tools.md" %}
[json-format-for-llm-tools.md](json-format-for-llm-tools.md)
{% endcontent-ref %}

#### Smart Tools

Smart Tools extend the capabilities of LLM Tools by incorporating Python code execution for data extraction and processing. The integration of Python enables users to perform complex calculations, data transformations, and other advanced operations beyond the scope of standard LLM Tools functionality.

{% content-ref url="json-format-for-smart-tools.md" %}
[json-format-for-smart-tools.md](json-format-for-smart-tools.md)
{% endcontent-ref %}


==> genstudio-workspace/web-browsing.md <==
# Web Browsing

Scraping content from websites to include in your prompts is a very helpful feature of GenStudio. Any URL you include in curly brackets will be replaced by the content scraped from that site. For example, you could write "Summarize the most important news from the following \{{https://nytimes.com\}}."

<figure><img src="../.gitbook/assets/web-scraping1.png" alt=""><figcaption><p>Web browsing with SkyDeck AI</p></figcaption></figure>

© 2023 SkyDeck AI Inc.


==> genstudio-workspace/conversations.md <==
# Conversations

### Interact with LLM

This is where you interact with your Large Language Model (LLM) Artificial Intelligence (AI) models. You do so in a conversational _chat_ fashion. You can 'talk' directly to your models using the "default" tool. This is how your session starts out.

<figure><img src="../.gitbook/assets/conversation-start.png" alt=""><figcaption><p>The beginning of a conversation</p></figcaption></figure>

Start a conversation by clicking the **New conversation** button, or you can resume an existing conversation by choosing one on the Sidebar.

Just ask your LLM anything. These are your "prompts" to the model. But there are best practices you can follow to get better results. For example, just asking for better results can produce better results, for example, "As an expert in physics explaining to a child, explain why the sky is blue."\
\
Your input should be entered in the input field at the bottom of the screen. You submit it to your LLM for a response by clicking the **Ask AI** button on the right hand side of the input field, or by pressing **Enter** while focusing the input.

You can select which model is to be used from the middle menu below the input field. You can change your model choice at any time. Some models will be more appropriate than others. For example, GPT-4 is one of the most advanced models to date and tends to produce more carefully thought out responses. However, Anthropic's Claude models can support much larger context windows (about as much as an entire book) which allows you to submit large documents in your prompt for review, background, or modification.

<figure><img src="../.gitbook/assets/models-menu.png" alt=""><figcaption><p>Choose your LLM for different messages</p></figcaption></figure>

### Regenerate and Edit the prompt

If you do not like the result your model produces, you can ask it to regenerate the response using the **Regenerate** button. You can also change your model and send another response.

<figure><img src="../.gitbook/assets/regenerate.png" alt="" width="563"><figcaption><p>Regenerate AI response</p></figcaption></figure>

Skydeck.AI also let you edit your prompt and try again. You can click the **Edit message** button, change the input and resubmit.

<figure><img src="../.gitbook/assets/edit-message.png" alt="" width="563"><figcaption></figcaption></figure>

### Sending non-AI messages

You can also sending your messages without asking the AI, and it will just appear like a normal message with no response in the conversation. This is useful when you want to take some notes directly in the conversation, or working with other members (Learn more in [Sharing and Collaboration](sharing-and-collaboration.md)).

To send a non-AI message, simply enter the texts in the input field and click **Send chat message** button, or you can press **Ctrl + Enter** while focusing the input.

<figure><img src="../.gitbook/assets/chat-buttons.png" alt=""><figcaption><p><strong>Send chat message (1) and Ask AI (2) buttons</strong></p></figcaption></figure>

### Retrieve the chat content

You can copy all the text of your prompts and responses to your clipboard using the icon in the upper right hand side. This is a handy way to include your work in other documents. You can also download the conversation content into a markdown file by clicking the **Download** button.

<figure><img src="../.gitbook/assets/copy-download-conversation.png" alt="" width="326"><figcaption><p>Download (1) and Copy (2) a conversation</p></figcaption></figure>

© 2023 SkyDeck AI Inc.


==> genstudio-workspace/slack-synchronization.md <==
# Slack Synchronization

By integrating with Slack, you can send your GenStudio conversations to a Slack channel and vice versa. This allows your team to collaborate seamlessly.

{% hint style="info" %}
This page will discuss about how you can synchronize between Slack and GenStudio. To learn more about how to set up Slack, please visit [Slack Integration](../integrations/app-integrations/slack-integration.md).
{% endhint %}

### Sending GenStudio conversations messages to Slack

Once you have connect a conversation with a public or private Slack channel, SkyDeck.AI will send all the current messages to that channel. This will only be done once at the beginning of the connection.

<figure><img src="../.gitbook/assets/sync-to-slack.png" alt="" width="563"><figcaption></figcaption></figure>

After that, for every new message that is sent to the conversation, it will also be sent to that Slack channel as well as its response.

<figure><img src="../.gitbook/assets/new-msg-from-conv.png" alt="" width="563"><figcaption></figcaption></figure>

### Sending Slack messages to GenStudio conversations

To send a message from Slack to the connected conversation:

1. Open the thread of that conversation
2. Tag the **SkyDeck.ai** app and write your prompt.
3. The message will be sent to GenStudio and you will receive the response back.

<figure><img src="../.gitbook/assets/new-msg-from-slack (1).png" alt="" width="563"><figcaption><p>Open the thread (1) - Send a message (2) - Response from GenStudio (3)</p></figcaption></figure>

Here is how the message will appear on GenStudio:

<figure><img src="../.gitbook/assets/gen-view.png" alt="" width="563"><figcaption></figcaption></figure>

### Formatting

Markdown does not work automatically in Slack when we send content from GenStudio Collaboration. So you will see `*hello*` instead of \*hello\*. This is a recent change in Slack. But there is a solution. In the desktop app you may manually turn markdown recognition \*on\* in the Advanced settings in Slack.

<figure><img src="../.gitbook/assets/Screenshot 2023-12-15 at 10.26.02 PM (1).png" alt=""><figcaption><p>Select "Format messages with markup"</p></figcaption></figure>

<figure><img src="../.gitbook/assets/Screenshot 2023-12-15 at 10.26.58 PM.png" alt=""><figcaption><p>An example of the improvement seen from turning on "Format messages with markdown".</p></figcaption></figure>


==> genstudio-workspace/public-snapshots.md <==
# Public Snapshots

The snapshot feature provides users with the ability to create a static, comprehensive view of a conversation and share it through a publicly accessible URL. It enhances collaboration by allowing users to disseminate their work quickly and efficiently to your colleagues and even external stakeholders.

### Create a Snapshot

When snapshot of a conversation is created, the system captures the current state of the conversation thread, including messages, timestamps, the LLMs that respond to the messages. Optionally, you can choose to include the participants' names or sharing anonymously. The snapshot is immutable, as it will not be updated when you continue your conversation. If you want to include the new messages, you have to create another snapshot.

To create a snapshot, choose a conversation that you want to share from the left sidebar and click the blue **Collaborate** button in the upper right corner.

<figure><img src="../.gitbook/assets/public_snapshot1.png" alt=""><figcaption><p>Click the Collaborate button</p></figcaption></figure>

A popup will appear. Choose the **Share publicly** tab and then click **Create new snapshot**. You have to options: **Share anonymously** or **Share with your name**. Choose the former if you do not want to include your name in the snapshot, and choose the latter if you are willing to share it.

<figure><img src="../.gitbook/assets/public_snapshot2.png" alt=""><figcaption><p>Click Create new snapshot and choose a sharing option</p></figcaption></figure>

{% hint style="info" %}
Once created, the snapshot will not include changes from the conversation, such as message addition or deletion.
{% endhint %}

A unique URL is generated for each snapshot so that you can give it to anyone to allow access to the conversation snapshot. The URL generation process employs cryptographic hashing techniques to ensure the uniqueness and integrity of each link.

<figure><img src="../.gitbook/assets/public_snapshot3.png" alt=""><figcaption></figcaption></figure>

### Snapshot View

If you choose **Share anonymously**, the participants' names of the conversation will not appear. Instead, you will see User 1, User 2... as the owner of the messages.

<figure><img src="../.gitbook/assets/public_snapshot4.png" alt=""><figcaption><p>Anonymized View</p></figcaption></figure>

If you choose **Share with your name**, the participants' names will appear.

<figure><img src="../.gitbook/assets/public_snapshot5.png" alt=""><figcaption><p>Unanonymized View</p></figcaption></figure>

{% hint style="info" %}
If you wish to anonymize the participants later, you have to create another snapshot. You can [disable](public-snapshots.md#disable-a-snapshot) or [delete](public-snapshots.md#delete-a-snapshot) the current one later.
{% endhint %}

### Continue from a Snapshot

When someone accesses your snapshot, they are able to continue the conversation from that point. Click **Continue this conversation** at the bottom of the page, and a popup will appear asking for your workspace account.

If you don't have one, you can sign up by entering your email address, and we will guide you through the process of [Setting up an account](../control-center/setup-guide/). After that, you can continue the snapshot once signed up.

<figure><img src="../.gitbook/assets/public_snapshot6.png" alt=""><figcaption></figcaption></figure>

### Disable a Snapshot

Users have the ability to toggle the accessibility of a snapshot via the management interface. Disabling a snapshot renders the URL inactive, and any attempt to access the URL afterwards will be responded with not found resources. You can choose to re-enable it later.

<figure><img src="../.gitbook/assets/public_snapshot7.png" alt=""><figcaption><p>Click the "Eye" icon to disable/enable a Snapshot</p></figcaption></figure>

### Delete a Snapshot

You can choose to delete a snapshot if you don't want to share it anymore. Be cautious that this action is irreversible, which means that you cannot regain the deleted snapshot with the same URL. When clicking the "Trash" icon, you have to confirm the deletion to avoid unintended removal.

<figure><img src="../.gitbook/assets/public_snapshot8.png" alt=""><figcaption><p>Click the "Trash" icon to delete a Snapshot</p></figcaption></figure>



==> genstudio-workspace/document-upload.md <==
# Document Upload

SkyDeck.AI allows you to add different types of documents and images to your conversations with AI. You can ask your favourite LLM to analyze your file, and you will be able to receive its summary, interpretation, or answers for your questions about its content.

### Add a document

To add a document, open a conversation and click **Add** next to the prompt input. Then, choose **Upload documents**. We are currently supporting these files extensions: PDF, DOC, DOCX, PPTX, and simple text files.

<figure><img src="../.gitbook/assets/image (57).png" alt="" width="563"><figcaption></figcaption></figure>

The document will be attached with your message and sent to LLM. You can see the file associated with the message and you can even re-download it.

<figure><img src="../.gitbook/assets/attached-document.png" alt=""><figcaption></figcaption></figure>

### Add an image

To add an image, click **Add** and then, choose **Upload images**. We are currently supporting these files extensions: JPEG, JPG, WEBP, PNG.

<figure><img src="../.gitbook/assets/image (58).png" alt="" width="563"><figcaption></figcaption></figure>

The image will be attached with your message and sent to LLM. Additionally, you can also click on the image, which will open a new popup window displaying it in more clearly.

<figure><img src="../.gitbook/assets/attached-image.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/preview-image.png" alt="" width="375"><figcaption><p>View the image directly in GenStudio</p></figcaption></figure>

### Restrictions <a href="#h_52e5a07158" id="h_52e5a07158"></a>

* Total size of all files per message: up to 20MB

<figure><img src="../.gitbook/assets/error1.png" alt="" width="490"><figcaption></figcaption></figure>

* If the file is less than 20MB but still exceeds the token limit, another error will be displayed:

<figure><img src="../.gitbook/assets/error2.png" alt=""><figcaption></figcaption></figure>

* Total number of files: up to 10

<figure><img src="../.gitbook/assets/error3.png" alt="" width="488"><figcaption></figcaption></figure>

### Rememberizer - Extending AI knowledge

You can utilize [Rememberizer](https://rememberizer.ai/), our solution for giving AI your own knowledge and information and allowing SkyDeck.AI to learn from your documents and discussions. Learn more about Rememberizer [here](https://docs.rememberizer.ai/).


==> genstudio-workspace/sharing-and-collaboration.md <==
# Sharing and Collaboration

SkyDeck.AI is committed to breaking down silos and promoting a culture of collaborative innovation. You don't have to work in isolation when using the GenStudio Workspace. Whether you are working on a general conversation with one of the LLM models or diving deep into one of the six specialized tools for targeted tasks, GenStudio provides a cohesive and intuitive platform for real-time collaboration.

### How to Invite Collaborators

To add collaborators to any existing conversation, select the conversation from the left sidebar and click the blue **Collaborate** button in the upper right corner.

<figure><img src="../.gitbook/assets/public_snapshot1.png" alt=""><figcaption><p>Click the Collaborate button</p></figcaption></figure>

A popup will appear with the default tab of **Invite to collaborate**. Toggle the **Collaboration** slider and then click the blue **Copy link** button.

{% hint style="info" %}
Should you wish to discontinue collaboration at any point, simply switch the slider to the off position. Please note that this will invalidate the current link, and it will be different if you generate a new one.
{% endhint %}

<figure><img src="../.gitbook/assets/collab2.png" alt="" width="563"><figcaption><p>Enable collaboration and copy the link</p></figcaption></figure>

With this link, you can invite any colleagues with ease. There is no need to add each collaborator's email address manually.

{% hint style="info" %}
All invitees must have an account registered in the same SkyDeck.AI workspace as the conversation owner. This protects organizational assets and confidential information that may be contained within the GenStudio Workspace conversation.
{% endhint %}

{% hint style="info" %}
You can further enhance collaboration by synchronizing Slack channels with your GenStudio conversations. To learn more, please visit [Slack Synchronization](slack-synchronization.md) and [Slack Integration](../integrations/app-integrations/slack-integration.md).
{% endhint %}

### Collaborator View

Collaborators can only see the conversation they have been invited to. They will not be able to see the rest of your GenStudio conversations. To include them in additional conversations, you must provide separate links for each respective dialogue.

<figure><img src="../.gitbook/assets/collab3.png" alt="" width="563"><figcaption></figcaption></figure>

Invited collaborators can exit a conversation whenever they want by clicking the **Collaborate** button and then the red **Leave this conversation** button.

<figure><img src="../.gitbook/assets/collab4.png" alt="" width="563"><figcaption></figcaption></figure>

### Your View

Once a colleague contributes to the conversation, you will see a notification bubble on the conversation in your GenStudio Workspace.

<figure><img src="../.gitbook/assets/collab6.png" alt="" width="563"><figcaption></figcaption></figure>

Each individual's input or contributions will be marked by their respective initials. Hovering over the initials will reveal your colleague's name.

<figure><img src="../.gitbook/assets/collab5.png" alt=""><figcaption></figcaption></figure>

### Working with your colleagues

In GenStudio conversations, not every message needs to be sent to AI. Sending non-AI messages can enhance personal and direct interactions. Whether you're sharing updates, giving feedback, or simply having a chat, relying on non-AI messages ensures clarity and authenticity, allowing for meaningful connections and effective communication without the influence of artificial intelligence.

You can simply send non-AI messages as discussed in this [page](conversations.md), but collaboration enables a more powerful way to interact with you colleagues. When writing a message, you can use the @ notation followed by the member's name to mention them for the next message. This method ensures that specific individuals are alerted about pertinent information, updates, or actions that require their attention. It streamlines communication by directly tagging the involved parties, reducing the chance of important messages being overlooked and ensuring that everyone stays informed and engaged.

<figure><img src="../.gitbook/assets/collab-mentioning.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/README.md <==
---
description: GenStudio
---

# GenStudio Workspace

* [**Conversations**](conversations.md)
* [**Sharing and Collaboration**](sharing-and-collaboration.md)
* [**Slack Synchronization**](slack-synchronization.md)
* [**Public Snapshots**](public-snapshots.md)
* [**Web Browsing**](web-browsing.md)
* [**Document Upload**](document-upload.md)
* [**Tools**](tools/)
* [**Data Security**](data-security/)


==> genstudio-workspace/data-security/data-loss-prevention.md <==
# Data Loss Prevention

Our data loss prevention system helps users safeguard their personal identifiable information (PII). It works by scanning user input for sensitive data, and provides real-time warnings to help prevent unintentional data exposure.

The system is designed to detect a wide range of sensitive data types. When a user's input includes these types of data, our system will alert the user. The user then has the option to send the message anyway, anonymize the text, or choose not to send the message at all.

## List of supported entities:

### **Global Entities:**

* Credit Card Numbers
* Crypto Wallet Numbers
* Email Addresses
* International Bank Account Numbers (IBAN)
* Phone Numbers
* Medical License Numbers

### **Country Specific Entities:**

#### USA:

* US Bank Account Numbers
* US Driver License Numbers
* US Individual Taxpayer Identification Numbers (ITIN)
* US Passport Numbers
* US Social Security Numbers (SSN)

#### UK:

* UK National Health Service (NHS) Numbers

#### Spain:

* Spanish Tax ID (NIF) Numbers

#### Italy:

* Italian Personal Identification Codes
* Italian Driver License Numbers
* Italian VAT Code Numbers
* Italian Passport Numbers
* Italian Identity Card Numbers

#### Singapore:

* Singapore National Registration Identification Card Numbers

#### Australia:

* Australian Business Numbers (ABN)
* Australian Company Numbers (ACN)
* Australian Tax File Numbers (TFN)
* Australian Medicare Numbers

© 2023 SkyDeck AI Inc.


==> genstudio-workspace/data-security/README.md <==
---
description: >-
  Every part of the SkyDeck AI system is designed to allow enhanced security
  over activities and data protection for all users.
---

# Data Security

## OpenAI API Usage

One of the key advantages of using your OpenAI api key in **SkyDeck AI** is that it **enables private access to OpenAI systems**. If one uses free or paid ChatGPT services OpenAI makes no promises about data security. But if one uses an OpenAI API key in Control Center then all of the chat interaction by your users in GenStudio remains private. \
\
This is what [OpenAI writes](https://openai.com/security) on the subject:\
\
"Data submitted through the OpenAI API is not used to train OpenAI models or improve OpenAI’s service offering. Data submitted through non-API consumer services ChatGPT or DALL·E may be used to improve our models."


==> genstudio-workspace/tools/README.md <==
# Tools

### Introduction

The Tool feature helps to construct more complex prompts easily. Generally, a tool includes one or many input fields, which serve as variables for crafting a more detailed prompt. This simplifies the interaction with AI, as users only need to provide the dynamic content, and our tool handler will take care of the rest. There are two types of tools: **LLM Tools** and **Smart Tools**.

* LLM tools allow users to only need to give some small of inputs, and these will be sent to predefined prompts to be processed by LLMs. Each tool acts as a template that outlines the necessary components of a prompt, allowing users to focus on content rather than format. It is is especially beneficial for users who frequently generate similar prompts and wish to streamline their workflow.
* Smart Tools extend the capabilities of LLM Tools by incorporating Python code execution for data extraction and processing. The integration of Python enables users to perform complex calculations, data transformations, and other advanced operations beyond the scope of standard LLM Tools functionality.

### Usage

To use a tool, click on **Default tool** button below the prompt input field and you will see a list of available tools in the right column of the page. When you click on one of these tools, the input section is modified and you will see the inputs that the tool expects. After you fill these in and submit your choices, the tool will respond with output in your current conversation. You will then fall back into the default conversation mode and you can interact with the response from your tool with replies or follow up.

<figure><img src="../../.gitbook/assets/tools-menu.png" alt=""><figcaption><p>The Tools menu</p></figcaption></figure>

Within a conversation you might find you benefit from using many tools. You might start with one tool to get strategy advise. Then you might use a SQL tool to write a query to produce some follow up analysis. And finally you might use a writing tool to take your results and write them up in fashion targeted to the audience for your results.

### Define your own tools

In the following sections, we will show you how to use our default tools for your daily tasks. To define a custom tool, learn more at [develop-your-own-tools](../../developers/develop-your-own-tools/ "mention").

© 2023 SkyDeck AI Inc.


==> genstudio-workspace/tools/pair-programmer/how-to-use.md <==
# How to Use

To get started with Pair Programmer, you will need to specify programming language you are using or want to use. By default, the field is set to Python.

Once you submit your programming language, you will receive a message similar to the one below (although the exact wording may differ) that details what Pair Programmer has to offer and provides some useful commands:

<figure><img src="../../../.gitbook/assets/pair-programmer-2.png" alt=""><figcaption></figcaption></figure>

If everything looks correct, you can then write your programming question into the prompt area.

### /change

The `/change` command allows you to modify your preferences when interacting with Pair Programmer. Currently, it supports two options:

* **Programming language** – Switch programming language. For example, enter `/change language=Java` to switch to Java.
* **Interaction language** – Change the communication language. For example, enter `/change language=Spanish` to switch to Spanish.

### /implement

The `/implement` command is used when you want to create a new program. It follows a five-step procedure to ensure a thorough approach:

For example, you could input`/implement task=TaskDescription`. Please replace `TaskDescription` with a description of the task you want to be implemented.

#### Example

Let's say you want to implement a program that calculates the sum of all elements in a list.

{% code overflow="wrap" %}
||CODE_BLOCK||
/implement task=Create a Python function that calculates the sum of all elements in a list. The function should take a list of integers as input and return an integer as output.
||CODE_BLOCK||
{% endcode %}

### /modify

The `/modify` command is used when you want changes or adjustments made to an existing program. Input `/modify code=ProgramCode modifications=ProgramModification`. Please replace `ProgramCode` with the program you want to modify, and `ProgramModification` with a description of what you want to change.

#### Example

For example, imagine you have a Python function that calculates the area of a rectangle, and you want to modify it to calculate the area of a circle instead.

{% code overflow="wrap" %}
||CODE_BLOCK||
/modify code=
def rectangle_area(length, width):
    return length * width

modifications=
Change the function to calculate the area of a circle instead, using the formula `pi * radius^2`. The function should take a single argument for the radius.
||CODE_BLOCK||
{% endcode %}

### /test

The `/test` command is used when you want me to create test cases for a given program. Input `/test code=ProgramCode description=ProgramDescription`. Please replace `ProgramCode` with the program you want to test, and `ProgramDescription` with a description of what the program does.

#### Example

Let's say you have a Python function that calculates the factorial of a number and you want to create test cases for it

{% code overflow="wrap" %}
||CODE_BLOCK||
/test code=
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

description=
This function calculates the factorial of a given number. The factorial of a number n is the product of all positive integers less than or equal to n.
||CODE_BLOCK||
{% endcode %}


==> genstudio-workspace/tools/pair-programmer/README.md <==
# Pair Programmer

Pair Programmer is an advanced AI programming tool that acts as your coding companion, providing immediate assistance with code-related queries, debugging challenges, and optimization tips. Whether you're grappling with complex algorithms or seeking best-practice advice, Pair Programmer is designed to improve your coding and streamline your development process, making software creation more efficient and intuitive.

<figure><img src="../../../.gitbook/assets/pair-programmer.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can Pair Programmer Help With?

Pair Programmer can help with tons of questions across the software development spectrum, from foundational concepts to advanced topics. While the following list of topics and examples is extensive, it doesn’t come close to covering every use case. We invite you to plug in any of these examples and explore the depth of Pair Programmer.

**Syntax and Semantics**

* What's the correct syntax for a for-loop in Java?
* How does Python's list comprehension work?

**Debugging and Troubleshooting**

* Why am I getting a "Segmentation fault" error in my C code?
* What causes a "NullPointerException" in Java?

**Best Practices**

* How should I structure a RESTful API?
* What are the recommended naming conventions for SQL tables?

**Libraries and Frameworks**

* How do I start a new project with React?
* Can you explain how Flask routing works?

**Algorithms and Data Structures**

* How does a quicksort algorithm work?
* Can you help me implement a binary tree?

**Performance Optimization**

* Why is my SQL query running slowly?
* How can I optimize my Python script for better memory management?

**Software Architecture**

* What's the difference between MVC and MVVM patterns?
* How can microservices benefit my application?

**Tooling and Environment Setups**

* How do I set up a virtual environment in Python?
* What's the difference between npm and yarn?

**Version Control**

* How do I resolve a git merge conflict?
* What's the best way to structure branch workflows in git?

**Deployment and Operations**

* How can I deploy my web application using Docker?
* What's the role of Kubernetes in modern software architecture?

**Security**

* How can I prevent SQL injection in my web application?
* What are best practices for securely storing user passwords?

**Languages and Paradigms**

* Can you explain functional programming concepts in JavaScript?
* What's the difference between Procedural and Object-Oriented programming?

**Databases and Storage**

* How do I normalize a relational database?
* What are the benefits of using a NoSQL database like MongoDB over traditional relational databases?

**Hardware and System-Level Questions**

* How does garbage collection work in programming languages?
* What's the difference between parallel and concurrent processing?

**Trends and Updates**

* What are the new features in the latest version of Python?
* How is WebAssembly changing web development?


==> genstudio-workspace/tools/pair-programmer/example-python-script-assistance.md <==
---
description: Follow along with a step-by-step demonstration of Pair Programmer
---

# Example – Python Script Assistance

In this example, we are asking Pair Programmer to help with a Python script that is not working as intended in relation to large CSV files.

<figure><img src="../../../.gitbook/assets/pair-programmer-3.png" alt=""><figcaption></figcaption></figure>

The tool takes a second to analyze your prompt. Every response is customized, so no prompts will have the exact same output. For this prompt, Pair Programmer started with Requirements that reiterated what we asked.

<figure><img src="../../../.gitbook/assets/pair-programmer-4.png" alt=""><figcaption></figcaption></figure>

Sometimes you may ask for a solution that does not exist. Pair Programmer may let you know if it can provide an adequate answer and how the tool is going to answer your prompt.

<figure><img src="../../../.gitbook/assets/pair-programmer-5.png" alt=""><figcaption></figcaption></figure>

For our Python script prompt, Pair Programmer is explaining different ways we can modify our script, complete with code examples.

<figure><img src="../../../.gitbook/assets/pair-programmer-6.png" alt=""><figcaption></figcaption></figure>

Pair Programmer may also provide us some follow-up questions so that AI can understand the specific needs of your situation. You can then ask those questions to request further assistance.

<figure><img src="../../../.gitbook/assets/pair-programmer-7.png" alt=""><figcaption></figcaption></figure>

Pair Programmer then provides updated strategies that better suit your needs. There may be more follow-up questions. As you answer more questions and provide further information, your output will be more specific. Pair Programmer automatically understands the context for each additional query.

<figure><img src="../../../.gitbook/assets/pair-programmer-8 (1).png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/image-generator/how-to-use.md <==
# How to Use

To get started with Image Generator, you need to provide a description of the image you wish to create. Here are some general guidelines for terms:

* **Objects** – Use names of objects such as apple, car, house, etc.
* **Colors** – Specify colors such as red, blue, green, etc.
* **Sizes** – Specify sizes like large, small, tall, etc.
* **Shapes** – Specify shapes like square, round, rectangular, etc.
* **Materials** – Specify types of materials like wooden, metal, glass, etc.
* **Animals/People** – Specify different types of animals or people like cat, dog, woman, man, etc.
* **Scenery** – Specify different types of scenery like sunset, beach, mountain, etc.
* **Moods** – Specify different moods like happy, sad, angry, etc.
* **Realism** – Specify the degree of accuracy or abstractness like photorealistic, cartoonish, impressionist, etc.

{% hint style="info" %}
You can only generate one image per request based on the provided description.
{% endhint %}

Remember, the more specific your description, the more accurate the generated image will be. For example, instead of just saying "cat", you might say "a large orange cat sitting on a blue sofa". This will give the model a more specific image to generate.

![](<../../../.gitbook/assets/image (43).png>)![](<../../../.gitbook/assets/image (44).png>)


==> genstudio-workspace/tools/image-generator/README.md <==
# Image Generator

Image Generator uses OpenAI's DALL-E model to produce visual content based on textual prompts. Unlike traditional LLMs that generate textual outputs, this specialized model can understand descriptive prompts and translate them into corresponding images.

<figure><img src="../../../.gitbook/assets/image-generator-1.png" alt=""><figcaption></figcaption></figure>

Its capabilities encompass a wide range of applications, including:

* **Concept Visualization** – Turn abstract ideas or textual descriptions into visual representations.
* **Design Mockups** – Provide a brief, and the model can generate initial design concepts or mockups.
* **Artistic Creations** – Describe a scene, mood, or style, and the LLM can craft a piece of art aligned with that vision.
* **Educational Diagrams** – Generate diagrams or illustrations for educational content based on specific topics or concepts.
* **Entertainment** – Create character designs, landscapes, or any visual content based on fictional narratives or stories.

Image Generator opens up a realm of possibilities for professionals, educators, artists, and enthusiasts, making the process of visual creation more accessible to all. By simply providing a detailed prompt, you can obtain custom visuals without the need for advanced design skills or software.


==> genstudio-workspace/tools/image-generator/example-winter-wonderland.md <==
---
description: Follow along with a step-by-step demonstration of Image Generator
---

# Example – Winter Wonderland

In this example, we are being as specific as possible to create an artistic image:

<figure><img src="../../../.gitbook/assets/image-generator-2.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
The image link will expire in 1 hour. Save the picture before it expires if you would like to use it or review it later.
{% endhint %}

Image Generator created the following image:

<figure><img src="../../../.gitbook/assets/image (46).png" alt=""><figcaption></figcaption></figure>

If you don't like the exact composition of the image, click **Regenerate** to create a new image with the same prompt:

<figure><img src="../../../.gitbook/assets/image (47).png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/strategy-consultant/how-to-use.md <==
# How to Use

To get started with Strategy Consultant, you just need to provide your questions or prompts!

<figure><img src="../../../.gitbook/assets/strategy-consultant-2.png" alt=""><figcaption></figcaption></figure>

The AI will follow a structured flow of operations to generate insightful responses:

1. **Thoughts Decomposition** – Break down the information given or the problem into smaller sub-questions or 'thoughts'.
2. **Thoughts Generation** – Generate potential answers or 'thoughts' for each of these sub-questions.
3. **Thoughts Evaluation** – Evaluate the relevance and potential impact of each thought.
4. **Search Algorithm** – Choose the most promising thought to further develop into a detailed response.
5. **I want to know more about** – If there are any knowledge gaps or specific types of information needed to provide a well-informed response, I will request additional information from you.

If the output seems to be missing some nuance or perspectives, you can submit additional information and Strategy Consultant with refine the strategies it presents.


==> genstudio-workspace/tools/strategy-consultant/README.md <==
# Strategy Consultant

Strategy Consultant serves as your digital advisory partner, delivering insightful recommendations to address your unique challenges and requests. Drawing from a wealth of business training data, this tool guides you through consultations that simulate the thought processes of high-end consultants. This LLM offers a holistic view of opportunities, risks, and actionable strategies to help you make decisions that are informed, strategic, and aligned with your objectives.

<figure><img src="../../../.gitbook/assets/strategy-consultant-1.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can Strategy Consultant Help With?

**Market Analysis and Entry**

* What factors should I consider before entering the Asian market with a new product?
* How do I evaluate the competitive landscape in the e-commerce sector in Europe?

**Business Growth and Expansion**

* What strategies can I employ to scale my startup in its next phase?
* Which acquisition targets might be suitable for my company to expand its reach?

**Branding and Positioning**

* How can I differentiate my brand in an oversaturated market?
* What are the key elements of a successful rebranding campaign?

**Operational Efficiency**

* How can I streamline my company's supply chain operations?
* Are there best practices to improve my inventory turnover rate?

**Financial Strategy**

* How can I optimize my business's capital structure?
* What pricing strategies could boost my product's profitability?

**Digital Transformation**

* What are the steps to successfully digitize my traditional retail business?
* How can I leverage emerging technologies like AI and blockchain for my services?

**Talent Management and Organizational Structure**

* How can I restructure my organization for better agility and innovation?
* What strategies can aid in employee retention during corporate transitions?

**Innovation and Product Development**

* How can I foster a culture of innovation within my company?
* Which markets or segments should I target with my new product line?

**Risk Management**

* How do I assess and mitigate risks when expanding to a new region?
* What strategies can help in managing currency fluctuation risks for my export-heavy business?

**Customer Experience and Loyalty**

* How can I improve customer satisfaction in my service industry?
* What are the key drivers of customer loyalty in the digital age?

**Stakeholder and Investor Relations**

* How can I effectively communicate a major strategic shift to my investors?
* What are best practices for managing stakeholder expectations during mergers?

**Sustainability and Corporate Social Responsibility**

* How can my business pivot towards more sustainable practices without compromising profitability?
* What are the tangible benefits of integrating CSR into my business model?


==> genstudio-workspace/tools/strategy-consultant/example-employee-retention.md <==
---
description: Follow along with a step-by-step demonstration of Strategy Consultant
---

# Example – Employee Retention

In this example, we are asking Strategy Consultant that will help a company retain employees during a corporate transition.

<figure><img src="../../../.gitbook/assets/strategy-consultant-3.png" alt=""><figcaption></figcaption></figure>

Strategy Consultant starts by decomposing the question down into a few sub-questions:

<figure><img src="../../../.gitbook/assets/strategy-consultant-4.png" alt=""><figcaption></figcaption></figure>

The AI then addresses each of those sub-questions:

<figure><img src="../../../.gitbook/assets/strategy-consultant-5.png" alt=""><figcaption></figcaption></figure>

And finally, Strategy Consultant asks for specific types of additional information that would help improve the strategy to match your specific needs:

<figure><img src="../../../.gitbook/assets/strategy-consultant-6.png" alt=""><figcaption></figcaption></figure>

We then added some extra background information and context, so the AI would better understand the situation:

<figure><img src="../../../.gitbook/assets/strategy-consultant-7.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/teach-me-anything/example-intro-to-programming.md <==
---
description: Follow along with a step-by-step demonstration of Teach Me Anything
---

# Example – Intro to Programming

In this example, we are interested in learning about Python Programming at an undergraduate level:

* **Lesson** – Introduction to Python Programming
* **Language** – English
* **Education Level** – Undergraduate
* **Learning Style** – Mixed - Visual (infographics, charts) and Lecture
* **Communication Style** – Informal
* **Tone Style** – Encouraging
* **Reasoning Framework** – Practical (step-by-step, actionable insights)
* **Using Emojis** – Yes

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-1.png" alt=""><figcaption></figcaption></figure>

Teach Me Anything generates a curriculum:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-2.png" alt=""><figcaption></figcaption></figure>

Once the lesson is started, the AI will work through each section of the curriculum:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-3.png" alt=""><figcaption></figcaption></figure>

At any time you can ask for more help or test your understanding, and Teach Me Anything will cover the topic or question with more depth:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-4.png" alt=""><figcaption></figcaption></figure>

You can then test your understanding:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-5.png" alt=""><figcaption></figcaption></figure>

When you are happy with your progress, jump back into the next curriculum topic any time:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-6.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/teach-me-anything/how-to-use.md <==
# How to Use

Teach Me Anything offers 8 different categories to help you create a personalized learning experience. Here's an overview of each field, along with some example selections you might consider:

{% hint style="info" %}
These examples are not exhaustive, you can enter anything that you think is appropriate, and the AI will adjust.
{% endhint %}

* **Lesson** – the specific subject or topic you want to learn about.
  * The History of Renaissance Art
  * Macroeconomics
* **Language** – the language in which you want the information to be presented.
  * Spanish
  * English
  * French
* **Education Level** – the complexity and depth of the lesson designed to match a specific educational background or understanding.
  * Elementary
  * High School
  * Undergraduate
  * Postgraduate
* **Learning Style** – the preferred method or approach through which you best understand and retain information.
  * Visual (infographics, charts)
  * Auditory (spoken explanations, podcasts)
  * Kinesthetic (interactive exercises, simulations)
  * Reading/Writing (textual content, worksheets)
* **Communication Style** – The manner in which the information is articulated or conveyed.
  * Formal (academic, business-like)
  * Informal (casual, conversational)
  * Succinct (brief, to-the-point)
  * Detailed (comprehensive, in-depth)
* **Tone Style** – The emotional quality or mood of the lesson.
  * Professional (neutral, objective)
  * Friendly (warm, approachable)
  * Humorous (light-hearted, funny)
  * Enthusiastic (passionate, animated)
* **Reasoning Framework** – The logical structure or method used to present and make sense of the information.
  * Analytical (break down of components)
  * Critical (evaluating pros and cons)
  * Conceptual (big picture, overarching themes)
  * Practical (step-by-step, actionable insights)
* **Using Emojis** – Incorporating emojis to add an expressive or illustrative element to the content.
  * True or False

{% hint style="info" %}
You don't have to fill out every category, but make sure to remove the default text if you don't want it to impact the results of your lesson.
{% endhint %}

<figure><img src="../../../.gitbook/assets/teach-me-anything-2.png" alt=""><figcaption></figcaption></figure>

After you've personalized these categories and pressed the **Generate button**, Teach Me Anything will reiterate your preferences and tell you how to create a lesson plan.

<figure><img src="../../../.gitbook/assets/teach-me-anything-3.png" alt=""><figcaption></figcaption></figure>

### /plan

The `/plan` command asks the AI to create a lesson plan that matches your preferences. The output will vary widely depending on your initial inputs.

<figure><img src="../../../.gitbook/assets/teach-me-anything-4.png" alt=""><figcaption></figcaption></figure>

### /change

The `/change` command allows you to modify your preferences. For example, you could change Learning Style by entering `/change learning style=Active`.

### /skip

The `/skip` command allows you to skip a certain part of the lesson For example, if Teach Me Anything is suggesting pre-requisite content that you already feel comfortable with, type `/skip` to move forward.

### /start

The `/start` command is used to officially start the lesson once you are happy with your preferences and the lesson plan.

<figure><img src="../../../.gitbook/assets/teach-me-anything-5.png" alt=""><figcaption></figcaption></figure>

### /continue

The `/continue` command is used to move the lesson forward to the next topic.

<figure><img src="../../../.gitbook/assets/teach-me-anything-6.png" alt=""><figcaption></figcaption></figure>

### /test

The `/test` command is used to test your understanding of a lesson section. Teach Me Anything will create questions or open-ended dialogue to test if you fully comprehend the curriculum or need more review/practice.

<figure><img src="../../../.gitbook/assets/teach-me-anything-7.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/teach-me-anything/README.md <==
# Teach Me Anything

Teach Me Anything is an LLM tutor offering personalized learning experiences on any topic you can imagine. Tailor each lesson to your preferences, selecting the teaching style, linguistic nuances, and depth of content. Then dive into /test mode, and the AI will asses your grasp of the subject.

<figure><img src="../../../.gitbook/assets/teach-me-anything-1.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can Teach Me Anything Help With?

Teach Me Anything has a wide scope, so there’s no end to what kinds of lessons you can request. Here is a list of general topics to give you an idea of how you can utilize this tool to learn:

* Sciences and Mathematics
* History
* Literature
* Technology and Computers
* Philosophy and Social Sciences
* Arts and Music
* Languages and Linguistics
* Geography and Earth Sciences
* Religion and Spirituality
* Sports and Recreation
* Health and Wellness
* Space and Astronomy
* Law and Governance
* Travel and Culture
* Business and Finance


==> genstudio-workspace/tools/sql-assistant/how-to-use.md <==
# How to Use

To get started with SQL Assistant, you will need to provide a Data Definition Language (DDL) segment and a task description.

* **DDL** **segment** – a subset of SQL commands, objects, attributes, and constraints that is focused on defining or modifying the structure of database objects.
* **Task description** – instructions related to the DDL that tells SQL Assistant what you need help with.

<figure><img src="../../../.gitbook/assets/sql-assistant-2.png" alt=""><figcaption></figcaption></figure>

The default placeholder prompt that loads whenever you create a new chat with SQL Assistant, models how to create your own prompts:

* The DDL statement creates a table called ‘transactions’ with 5 columns (transaction\_id, customer\_id, transaction\_date, amount, and description).
* The task description asks SQL Assistant to provide a query that will print all the transactions higher than 1000 dollars.


==> genstudio-workspace/tools/sql-assistant/README.md <==
# SQL Assistant

SQL Assistant is an innovative SQL database LLM that serves as your virtual database consultant, aiding in query optimization, schema design, and data management tasks. Whether you're troubleshooting performance bottlenecks or seeking advice on relational design principles, SQL Assistant empowers you to harness the full potential of your data through efficient database operations.

<figure><img src="../../../.gitbook/assets/sql-assistant-1.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can SQL Assistant Help With?

SQL Assistant can help with a range of SQL-related questions including, but no limited to:

* **Writing SQL queries** – Assist in writing various SQL queries like SELECT, INSERT, UPDATE, DELETE, ALTER, CREATE, DROP, etc.
* **Explaining SQL concepts** – Explain various SQL concepts, such as joins, normalization, indexing, transactions, stored procedures, etc.
* **Troubleshooting SQL queries** – Help debug and provide solutions or workarounds for queries that aren’t working as expected.
* **Optimizing SQL queries** – Suggest ways to optimize your SQL queries for better performance.
* **Data modeling** – Assist in designing database schemas and offer advice on best practices.
* **SQL for Data Analysis** – Write complex queries to perform data analysis tasks.
* **Database Management** – Help with concepts related to managing databases like backups, replication, partitioning, etc.


==> genstudio-workspace/tools/sql-assistant/example-query-debugging.md <==
---
description: Follow along with a step-by-step demonstration of SQL Assistant
---

# Example – Query Debugging

In this example, we are asking SQL Assistant to debug a query that is not working as intended.

<figure><img src="../../../.gitbook/assets/sql-assistant-3.png" alt="" width="563"><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/sql-assistant-4.png" alt="" width="563"><figcaption></figcaption></figure>

SQL Assistant identifies what is wrong and provides the correct query needed to fetch the intended customer emails.

<figure><img src="../../../.gitbook/assets/sql-assistant-5.png" alt="" width="563"><figcaption></figcaption></figure>


==> genstudio-workspace/tools/legal-agreement-review/how-to-use.md <==
# How to Use

To get started with Legal Agreement Review provide an **Introduction** prompt, which is just any background information, questions, or specific concerns you want to address and the **Clause**, or section of the legal text you want to review.

<figure><img src="../../../.gitbook/assets/legal-agreement-review-2.png" alt=""><figcaption></figcaption></figure>

After the initial review, the AI may ask for more information or context to improve it's recommendations for a clause. As always, the more specifics you can provide, the better.


==> genstudio-workspace/tools/legal-agreement-review/README.md <==
# Legal Agreement Review

Legal Agreement Review is your on-demand legal assistant, meticulously scanning contracts and agreements for potential pitfalls, inconsistencies, or non-standard clauses. By leveraging its vast knowledge base, Legal Agreement Review can help ensure that your legal documents are robust and compliant, offering clarity on intricate terms and providing recommendations that align with context.

<figure><img src="../../../.gitbook/assets/legal-agreement-review-1.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can Legal Agreement Review Help With?

**Clause Interpretation**

* What does this indemnification clause imply?
* How does this confidentiality clause impact my obligations?

**Comparison and Consistency**

* Is this non-compete clause standard for contracts in my industry?
* How does this termination provision compare to typical agreements?

**Legal Term Definitions**

* What is "force majeure"?
* Can you explain "fiduciary duty"?

**Risk Analysis**

* What potential liabilities does this contract expose me to?
* Are there any clauses that might be unfavorable in a dispute?

**Jurisdictional Queries**

* Is this choice of law clause advantageous for my business location?
* What does this arbitration provision mean for dispute resolution?

**Operational Implications**

* How does this service level agreement impact my business operations?
* What are the implications of this data protection clause on my company's IT policies?

**Compliance and Regulation**

* Does this contract comply with GDPR provisions?
* Are there any clauses that could be in conflict with local labor laws?

**Amendments and Changes**

* How can I modify this clause to be more favorable to my position?
* What's the process outlined in the contract for making amendments?

**Financial Queries**

* What does this payment term imply for cash flow?
* Are there any hidden fees or charges in this agreement?

**Terminology and Wording**

* Can this clause be simplified for better clarity?
* Is the wording of this provision legally binding or just a guideline?


==> genstudio-workspace/tools/legal-agreement-review/example-nda-clause.md <==
---
description: Follow along with a step-by-step demonstration of Legal Agreement Review
---

# Example – NDA Clause

In this example we are asking Legal Agreement Review to review this section of an NDA to see if there are any loopholes.

<figure><img src="../../../.gitbook/assets/legal-agreement-review-3.png" alt=""><figcaption></figcaption></figure>

The AI examines the clause and then outputs a thorough answer that looks at the clause from a few different angles.

<figure><img src="../../../.gitbook/assets/legal-agreement-review-4.png" alt=""><figcaption></figcaption></figure>


==> ai-documentations/llm-evaluation-report.md <==
# LLM Evaluation Report

| Model                      | Date       |   Total Response Time (s) |   Tests Passed |   Mean CodeBLEU (0-1) |   Mean Usefulness Score (0-4) |   Mean Functional Correctness Score (0-4) |
|:---------------------------|:-----------|--------------------------:|---------------:|----------------------:|------------------------------:|------------------------------------------:|
| o1-preview                 | 2024-11-21 |                  2208.03  |            132 |              0.321908 |                      3.60976  |                                  3.64024  |
| o1-mini                    | 2024-11-21 |                   718.012 |            134 |              0.322883 |                      3.65244  |                                  3.7561   |
| gpt-4o                     | 2024-11-21 |                   321.525 |            125 |              0.316051 |                      3.70732  |                                  3.7439   |
| gpt-4o-mini                | 2024-11-21 |                   191.192 |            114 |              0.339313 |                      3.62805  |                                  3.69512  |
| claude-3-5-sonnet-20240620 | 2024-11-21 |                   335.662 |            113 |              0.303122 |                      3.60366  |                                  3.62195  |
| claude-3-5-sonnet-20241022 | 2024-11-21 |                   351.938 |            110 |              0.321726 |                      3.67073  |                                  3.67683  |
| gemini-1.5-pro             | 2024-11-21 |                   528.459 |            106 |              0.340196 |                      3.43293  |                                  3.5061   |
| gemini-1.5-flash           | 2024-11-21 |                   759.693 |              2 |              0.270065 |                      0.670732 |                                  0.829268 |

**Total Response Time (s):** The total time taken by the model to generate all the outputs.

**Tests passed:** The number of unit tests that the model has passed during evaluation, out of a total of 164 tests.

**Mean [CodeBLEU](https://arxiv.org/abs/2009.10297):** Average CodeBLEU score, a metric for evaluating code generation quality based on both syntactic and semantic correctness.

**Mean [Usefulness Score](https://arxiv.org/abs/2304.14317):** Average rating of the model's output usefulness as rated by a LLM model.

- **0:** Snippet is not at all helpful, it is irrelevant to the problem.
- **1:** Snippet is slightly helpful, it contains information relevant to the problem, but it is easier to write the solution from scratch.
- **2:** Snippet is somewhat helpful, it requires significant changes (compared to the size of the snippet), but is still useful.
- **3:** Snippet is helpful, but needs to be slightly changed to solve the problem.
- **4:** Snippet is very helpful, it solves the problem.

**Mean [Functional Correctness Score](https://arxiv.org/abs/2304.14317):** Average score of the functional correctness of the model's outputs, assessing how well the outputs meet the functional requirements, rated by a LLM model.

- **0 (failing all possible tests):** The code snippet is totally incorrect and meaningless.
- **4 (passing all possible tests):** The code snippet is totally correct and can handle all cases.



==> ai-documentations/README.md <==
# AI Documentations

This directory contains key documents related to LLM:

1. [LLM Evaluation Report](llm-evaluation-report.md)
2. [SkyDeck.ai LLM Ready Documentation](skydeckai-llm-ready-documentation.md)

## LLM Evaluation Report

Presents a comparative analysis of various LLM models, including:

* Performance metrics (response time, tests passed)
* Quality assessments (CodeBLEU, usefulness, functional correctness)
* Detailed explanations of scoring methodologies

## LLM-Ready Documentation

Provides a consolidated reference document designed for LLM consumption, combining various documentation into a single, easily accessible format.

These documents offer insights into LLM performance and provide resources for LLM interactions. They may be updated as new evaluations are conducted or documentation is revised.


==> ai-documentations/skydeckai-llm-ready-documentation.md <==
# SkyDeck.ai LLM Ready Documentation

*Generated at 2024-11-15 00:21:38 PST. Available as raw content at [skydeckai-llm-ready-documentation.md](https://raw.githubusercontent.com/skydeckai/skydeckai-webflow/refs/heads/docs/skydeckai-llm-ready-documentation.md).*

This document provides a comprehensive, consolidated reference of SkyDeck.ai's documentation, optimized for large language model (LLM) consumption. It combines various documentation sources into a single, easily accessible format, facilitating efficient information retrieval and processing by AI systems.

||CODE_BLOCK||
==> SUMMARY.md <==
# Table of contents

* [SkyDeck.ai](README.md)
* [GenStudio Workspace](genstudio-workspace/README.md)
  * [Conversations](genstudio-workspace/conversations.md)
  * [Sharing and Collaboration](genstudio-workspace/sharing-and-collaboration.md)
  * [Slack Synchronization](genstudio-workspace/slack-synchronization.md)
  * [Public Snapshots](genstudio-workspace/public-snapshots.md)
  * [Web Browsing](genstudio-workspace/web-browsing.md)
  * [Document Upload](genstudio-workspace/document-upload.md)
  * [Tools](genstudio-workspace/tools/README.md)
    * [Pair Programmer](genstudio-workspace/tools/pair-programmer/README.md)
      * [How to Use](genstudio-workspace/tools/pair-programmer/how-to-use.md)
      * [Example – Python Script Assistance](genstudio-workspace/tools/pair-programmer/example-python-script-assistance.md)
    * [SQL Assistant](genstudio-workspace/tools/sql-assistant/README.md)
      * [How to Use](genstudio-workspace/tools/sql-assistant/how-to-use.md)
      * [Example – Query Debugging](genstudio-workspace/tools/sql-assistant/example-query-debugging.md)
    * [Legal Agreement Review](genstudio-workspace/tools/legal-agreement-review/README.md)
      * [How to Use](genstudio-workspace/tools/legal-agreement-review/how-to-use.md)
      * [Example – NDA Clause](genstudio-workspace/tools/legal-agreement-review/example-nda-clause.md)
    * [Teach Me Anything](genstudio-workspace/tools/teach-me-anything/README.md)
      * [How to Use](genstudio-workspace/tools/teach-me-anything/how-to-use.md)
      * [Example – Intro to Programming](genstudio-workspace/tools/teach-me-anything/example-intro-to-programming.md)
    * [Strategy Consultant](genstudio-workspace/tools/strategy-consultant/README.md)
      * [How to Use](genstudio-workspace/tools/strategy-consultant/how-to-use.md)
      * [Example – Employee Retention](genstudio-workspace/tools/strategy-consultant/example-employee-retention.md)
    * [Image Generator](genstudio-workspace/tools/image-generator/README.md)
      * [How to Use](genstudio-workspace/tools/image-generator/how-to-use.md)
      * [Example – Winter Wonderland](genstudio-workspace/tools/image-generator/example-winter-wonderland.md)
  * [Data Security](genstudio-workspace/data-security/README.md)
    * [Data Loss Prevention](genstudio-workspace/data-security/data-loss-prevention.md)
* [Use Cases](use-cases/README.md)
  * [Creating a Privacy Policy](use-cases/creating-a-privacy-policy.md)
* [Developers](developers/README.md)
  * [Develop Your Own Tools](developers/develop-your-own-tools/README.md)
    * [JSON format for Tools](developers/develop-your-own-tools/json-format-for-tools.md)
    * [JSON Format for LLM Tools](developers/develop-your-own-tools/json-format-for-llm-tools.md)
    * [Example: Text-based UI Generator](developers/develop-your-own-tools/example-text-based-ui-generator.md)
    * [JSON Format for Smart Tools](developers/develop-your-own-tools/json-format-for-smart-tools.md)
* [Control Center](control-center/README.md)
  * [Admin & Owner Tools](control-center/admin-and-owner-tools.md)
  * [Setup Guide](control-center/setup-guide/README.md)
    * [Set Up Account](control-center/setup-guide/set-up-account.md)
    * [Set Up Integrations](control-center/setup-guide/set-up-integrations/README.md)
      * [Integration Assistance](control-center/setup-guide/set-up-integrations/integration-assistance.md)
    * [Set Up Security](control-center/setup-guide/security/README.md)
      * [Authentication (SSO)](control-center/setup-guide/security/authentication-setup.md)
    * [Organize Teams](control-center/setup-guide/organize-teams/README.md)
      * [Add New Group](control-center/setup-guide/organize-teams/add-new-group.md)
      * [Remove Groups](control-center/setup-guide/organize-teams/remove-groups.md)
    * [Curate Tools](control-center/setup-guide/curate-tools/README.md)
      * [System Tools](control-center/setup-guide/curate-tools/system-tools.md)
      * [Assign Tags](control-center/setup-guide/curate-tools/assign-tags.md)
    * [Manage Members](control-center/setup-guide/manage-members/README.md)
      * [Add Members](control-center/setup-guide/manage-members/add-members.md)
      * [Import File](control-center/setup-guide/manage-members/import-file.md)
      * [Invite Members](control-center/setup-guide/manage-members/invite-members.md)
      * [Edit Members](control-center/setup-guide/manage-members/edit-members.md)
* [Integrations](integrations/README.md)
  * [LLMs and Databases](integrations/llms-and-databases/README.md)
    * [Anthropic Integration](integrations/llms-and-databases/anthropic-integration.md)
    * [Database Integration](integrations/llms-and-databases/database-integration.md)
    * [Groq Integration](integrations/llms-and-databases/groq-integration.md)
    * [HuggingFace Integration](integrations/llms-and-databases/huggingface-integration.md)
    * [Mistral Integration](integrations/llms-and-databases/mistral-integration.md)
    * [OpenAI Integration](integrations/llms-and-databases/openai-integration.md)
    * [Perplexity Integration](integrations/llms-and-databases/perplexity-integration.md)
    * [Together AI Integration](integrations/llms-and-databases/together-ai-integration.md)
    * [Vertex AI Integration](integrations/llms-and-databases/vertex-ai-integration.md)
  * [App Integrations](integrations/app-integrations/README.md)
    * [Rememberizer Integration](integrations/app-integrations/rememberizer-integration.md)
    * [Slack Integration](integrations/app-integrations/slack-integration.md)
* [Notices](notices/README.md)
  * [Terms of Use](notices/terms-of-use.md)
  * [Privacy Policy](notices/privacy-policy.md)
  * [Cookie Notice](notices/cookie-notice.md)
* [Releases](releases/README.md)
  * [Nov 15th, 2024](releases/nov-15th-2024.md)
  * [Nov 8th, 2024](releases/nov-8th-2024.md)
  * [Nov 1st, 2024](releases/nov-1st-2024.md)
  * [Oct 25th, 2024](releases/oct-25th-2024.md)
  * [Oct 18th, 2024](releases/oct-18th-2024.md)
  * [Oct 11th, 2024](releases/oct-11th-2024.md)
  * [Oct 4th, 2024](releases/oct-4th-2024.md)
  * [Sep 27th, 2024](releases/sep-27th-2024.md)
  * [Sep 20th, 2024](releases/sep-20th-2024.md)
  * [Sep 13th, 2024](releases/sep-13th-2024.md)
  * [Sep 6th, 2024](releases/sep-6th-2024.md)
  * [Aug 23rd, 2024](releases/aug-23rd-2024.md)
  * [Aug 16th, 2024](releases/aug-16th-2024.md)
  * [Aug 9th, 2024](releases/aug-9th-2024.md)
  * [Aug 2nd, 2024](releases/aug-2nd-2024.md)
  * [Jul 26th, 2024](releases/jul-26th-2024.md)
  * [Jul 12th, 2024](releases/jul-12th-2024.md)
  * [Jul 5th, 2024](releases/jul-5th-2024.md)
  * [Jun 28th, 2024](releases/jun-28th-2024.md)
  * [Jun 21st, 2024](releases/jun-21st-2024.md)
  * [Nov 12th 2023](releases/nov-12th-2023.md)
  * [Nov 6th 2023](releases/nov-6th-2023.md)
  * [Oct 30th 2023](releases/oct-30th-2023.md)
  * [Oct 23th 2023](releases/oct-23th-2023.md)
  * [Oct 16th 2023](releases/oct-16th-2023.md)
  * [Sep 18th 2023](releases/sep-18th-2023.md)
  * [Sep 8th 2023](releases/sep-8th-2023.md)
* [Security](security/README.md)
  * [SkyDeck.ai Security Practices](security/skydeck.ai-security-practices.md)
  * [Bug Bounty Program](security/bug-bounty-program.md)
* [AI Documentations](ai-documentations/README.md)
  * [LLM Evaluation Report](ai-documentations/llm-evaluation-report.md)
  * [SkyDeck.ai LLM Ready Documentation](ai-documentations/skydeckai-llm-ready-documentation.md)


==> README.md <==
---
description: How to get the most out of your generative AI workspace.
---

# SkyDeck.ai

We've put together some helpful guides for you to get set up with our product quickly and easily. GenStudio is the SkyDeck.ai workspace where everyone can interact in a conversational "chat" fashion with the tools and models available to them in their organization. You might find the experience similar to one you have had using OpenAI's ChatGPT.

© 2023 SkyDeck AI Inc.

###


==> releases/sep-13th-2024.md <==
---
description: >-
  This release introduces new features and improvements to enhance data security, improve user experience, and provide better tools for account and data management.
---

# Sep 13th, 2024

## GenStudio

### New Features

- **Snapshot Management Modal**: Introduced a snapshot management modal for collaborative users to improve workflow.

### Improvements

- **Meta Tags for Public Snapshots**: Added meta tags to public snapshots for better SEO and easier sharing.
- **DLP Validation Flow**: Implemented a new DLP validation flow for enhanced security.
- **Markdown Formatting**: Improved formatting of user-submitted Markdown content for better readability.
- **Expand/Collapse Long Messages**: Added an expand/collapse feature for long user messages in snapshots to improve usability.
- **Free Trial Countdown Clarity**: Enhanced the free trial countdown clock for improved clarity.

### Bug Fixes

- **Markdown Parsing Errors**: Fixed parsing errors when HTML is included in Markdown in user messages.
- **Breadcrumb Update Issue**: Resolved an issue where changing conversations didn't update breadcrumbs.

## Control Center

### New Features

- **Tag Support in CSV Uploads**: Added support for tagging members when uploading CSV files to enhance member organization.
- **Export Members to CSV**: Introduced the ability to export members to CSV, simplifying data management.
- **Admin Password Reset**: Enabled owners and administrators to reset passwords for better account management.

### Improvements

- **Enhanced DLP Processing**: Increased maximum word length for Data Loss Prevention (DLP), allowing users to process larger documents securely.
- **Improved Snapshot Management**: Refined snapshot management permissions for better control over user access.
- **New DLP Validation Flow**: Implemented a new DLP validation flow for enhanced data security.
- **Enhanced Onboarding Experience**: Improved user onboarding by redirecting new sign-ups to GenStudio with helpful links.
- **Translation Feature Enhancement**: Enhanced translation features with rerun capabilities for better multilingual support.

### Bug Fixes

- **Duplicate Collaboration Members**: Fixed an issue where collaboration members were duplicated in the same conversation.
- **Admin Role Isolation**: Resolved role isolation issues for admin users to ensure proper access controls.
- **Account Security Improvement**: Removed verified emails from old admin records to enhance account security.

==> releases/oct-4th-2024.md <==
---
description: >-
  This release focuses on enhancing user experience in GenStudio and Control Center with new features, performance improvements, and crucial bug fixes.
---

# Oct 4th, 2024

## GenStudio

### New Features

- **'Show More' Button**: Added a "Show More" button to tool messages, allowing you to view extended content.
- **Conversation Search**: Implemented the ability to search through conversations to find information quickly.
- **Auto-Translate**: Introduced an auto-translate feature to support multi-language communication.

### Improvements

- **Collaboration for All Users**: Enabled collaboration features for non-business users, fostering teamwork and communication.
- **Enhanced UI/UX**: Made several user interface and experience enhancements for smoother navigation and a better overall experience.
- **Improved Snapshot Loading**: Optimized snapshot loading times, allowing quicker access to your snapshots.
- **Input Responsiveness**: Improved input responsiveness by adding debounce, enhancing typing and interaction smoothness.
- **Updated Placeholders**: Reworded placeholder text for better clarity and guidance.
- **Preview Organization**: Enhanced the order of previews to help you find what you need faster.

### Bug Fixes

- **Tools Sidebar Display**: Fixed an issue where the tools sidebar did not display all pages, ensuring full access to all tools.
- **Conversation Pagination**: Resolved errors with conversation pagination for seamless navigation through messages.
- **Participant Submission**: Fixed a bug where participants were undefined upon submission, ensuring correct participant information.
- **'@' Mention Functionality**: Corrected the '@' mention feature in conversations, allowing you to tag colleagues effectively.
- **Chat Page Stability**: Fixed crashes on the chat page when using special tokens, improving stability.

## Control Center

### New Features

- **Conversation Search**: Introduced the ability to search for conversations, making it easier to locate past discussions.
- **Enhanced Tool Management**: Added search, pagination, and sorting functionalities for tools, improving the management and accessibility of your tools.

### Improvements

- **Larger Data Submissions**: Increased the maximum request body size, allowing you to submit larger data without encountering errors.
- **Improved Snapshot Preview**: Enhanced the public snapshot preview for a better viewing experience.
- **Automatic Username Population**: Your username now automatically populates from your Google account during Google sign-up, streamlining the registration process.
- **Updated Default Images**: Refreshed default images for a more appealing visual experience.

### Bug Fixes

- **Snapshot Media Access**: Fixed issues with snapshot media URLs expiring, ensuring uninterrupted access to your media files.
- **VertexAI Model Stability**: Resolved instability issues with VertexAI models to ensure consistent performance.
- **Routine Validation**: Added missing token limit validation for routines to prevent errors and maintain system integrity.

==> releases/nov-6th-2023.md <==
---
description: >-
  Welcome to our updated platform! We've added new features, made improvements,
  and fixed bugs for a seamless and efficient experience. Let's explore what's
  new.
---

# 6th November 2023

## GenStudio

### **New Features**

* **Share to Slack**: Collaboration just became easier! You can now share content directly to Slack from our platform.
* **Additional Languages**: We've expanded our language support! GenStudio now supports 10 additional languages, allowing for a more inclusive user experience.

### **Improvements**

* **Image Display**: To provide a better viewing experience, we've added a maximum width limit for generated images.
* **Sign-in and Sign-up Pages UI**: We've made the spaces between FA sign-in and sign-up pages consistent and also changed the email field icon for a more intuitive user interface.
* **Re-share Collaborative URL**: You can now re-share collaborative URLs, making team collaboration more efficient.

### **Bug Fixes**

* **Unauthorized Okta User Error Message**: We've improved the error message displayed for unauthorized Okta users for better clarity.
* **Logout Flow**: Fixed a bug where setting the locale cookie prevented the logout flow. You should now be able to log out smoothly.
* **Deleting Active Conversations**: We've fixed the issue where deleting active conversations was problematic. You can now manage your conversations more efficiently.
* **Message Deletion**: Deleting a message no longer causes all messages of the conversation to appear in the "unread" state.

## Control Center

### **New Features**

* **Streaming Response**: Responses are now streamed in real-time, providing consistent and live updates.
* **Addition of 10 New Languages**: Control Center now supports 10 new languages, making it even more user-friendly and accessible.

### **Improvements**

* **Okta Integration**: We've enhanced our Okta integration capabilities, providing a more secure and streamlined user experience.

### **Bug Fixes**

* **Access to Private Pages in Control Center**: We've fixed an issue where unauthenticated requests could access some private pages in Control Center.
* **Email Authentication Toggle**: Users can now turn off email authentication in Control Center as expected.


==> releases/sep-20th-2024.md <==
---
description: >-
  This release introduces new AI integrations, enhanced account management,
  improved data protection, and various user interface and performance
  improvements to enhance your experience with GenStudio an
---

# Sep 20th, 2024

## GenStudio

### New Features

* **LaTeX Equation Support**: You can now include LaTeX equations in your content.

### Improvements

* **Simplified Account Management**: Access your account settings without needing to re-login.
* **Improved Code Display**: Code blocks now support word wrapping for better readability.
* **Enhanced Import Messages**: Clearer error messages when importing JSON tools.
* **Consistent Title Length**: Titles are now limited to 60 characters for uniformity.
* **Optimized Sign-in Experience**: Enhanced sign-in and sign-up pages for better work account integration.

### Bug Fixes

* **Resolved Message Errors**: Fixed issues with parsing HTML in Markdown that caused errors in messages.
* **Stability Improvements**: Fixed a crash when using collapsible sections in assistant messages.

## Control Center

### New Features

* **Perplexity AI Integration**: Access enhanced content generation capabilities with the new Perplexity AI integration.
* **Expanded AI Models**: Added new OpenAI models, providing enhanced AI capabilities.

### Improvements

* **Simplified Account Management**: Manage your account without needing to re-login, saving you time.
* **Improved Tool Integration**: Conversations now use appropriate system prompts when tools are activated, enhancing accuracy.
* **Enhanced Error Messages**: Clearer messages during tool validation for easier troubleshooting.
* **Unified Title Display**: Routines and conversations now share consistent title truncation for a uniform experience.
* **Optimized Sign-in Experience**: Enhanced sign-in and sign-up pages for better work account integration.
* **Enhanced PDF Processing**: Improved extraction of uploaded PDFs, even when they contain unsupported images.
* **Advanced Data Protection**: Data Loss Prevention now checks for personal names and locations to secure sensitive information.
* **Updated DLP Settings**: Data Loss Prevention is now turned off by default, giving you more control over data handling.

### Bug Fixes

* **Performance Improvements**: Resolved issues where routines could exhaust resources when called multiple times.

==> releases/oct-25th-2024.md <==
---
description: >-
  This release focuses on enhancing user experience through improved
  personalization, messaging features, and user interface refinements. It also
  includes several bug fixes to enhance stability and perf
---

# Oct 25th, 2024

## GenStudio

### Improvements

* **Optimized Mobile Logo Display**: A smaller Skydeck logo enhances mobile device compatibility.
* **Conversation View Modes**: Users can change view modes in conversations for a customized interface.
* **User Avatars in Conversations**: User images are now displayed in conversations for a personal touch.
* **Enhanced WebSocket Handling**: Improved connection handling with user notifications ensures better connectivity.
* **Focused Conversation Generation**: The interface now focuses on the conversation when generating messages.
* **UI Enhancements**: Various interface improvements contribute to a smoother experience.
* **Message Editing with AI Regeneration**: Users can regenerate AI responses when editing messages.

### New Features

* **Snapshot Visit Analytics**: Added analytics to track when users visit snapshots for better insights.

### Bug Fixes

* **Snapshot Layout Fixed**: Resolved layout issues for a better snapshot viewing experience.
* **Model Selection Dropdown Fixed**: Fixed truncation issues with the model selection dropdown.
* **Message Collapse State Fixed**: Corrected the initial collapse state of messages for consistency.
* **Profile Cancel Function Fixed**: The "Cancel" button now redirects to Conversations, and a "Clear" button was added.

## Control Center

### Improvements

* **Personalized Conversation Views**: Users can now save their preferred conversation view modes for a more tailored experience.
* **Enhanced Admin Management**: Admins can now manage other admins, providing better control over team roles.
* **Improved Streaming Error Messages**: More descriptive error messages during streaming issues enhance troubleshooting.
* **Collaborative Message Editing**: Edited messages are broadcasted to all collaborators, improving real-time collaboration.
* **Customizable Support Targeting**: Customer support conversations can be configured to engage only new users.
* **CSA Messages with Documents**: Support agents can now include documents in messages for more effective assistance.

### New Features

* **Tool Max Tokens Support**: Tools now support the max\_tokens parameter, offering better control over outputs.
* **Refined Tool Editing**: Enhanced tool editing capabilities for a smoother user experience.

### Bug Fixes

* **Login Issue Resolved**: Fixed an issue where sign-ins returned null claims, improving login reliability.
* **Model API Update Fixed**: Resolved issues with updating the last used model API.
* **Optimized Vertex AI Credentials**: Vertex AI now uses cached credentials for improved performance.
* **Workspace Access Bug Fixed**: Addressed the "Visit your workspace" navigation issue.
* **Parameter Validation Fixed**: Fixed missing validation in parameter correction functions.


==> releases/nov-12th-2023.md <==
---
description: >-
  Welcome to our latest update! We've been working hard to enhance your
  experience with new features, improvements, and fixes. Below, you'll find the
  most user-impactful changes.
---

# Nov 12th 2023

## GenStudio

### New Features

* **Slack Member Authorization**: Effortlessly manage team access with the new integration for Slack member authorization.

### Improvements

* **Infinite Scrolling**: Enjoy a seamless conversation experience with the new infinite scrolling feature, allowing you to browse without interruption.

### Bug Fixes

* **Unread Message Status**: Resolved an issue where deleting a message would mark the entire conversation as unread.
* **Documentation Links**: Fixed documentation links to ensure they work correctly across multiple language versions.
* **Message Trimming**: Upgraded litellm to prevent unintended message trimming for a clearer conversation history.

## Control Center

### New Features

* **Azure AD & Okta Script**: Gain better control over application settings with a script that disables Azure AD and Okta across all current applications.
* **Automatic Azure AD Disable**: New accounts will now have Azure Active Directory disabled by default for enhanced initial security.

### Improvements

* **More Data Per Page**: View up to 100 items per page, reducing the need to flip through pages to find what you need.
* **Security Enhancements**: Updated package versions to address and resolve known vulnerabilities, keeping your data safe.

### Bug Fixes

* **Smooth Sign-Up**: Fixed the sign-up redirection to ensure new users are smoothly transitioned to the sign-in page upon registration.


==> releases/nov-8th-2024.md <==
---
description: >-
  This release focuses on enhancing collaboration features, improving user interface elements, and refining real-time communication for a better user experience.
---
# Nov 8th, 2024

## GenStudio

### Improvements

- **Optimized Logo for Faster Loading**: Replaced the logo with an optimized version to reduce loading times.
- **Improved Real-Time Messaging**: Enhanced unread message notifications using WebSockets for instant communication updates.
- **Visually Distinct User Messages in Snapshots**: User messages in snapshots now have a different background color for better distinction.

### New Features

- **"My Collaborations" Tab**: Added a "My Collaborations" tab in Account Settings for efficient collaboration management.
- **Clear Search Button**: Introduced a clear search button to the conversation search field for easier navigation.

### Bug Fixes

- **Resolved Collaboration State Inconsistencies**: Fixed issues causing inconsistent collaboration states across conversations.
- **Fixed UI Rendering Issues**: Addressed rendering issues that reset the conversation title input field unnecessarily.
- **Corrected Responsive Layout in Chat Box**: Fixed layout problems in the chat box when using responsive design with two sidebars.
- **UI Bug Fixes in "My Collaborations" Data Tables**: Resolved various UI bugs in the "My Collaborations" data tables for a smoother user experience.

## Control Center

### Improvements

- **Enhanced URL Detection**: Improved recognition of URLs in messages and during content scraping for a smoother experience.
- **Business Domain Visibility**: Users can now view their business domain information on the account page, providing better account transparency.
- **Optimized Real-Time Notifications**: Updated conversation notifications via WebSockets for more immediate updates.
- **Improved Onboarding for Verified Businesses**: Streamlined the onboarding process for verified businesses, making it quicker to get started.
- **Increased System Reliability**: Implemented high availability with Redis Sentinel to enhance performance and stability.

### New Features

- **"My Collaborations" Tab**: Introduced a new "My Collaborations" tab in the Account Settings page for easier collaboration management.
- **Enhanced Tool Search**: Enabled searching within tool descriptions and usage notes to help users find tools more efficiently.


==> releases/jun-21st-2024.md <==
---
description: >-
  We’re excited to bring you our latest updates, featuring conversation sorting
  and size display in GenStudio. Various bug fixes and improvements included.
---

# Jun 21, 2024

## GenStudio

### New Features

* **Conversation Sorting**: Easily organize your conversations with the new sorting feature.
* **Conversation Size in Sidebar**: View the size of each conversation directly in the sidebar for better management.

### Improvements

* **Tool Serialization Update**: Improved tool serialization to enhance functionality.
* **Dependency Updates**: Updated LiteLLM and OpenAI dependencies to the latest versions for better stability and performance.


==> releases/sep-27th-2024.md <==
---
description: >-
  This release introduces new features and enhancements in GenStudio and Control
  Center, including improved conversation titling, tool pagination, and
  independent language settings, as well as important
---

# Sep 27th, 2024

## GenStudio

### New Features

* **Added Caddy Template**: Introduced a new Caddy template to enhance deployment and configuration options.

### Improvements

* **Conversation Titles in Browser Tabs**: Manually edited or auto-generated conversation titles now populate browser tabs and webpage titles, providing better context.
* **Increased Timeout Settings**: Extended timeout limits to 10 seconds to improve system responsiveness under heavy loads.

### Bug Fixes

* **UI Enhancements**: Resolved various issues in the new user interface to enhance overall experience.

## Control Center

### New Features

* **Tool Pagination**: Implemented pagination in the tool list for easier navigation when managing many tools.
* **Automated Tag Creation for CSV Upload**: New tags are now automatically created during CSV file uploads if they don't exist, simplifying the tagging process.
* **Enhanced Conversation Titles with AI**: Conversation titles are now generated using AI for more concise and meaningful summaries.

### Improvements

* **Independent Language Settings**: Language preferences for GenStudio tools can now be set independently from the Control Center, offering a more personalized experience.
* **Optimized Tool List Loading**: Reduced payload and improved loading times by detaching images from the tool list API.
* **Improved Conversation Titling**: Now uses the first non-empty message to generate conversation titles, ensuring they are more relevant.

### Bug Fixes

* **Fixed Conversation Titles for OpenAI Models**: Resolved an issue where conversation titles weren't generated for certain OpenAI models.
* **Prevented Token Limit Issues in Prompts**: Fixed a bug where token limits could be exceeded when filling prompts, preventing errors.
* **Routine Deletion Stability**: Ensured routines are properly stopped before deletion to maintain stability.
* **Corrected Error Reporting**: Fixed an issue where errors were reported to the wrong dashboard, ensuring accurate error tracking.
* **Adjusted Token Limits for Claude 3 Models**: Set maximum token limits to prevent input errors when using Claude 3 models.


==> releases/sep-8th-2023.md <==
---
description: >-
  Introducing the first release of SkyDeck.ai, equipped with enhanced features,
  improvements, and bug fixes for a more intuitive, customizable, and efficient
  AI productivity experience.
---

# Sep 8th 2023

## GenStudio

### New Features

* **SkyDeck.ai Text Update**: The SkyDeck.ai text has been updated for better clarity.
* **Multiple Choice Variable Format**: Support for multiple choice variable format has been added, increasing the flexibility for data inputs.
* **Image Rendering**: We've improved our system to render images right away when receiving a response, speeding up the display process.

### Improvements

* **Theme Colors and Text Update**: We've updated the theme colors and fetched new text for a more coherent visual experience. Also, we've ensured the consistent use of sign-in, sign-up, sign-out text throughout the platform.
* **Favicon Fix**: Fixed an issue with the favicon for pages ending with "/".

### Bug Fixes

* **Broken Image Display**: Solved an issue where images would not display when they were expired or broken, enhancing the visual experience.
* **List Display in GenStudio**: Fixed an issue where the display of lists was broken in GenStudio.

## Control Center

### New Features

* **Language Selection**: We've added a language selection feature to the Control Center, providing a more user-friendly experience for non-English speakers.
* **Control Center Customization**: We've now allowed for customization of the Control Center's Sign in and Sign up pages for a more personalized experience.

### Improvements

* **CSV Upload**: Spaces in emails and names are now automatically stripped when uploading a CSV file of members, ensuring better data consistency.
* **Password Validation**: We've updated the password validation to be more inclusive of symbol characters.
* **Logo Update**: Users can now upload logos with larger file sizes, and we've also changed the logo format to .png for better quality. Company logo in emails has also been enlarged for better visibility.
* **Sign up Page**: A new sign-up page has been implemented for a smoother onboarding process.
* **Onboarding Enhancement**: We've made improvements to the onboarding process for new users, making it easier and more intuitive.
* **Assets Optimization**: Assets used in Sign in and Sign up pages have been optimized for faster load times.

### Bug Fixes

* **Case Insensitive Emails**: Emails for login and reset password functionality are now case insensitive, avoiding confusion for users.
* **Key Error in JSON Format**: Fixed a key error issue in the conversion of old JSON format.
* **Menu Sidebar**: Fixed a bug where the menu sidebar was not appearing.
* **Responsive UI**: Fixed console errors on Sign in, Sign up pages, and improved responsive design for the Control Center.


==> releases/aug-16th-2024.md <==
---
description: >-
    This release focuses on enhancing authentication methods and user access across GenStudio and Control Center, streamlining login experiences, and ensuring account security.
---
# Aug 15th, 2024

## GenStudio

### Improvements

- **Synchronized Authentication Methods**: GenStudio now reflects the authentication options configured in Control Center, providing a consistent login experience.
- **Prioritized Google Login**: Placed the Google login option at the top of the login page for easier access.
- **Updated Translations**: Refreshed internationalization settings for better multilingual support.

## Control Center

### New Features

- **Multiple Authentication Methods**: Introduced new sign-in options to provide flexibility in accessing your account.
- **Email Verification for Control Center Users**: Implemented email verification to strengthen account security.

### Improvements

- **Prioritized Google Sign-In**: Moved the Google sign-in option to the top of the login page for easier access, and updated field labels for clarity.
- **Enhanced Account Verification**: Newly verified owners are now correctly recognized, improving access rights management.
- **Enhanced Search Functionality**: Integrated advanced date range support in the search feature, improving data retrieval efficiency.

### Bug Fixes

- **Fixed Rememberizer Integration**: Resolved an issue causing Rememberizer to fail in reconnecting, ensuring continuous service.

==> releases/oct-11th-2024.md <==
---
description: >-
  This release focuses on enhancing collaboration and conversation experiences,
  introducing message editing capabilities, and improving the user interface for
  a more seamless experience.
---

# Oct 11th, 2024

## GenStudio

### Improvements

* **Enhanced LaTeX Rendering**: Improved the display of LaTeX in code blocks for clearer mathematical expressions.
* **Consistent Set Password Page Design**: Updated the "Set Password" page to match the sign-in/sign-up pages for a uniform experience.
* **Collapsible Conversation Bar**: Added collapse functionality to the conversation bar to maximize workspace area.

### New Features

* **Scroll to Top Button**: Introduced a button to quickly scroll to the top in conversations for easier navigation.
* **Message Editing**: Enabled users to edit their messages, allowing corrections and updates.
* **Markdown Support in Tool Inputs**: Added support for Markdown formatting in tool inputs for enhanced content creation.

### Bug Fixes

* **Safari Copy Conversation Fix**: Resolved an issue that prevented copying conversations in Safari.

## Control Center

### Improvements

* **Unified Workspace for Admins**: Admins with the same email domain are now grouped into a single workspace, simplifying collaboration.
* **Capped Conversation Names**: Limited the length of conversation names created from CSA for better readability.

### New Features

* **User Type Targeting in Conversations**: CSA admins can now target conversations to specific user types (admin/owner or regular member) for more relevant content delivery.
* **Welcome to SkyDeck Conversation**: Added a welcome conversation to guide new users through SkyDeck features.&#x20;
* **Message Editing**: Enabled message editing capabilities, enhancing communication flexibility for users.

### Bug Fixes

* **System Message URL Preview Update**: Corrected the display of URLs in system messages for accurate link previews.
* **Migration Conflict Resolutions**: Fixed database migration conflicts to ensure system stability.
* **Task Execution Improvement**: Improved task processing by cleaning up connections before and after running tasks.


==> releases/sep-6th-2024.md <==
---
description: >-
  This release focuses on enhancing snapshot management in GenStudio and improving admin role management and messaging reliability in Control Center.
---

# Sep 6th, 2024

## GenStudio

### Improvements

- **Enhanced Snapshot Management Modal**: The snapshot management interface has been updated for a more user-friendly experience when managing snapshots.
- **Improved Snapshot Titles**: Snapshot titles have been refined for better clarity and organization.

## Control Center

### Improvements

- **Enhanced Admin Role Management**: Admins can now manage user roles more effectively, improving access control and permissions.
- **Improved Messaging Reliability**: The system now better handles concurrent message streams to prevent errors and enhance performance.

==> releases/jun-28th-2024.md <==
---
description: >-
  We’re excited to bring you our latest updates, featuring a new ADMIN role in
  the Control Center and simplified access for admins. Various bug fixes enhance
  your experience.
---

# Jun 28th, 2024

## GenStudio

### Bug Fixes

* **Collaboration Messages Avatar Color**: Resolved an issue where collaboration messages displayed the wrong avatar color in conversations.
* **Edit Modal Title Reload**: Fixed a bug where the title would incorrectly reload in the edit modal.

## Control Center

### New Features

* **ADMIN Role**: We've added a new ADMIN role, providing enhanced control and management capabilities.

### Improvements

* **Removed Email Verification for Admins**: Admins no longer need to go through email verification, simplifying access and management.


==> releases/README.md <==
---
description: Public Declarations, Compliance Alterations, and User Assistance Updates.
---

# Releases

© 2023 SkyDeck AI Inc.


==> releases/oct-30th-2023.md <==
---
description: >-
  We're excited to bring you our latest updates, featuring new user-centric
  features, interface enhancements, and important bug fixes. This includes a new
  Okta sign-in icon, email templates, etc.
---

# Oct 30th 2023

## GenStudio

### **New Features**

* **Okta Sign-In Button Icon**: We've added an icon for the Okta sign-in button, enhancing the visual cues in our user interface.
* **Reset Tools to Default**: You can now reset your tools to their default settings with a simple click of the navigate back button.
* **Message Time-stamping**: We've added a timestamp to messages, enabling you to track the timing of messages more accurately.

### **Improvements**

* **Email Templates in French**: We've updated our email templates in French, improving communication for our French-speaking users.
* **Error Messaging**: We've improved the error message you see when getting subdomain info fails, helping you understand the issue more clearly.
* **Sidebar Item and Conversation Message Layout**: We've refined the layout of the sidebar item and conversation message, improving the overall user interface.
* **Sidebar and Message UI**: We've further refined the sidebar and message UI, ensuring a more user-friendly and visually-appealing experience.
* **Long Conversation Truncation**: Fixed an issue where long conversations were not being truncated properly, improving the readability of conversations.

### **Bug Fixes**

* **Collaboration Conversation Error**: We've fixed an issue that was causing errors when joining a collaboration conversation.
* **Model Selection Default Value**: We've fixed an issue where the model selection was persisting an incorrect default value.
* **Overflow Table in Assistant Message**: We've fixed an overflow issue in the assistant message table, improving its readability and appearance.

## Control Center

### **Bug Fixes**

* **Session Timeout**: Increased session timeout for tenants to 72 hours, ensuring you can stay logged in for longer without interruption.
* **Case Sensitivity Check**: Reviewed and fixed issues with the case sensitivity checking, enhancing the robustness of our system.


==> releases/nov-15th-2024.md <==
---
description: >-
    This release focuses on performance enhancements, new features, and bug fixes to improve your overall experience with GenStudio and Control Center.
---

# Nov 15th, 2024

## GenStudio

### New Features

- **Resizable Sidebars**: Users can now resize sidebars for a customized workspace layout.
- **Stop Collaboration Conversation Button**: Added a button to end collaborative conversations, giving users more control.
- **Sorting by Similarity**: Implemented the option to sort items by similarity for more relevant results.

### Improvements

- **Enhanced UI for Filters Bar**: Improved the user interface for conversation and tool filters for better usability.

### Bug Fixes

- **Fixed Double Scroll Bar**: Resolved an issue where a double scroll bar would appear.
- **Fixed Collapsible Section Titles**: Corrected default titles in collapsible sections to improve navigation.

## Control Center

### New Features

- **Sorting by Similarity**: Introduced the ability to sort results by similarity, enhancing the relevance of your searches.
- **Account Ownership Claims**: Added account ownership claim messages to the Members Page and Homepage, improving account management transparency.

### Improvements

- **Enhanced Embedding Performance**: Improved the performance of embeddings for faster and more efficient data processing.
- **New Blank Tool Supports All Models**: The new blank tool now supports all models by default, offering greater flexibility.
- **Popular Domain Support**: Streamlined domain usage by focusing on the most popular top-level domains.
- **Filtered User Authentication**: User authentication attempts are now filtered by email for increased security.
- **Updated Wording on Embedding Tab**: Revised wording on the embedding tab for better clarity.
- **Verified Business Info in Signup Emails**: Signup email alerts now include information about verified businesses.

### Bug Fixes

- **Fixed Invitation Status Handling**: Resolved an issue where invitation status was incorrectly set when a member role did not exist.
- **Replaced Invalid Symbols in Tags**: Corrected tags by replacing invalid symbols to prevent errors.
- **Limited Search Characters**: Limited the number of characters in search queries to improve reliability.
- **Fixed Invitation Status for Owners/Admins**: Corrected the display of invitation status for owners and administrators.


==> releases/jul-26th-2024.md <==
---
description: >-
  This release adds snapshot and file upload improvements to GenStudio, and
  better login redirection to Control Center. Enjoy smoother workflows and
  smarter management!
---

# Jul 26th, 2024

## GenStudio

### New Features

* **Snapshot Generation:** Now you can easily generate snapshots with just a click, simplifying your workflow.
* **Public Snapshot View:** Share your snapshots publicly with a new view feature for better collaboration.

### Improvements

* **File Upload Tooltip:** Hover over uploaded files to see their full names, making it easier to identify your files.
* **Revamped Message Sending:** Improved the process of sending messages with file uploads for a smoother experience.

### Bug Fixes

* **Text Overflow:** Fixed text overflow issues in the rememberizer integration component for better readability.
* **Breadcrumbs and Default Conversations:** Improved navigation by fixing default conversations and breadcrumbs.

## Control Center

### New Features

* **Enhanced Login Experience:** Now, when you log back in, you'll be redirected to the last page you visited, ensuring a seamless experience.
* **Logout Path Memory:** The system will remember your last visited path on logout, making your next login smoother.

### Bug Fixes

* **Smooth Sign-Up:** Fixed the sign-up redirection to ensure new users are smoothly transitioned to the sign-in page upon registration.


==> releases/aug-2nd-2024.md <==
---
description: >-
  This release adds recommended LLM models, improves snapshot management, and
  enhances performance. Control Center now supports Mistral Large 2 and removes
  FusionAuth.
---

# Aug 2nd, 2024

## GenStudio

### New Features

* **Recommended LLM Models:** Discover our highlighted Large Language Models (LLMs) to make informed choices and enhance your projects.

### Improvements

* **Snapshot Management:** Enjoy an improved snapshot management modal for a better user experience.
* **Display Name Update:** We've updated the display names for models to make them more intuitive.

### Bug Fixes

* **Nullable Account Names:** Fixed an issue where account names could be null, ensuring smoother operation.
* **Duplicate Tooltip:** Fixed the duplicate tooltips for delete and copy buttons for clearer navigation.

## Control Center

### New Features

* **Mistral Large 2 Support:** Added support for Mistral Large 2 in SkyDeck, giving you more options to enhance your work.


==> releases/aug-23rd-2024.md <==
---
description: >-
    This release focuses on enhancing media display, improving document processing, and fixing various bugs to provide a better user experience.
---

# Aug 22nd, 2024

## GenStudio

### Bug Fixes

- **Access to Update Password Page**: Fixed an issue where the Update Password page was not accessible when password authentication was disabled.

## Control Center

### New Features

- **Media Display in Snapshots**: Enabled viewing of media files within snapshots for enhanced content review.

### Improvements

- **High-Definition Image Processing**: Improved image detail when processing images via the LLM API for clearer outputs.

### Bug Fixes

- **Accurate Token Calculation for PDFs with Images**: Corrected token calculation errors to ensure precise processing of PDFs containing images.
- **Improved PDF Compatibility**: Handled JB2 pages in PDFs to enhance document processing reliability.
- **Enhanced Document Upload Reliability**: Removed null characters in uploaded documents to prevent processing issues.
- **Corrected Email Links**: Fixed issues with email URLs to ensure proper navigation from email communications.
- **General Stability Improvements**: Addressed various backend issues to enhance overall system reliability.

==> releases/sep-18th-2023.md <==
---
description: >-
  Welcome to our first major features update for both Control Center and
  GenStudio. This update brings you new features, improvements, and bug fixes to
  enhance your experience.
---

# Sep 18th 2023

## GenStudio

### New Features

* **Data Loss Prevention**: A new feature has been introduced to prevent the loss of conversation data (only Advanced plan).
* **Rapid Onboarding**: A new trial modal has been implemented to help you get onboard faster.
* **Sign Out from All Tabs**: This new feature allows you to sign out from all tabs at once, saving you time and effort.
* **Subdomain Improvement**: The subdomain input field on the sign-in page has been improved for a better user experience.

### Bug Fixes

* **Grammar Correction**: We've corrected a grammatical error to improve the clarity of our content.

## Control Center

### New Features

* **Access Control**: Owners can now revoke access for team members, providing more control over team management.
* **Setup Guide**: A separate page has been created for the Setup Guide to help you get started more easily.
* **French Translation**: The Billing & Payment section now supports French language for easier understanding.
* **Member Seats Information**: We've added more details about 'seats' on the Members page to give you a better understanding of your team structure.

### Bug Fixes

* **Data Accuracy**: We've fixed an issue that was causing duplicate data entries to provide you with more accurate information.


==> releases/oct-18th-2024.md <==
---
description: >-
  This release focuses on enhancing user authentication options, improving tool creation and management, and refining the overall user experience across GenStudio and Control Center.
---

# Oct 18th, 2024

## GenStudio

### New Features

- **Microsoft Sign-In Support**: Added support for signing in with your Microsoft account for a seamless authentication experience.

- **Enhanced Chatbox**: Improved the chatbox with new features for better communication.

- **Partial User Mentioning**: Implemented partial matching for mentioning users, simplifying collaboration in GenStudio.

- **WebSocket Connection Stability**: Enhanced WebSocket connection reliability while using GenStudio, ensuring continuous real-time communication.

- **"Try" Button in Tool Modals**: Added a "Try" button on edit and create tool modals, allowing users to test tools immediately.

- **Mobile Support Tuning**: Improved mobile support for better accessibility on various devices.

- **Updated Logos**: Refreshed the Google and Skydeck logos for a modern look.

- **WebSocket Retry Mechanism**: Implemented a retry mechanism for WebSocket connections of up to 30 minutes, enhancing connectivity.

### Improvements

- **Improved Message Sending UX**: Enhanced user experience when sending messages that take longer to process.

- **Account Settings UI**: Updated the account settings interface for better usability.

### Bug Fixes

- **Markdown Parsing Fix**: Resolved an issue where the app could crash when parsing markdown code blocks with undefined content.

- **Message Editing Resolved**: Fixed a problem that prevented users from editing messages due to code merging issues.

- **Expired Tool Image Fix**: Corrected an issue where tool images would expire improperly.

## Control Center

### New Features

- **Microsoft Sign-In Support**: Added the ability to sign in using your Microsoft account, providing a convenient and secure authentication option.

- **Enhanced Tool Creation**: Introduced the capability to create blank tools, allowing for more customization and flexibility in tool development.

- **SMS Verification Management**: Implemented SMS code management and user SMS verification for improved account security.

- **Expanded Tool Context**: Tools can now include documents and images in their context, enriching the information available during tool use.

- **Optimized Conversation Titles**: Conversation titles are now generated by the language model only when they are empty, keeping your workspace organized.

- **Admin Role Management**: Admins can now set other members as admins, and owners can transfer ownership to admins without approval, streamlining team management.

- **Consistent Password Setting Page**: The "Set Password" page now matches the style of the Sign-In and Sign-Up pages for a consistent user experience.

### Bug Fixes

- **Image Upload Issue Resolved**: Fixed an issue where images exceeding the allowed size could not be uploaded.

- **Streaming Disabled for Specific Models**: Addressed a bug that caused streaming issues with certain models.

- **User Deletion Handling**: GenStudio now redirects to the login page if a user has been deleted or revoked, ensuring proper session management.

==> releases/jul-5th-2024.md <==
---
description: >-
  We’re excited to bring you our latest updates, featuring non-AI content
  submission and @ mentions in GenStudio. Trial accounts can now invite up to 5
  users. Bug fixes included.
---

# Jul 5th, 2024

## GenStudio

### New Features

* **Non-AI Content Submission**: You can now submit non-AI content within GenStudio, making it easier to include diverse types of information in your conversations.
* **@ Mentions Support**: Easily mention other users within your conversations for better collaboration and communication.

### Bug Fixes

* **Rememberizer Integration Email**: Fixed an issue where the Rememberizer integration email text would over-scroll on mouse hover.
* **Bottom Elements Overlap**: Fixed an issue with the z-index of bottom elements to ensure they display correctly.


==> releases/oct-23th-2023.md <==
---
description: >-
  We're excited to bring you major enhancements! We've rolled out a new user
  interface in GenStudio and bolstered real-time communication in Control
  Center, along with several improvements.
---

# Oct 23th 2023

## GenStudio

### New Features

* **GenStudio User Interface**: A brand new user interface has been introduced, designed to offer an improved and more intuitive experience.

### Improvements

* **System Responsiveness**: The system's response time when processing new information has been enhanced.
* **User Interface**: Several aspects of the user interface have been refined, including the behavior of the conversation sidebar, the layout of conversation messages and chat box, and the confirmation modal for deleting tools.
* **Navigation**: The display of navigation breadcrumbs have been further refined for a smoother user experience.
* **Collaboration**: Collaborators can now edit the name of the shared conversation. The display of collaboration members have been further refined for a smoother user experience.
* **Handle Unread Messages:** We've improved how our system manages unread messages, ensuring no important updates are missed.
* **Update Execution Progress:** An enhancement to the execution progress of the smart tool in GenStudio for better user experience.

### Bug Fixes

* **Locale Switching in Conversations**: An issue has been fixed where model selection would disappear when changing languages in new conversations.

## Control Center

### **Improvements**

* **Switching Plans:** We've improved the way our system handles the process of switching between different plans to ensure a smoother, error-free experience.
* **Refactor Payment:** The payment process has been restructured to enhance your checkout experience.

### **Bug Fixes**

* **Identity Provider Description:** Implemented a fix to handle missing descriptions from identity providers.
* **Guide Text on Members Page:** Corrected the guide text on the Members page from "Waiting" to "Wait" for clarity.


==> releases/jul-12th-2024.md <==
---
description: >-
  We're excited to bring you our latest updates, featuring enhanced Rememberizer
  and document/image uploads in GenStudio. Both GenStudio and Control Center now
  have a new authentication system.
---

# Jul 12th, 2024

## GenStudio

### New Features

* **Upload Documents in Conversations**: Easily upload and view various document file types directly within your GenStudio conversation history.
* **Image Upload Functionality**: Now you can upload images through the chat completion API, enhancing your visual communication.
* **New Authentication System:** We have replaced the old FusionAuth system with a new, more secure, and efficient authentication system.

### Improvements&#x20;

* **Enhanced Rememberizer Integration:** Experience a smoother Rememberizer integration flow, making your tasks more efficient.
* **Quick Action Links**: After onboarding, quickly access essential links to get started faster.
* **Revamped Sign-In/Sign-Up Pages**: Enjoy a more user-friendly sign-in and sign-up experience with updated pages.
* **Non-AI Mentions Update**: Improved handling and display of non-AI mentions within the conversations.

### Bug Fixes

* **Rememberizer Integration View:** Addressed a bug in the Rememberizer integration view to ensure smooth functionality.
* **File Display in Conversations**: Limited the max-width for file items to ensure better display in conversation history.
* **Prevent Multiple Clicks**: Prevented users from clicking the Confirm button multiple times in the confirmation modal to avoid duplicate actions.
* **Size Limit Error Handling**: Improved error handling for file uploads that exceed size limits.
* **Uninvited User Error**: Updated error messages and other stylings for uninvited users.

## Control Center

### New Features

* **New Authentication System**: We've replaced the old FusionAuth system with a new, more secure and efficient authentication system.


==> releases/aug-9th-2024.md <==
---
description: >-
  This release brings username/password logins and mobile-friendly snapshots to
  GenStudio. Control Center now supports email logins, email verification, and
  reCAPTCHA for improved security.
---

# Aug 9th, 2024

## GenStudio

### New Features

* **Username/Password Login:** You can now log in using your username and password for a simpler sign-in process.
* **Password Reset:** Easily reset your password if you forget it, making account recovery more convenient.
* **File Uploads to S3:** Upload your files directly to S3 for improved storage and management.
* **Groq Integration:** Integrate with Groq to enhance system capabilities.

### Improvements

* **Snapshot UI for Mobile:** Enjoy a better snapshot viewing experience on mobile devices.
* **Padding Update:** Updated padding for snapshot content to enhance the visual experience.
* **Logo Rendering:** Fixed issues with logo rendering for a more polished look.
* **Uploaded Files:** You can now view uploaded files directly within the platform.
* **SMS Verification Not Required:** Signing in to GenStudio no longer requires SMS verification, simplifying the process.

### Bug Fixes

* **Rememberizer Integration:** Fixed an issue where the Rememberizer integration failed to reconnect.

## Control Center

### New Features

* **Email/Password Login:** Control Center users can now sign up and log in using their email and password, with SMS verification for added security.
* **Email Verification:** Added email verification to ensure secure account setups.
* **reCAPTCHA Integration:** Added reCAPTCHA to authentication pages and the Forgot Password page to enhance security.


==> releases/nov-1st-2024.md <==
---
description: >-
  This release enhances search capabilities, introduces new collaboration features, and includes important bug fixes to improve the overall user experience in GenStudio and Control Center.
---
# Nov 1st, 2024
## GenStudio
### New Features
- **Countdown Feature**: Added a countdown feature to enhance time management during tasks.

### Improvements
- **Optimized Conversation Search**: Improved the performance of conversation search requests for faster results.

### Bug Fixes
- **Conversation Name Update in Breadcrumb**: Fixed an issue where the conversation name in the breadcrumb did not update after renaming.
- **Safari Browser Compatibility**: Corrected the positioning of dialog boxes on Safari for a better user experience.
- **Chat Box Truncation Issue**: Resolved issues where text was being truncated in the conversation chat box.
- **Conversation Deletion UI Update**: Deleting a conversation now correctly updates the user interface.
- **Conversation List Loading on Tall Monitors**: Fixed loading issues of the conversation list on tall monitors.
- **Duplicate Connection Notifications**: Prevented multiple connection success toast notifications for a cleaner interface.
- **Enhanced Message Rendering**: Improved message rendering to exclude ending tags from URL-highlighted text.

## Control Center
### New Features
- **Conversation Search by Collaborator Names**: Users can now search conversations using collaborators' names, making it easier to find relevant discussions.
- **Full-Text Search Within Conversations**: Introduced full-text search within conversation messages, allowing users to search message content directly.
- **Member List Sorting**: Added the ability to sort member lists for easier management and organization.

### Improvements
- **Optimized CSA Conversation Handling**: CSA conversations are now only created for signed-in GenStudio users, enhancing conversation management.

### Bug Fixes
- **Transfer Ownership Button Access**: Resolved an issue where the transfer ownership button was not enabled for the owner.
- **Duplicate CSA Conversations**: Fixed an issue where CSA conversations were being duplicated.
- **Conversation Deletion Stability**: Addressed a race condition bug when deleting a conversation to improve stability.
- **Enhanced Error Handling**: Improved handling of streaming errors for increased reliability.
- **Restored Missing Functions**: Fixed issues caused by missing functions to ensure features work as intended.


==> releases/oct-16th-2023.md <==
---
description: >-
  We're excited to share the latest updates to GenStudio and Control Center.
  We've introduced new features, made significant improvements, and fixed some
  bugs to enhance your user experience.
---

# Oct 16th 2023

## GenStudio

### New Features

* **Collaboration Chat**: You can now view a list of members in a collaborated conversation, chat within the conversation, and view the conversation history. Additionally, collaborators can now edit the name of shared conversations.
* **Display Sender Name**: We've added visual elements to improve your chat experience - the sender's name is displayed in collaboration chats, and if you hover over the sender's avatar, the sender's name will also appear.
* **Multiple Language Support**: We've supported French translations.
* **Logo Updates**: We've added the SkyDeck.ai TM logo to the user.skydeck.ai page and updated the SkyDeck TM logo for auth.skydeck.ai.
* **Enhanced Member List UI**: The user interface for the member list has been enhanced for better readability and navigation.
* **Model Selection Persistence**: Your model selection will now persist across sessions, saving you time and effort.

### Improvements

* **UI Enhancements**: We've made various improvements to the user interface to make it more intuitive and user-friendly.
* **Migration to SSO**: We've migrated Rapid Onboarding to Single Sign-On (SSO) to streamline user access across multiple platforms.
* **Conversation Reordering**: Conversations are now reordered based on their last-updated-at time, enabling you to easily track your recent conversations.

### Bug Fixes

* **Fixed Navigation Bug**: We've fixed a bug that affected navigation to the home page after viewing a collaborated URL.
* **Fixed Message API Logic**: We've fixed a bug in the logic of the messages API to ensure accurate data retrieval and display.
* **Fixed Broken Links**: We've fixed a broken link to the Control Center sign-in page to ensure easy and uninterrupted access.
* **Fixed Styling Issue**: We've addressed a styling issue with the conversation title in Firefox and Safari for better readability.
* **Fixed DLP Modal Cache Issue**: We've fixed a bug where the DLP modal was showing old cache and flashing.
* **Fixed Auto Scroll**: We've fixed an issue that now auto scrolls to the bottom when a conversation is opened.
* **DLP Mode**: We've fixed a bug where the system was checking for sensitive data even when the DLP mode was set to OFF.
* **Owner Rights:** We've fixed a bug that prevented owners from seeing their conversations after SSO migration.

## Control Center

### New Features

* **Billing Enhancements**: We've made major strides in improving the billing experience with features like payment status synchronization with Stripe and an improved Billing UI.
* **Feature Access Control**: We've implemented feature access control in three phases, providing you the flexibility to manage access to different features.
* **Locale Synchronization**: We've improved locale in the Control Center, enhancing the user experience for different locales.

### Improvements

* **Onboarding Guide**: We've made improvements to the onboarding guide, making it easier for new users to navigate through the product.
* **Rapid Onboarding**: We've updated the rapid onboarding feature to only show the popup if the owner is in an Active Free Trial Plan.
* **Timezone Setting**: The system now automatically sets the timezone for the account when a user signs up.

### Bug Fixes

* **Owner Rights**: We've fixed a bug where the owner couldn't assign/delete tags of members. Additionally, we've addressed an issue that prevented owners from re-inviting members.


==> security/bug-bounty-program.md <==
# Bug Bounty Program

### Introduction

SkyDeck.ai is committed to ensuring the security and integrity of our platform. We understand the important role that independent security researchers play in maintaining the security of our platform. We encourage security researchers to examine and test our platform and report any vulnerabilities they may find. In recognition of their efforts, we provide a bug bounty program.

### Scope

The scope of our bug bounty program is limited to vulnerabilities in SkyDeck.ai's platform and services available from the SkyDeck.ai domain. The scope includes all the features, functionalities, and tools mentioned on our website such as the AI Control Center, GenStudio, and any other services hosted on our domain.

### Out of Scope

Any third-party websites, services, or platforms linked from our website are not in the scope of this program. Additionally, any physical attempts to compromise our system or social engineering attempts are also out of the scope.

### Eligible Vulnerabilities

The following categories of vulnerabilities are eligible for our bug bounty program:

* Remote Code Execution (RCE)
* SQL Injection
* Cross-site Scripting (XSS)
* Cross-Site Request Forgery (CSRF)
* Server-side Request Forgery (SSRF)
* Insecure Direct Object References (IDOR)
* Authorization issues
* Information disclosure issues

### Ineligible Vulnerabilities

The following categories of vulnerabilities are not eligible for our bug bounty program:

* Denial of Service (DoS / DDoS) vulnerabilities
* Spamming
* Clickjacking on pages with no sensitive actions
* Unconfirmed reports from automated vulnerability scanners
* Issues related to software or protocols not under SkyDeck.ai's control

### Reporting a Vulnerability

To report a vulnerability, please send an email to security@skydeck.ai with the following information:

* Detailed steps to reproduce the vulnerability
* The potential impact of the vulnerability
* Any potential mitigations or fixes for the vulnerability
* Your contact information

### Reward

We offer a reward of $20 to $100 for vulnerabilities, depending on severity and impact. We determine the exact amount on a case-by-case basis.

### Rules

* You must not violate the privacy of any user data, disrupt our services, or cause harm to our users or systems.
* You must not disclose the vulnerability to anyone else until we've had a reasonable amount of time to fix it.
* You must be the first person to report the vulnerability to be eligible for a reward.

### Legal

By participating in the bug bounty program, you agree to comply with all applicable laws and regulations. You also agree not to exploit any vulnerability you discover for any purpose other than reporting it to us.


==> security/README.md <==
# Security Documentation

This directory contains key security documents for SkyDeck.ai:

1. [Bug Bounty Program](./bug-bounty-program.md)
2. [Security Practices](./skydeck.ai-security-practices.md)

## Bug Bounty Program

Outlines our program for security researchers, including:
- Scope and eligible vulnerabilities
- Reporting process and rewards
- Rules and legal considerations

## Security Practices

Describes our security measures as of November 1st, 2023, covering:
- Data and product security
- Access management
- Employee education
- Vendor security


==> security/skydeck.ai-security-practices.md <==
---
description: As of November 1st, 2023
---

# SkyDeck.ai Security Practices

### **Data Security**

* All our components are **hosted within a secure VPC** and data is encrypted at rest with **AWS KMS using AES-256**. Furthermore, we employ **TLS 1.2 or higher** for encryption in transit.
* Our **application secrets** are also securely encrypted at rest with KMS and AES-256.

### Enhanced Conversation Security

In addition to encryption at rest we provide optional enhanced security features around user conversation content and conversation names.

* We can provide a second independent layer of encryption of conversation data at rest. The advantage of this approach is redundant security. But this comes at a cost of an extra layer on decryption when conversations are displayed or used in searches. \
  \
  This is an option in Control Center for enterprise customers.\

* Every user can hold the encryption keys to their own conversation data at rest. In this way we only have access to their conversation data while they are logged into our system. When they log out, the data is encrypted and we have no record of the decryption key. We use an independent hash of the user's password to implement that encryption. We do not store the password, and the hash exists only while the user is logged in.  \
  \
  The advantage of this approach is that no one can access user data if the user _simply stops using_ the platform.  The data is effectively gone when not actively in use by the user. The disadvantage of this approach is that if the user loses their password they lose all of their conversation data without any recourse. Another disadvantage is that displaying and working with conversation data will be slower and more _laggy_. Also, changing the user password will be a slower process because all data will need to be decrypted and re-encrypted. \
  \
  This is an optional feature for enterprise customers.&#x20;

### **Product Security**

* SkyDeck.ai implements regular **penetration testing** and conducts **vulnerability scanning** at crucial stages of our Secure Development Lifecycle (SDLC).
* Our security strategies include both **black-box and grey-box testing** during penetration testing.
* We utilize various methods to ensure the security of our system, including **Static analysis, Software composition analysis, Malicious dependency scanning, Dynamic analysis, and Network vulnerability scanning**.

### **Access Management**

* We leverage **reputed SSO services** for securing our identity and access management.
* Access to applications is role-based and is automatically revoked upon the end of employment.
* Any further access must comply with the policies set for each application.

### **Data Protection**

* We guarantee that all customer data is **encrypted both at rest and during transit**.
* **AWS Key Management System (KMS)** is responsible for managing our encryption keys.

### **Security Education**

* Comprehensive security training is provided to all employees during their onboarding process and is refreshed annually through educational modules within our platform.
* Our team shares regular threat briefings in communication channels to keep them informed of important security updates.

### **Vendor Security**

* We ensure secure remote access to internal resources using **WireGuard**.
* To provide an additional layer of protection, we also use **malware-blocking DNS servers** to safeguard employees and their endpoints while browsing the internet.


==> notices/terms-of-use.md <==
---
description: As of July 22, 2023
---

# Terms of Use

### 1. Introduction

This document outlines the terms of use ("Terms") for SkyDeck.ai, including our administrative tools at admin.skydeck.ai and the GenStudio tools provided to the user in a custom or generally available domain within \*.skydeck.ai and any other pages that link to these Terms (the "Sites"). These Terms constitute a binding legal agreement between you, as the user, and SkyDeck AI Inc. ("SkyDeckAI"), as the provider of this platform. By accessing or using this platform, you affirm your agreement to abide by these Terms.

### 2. Acceptance of Terms

By accessing or using any part of the Sites, you confirm that you are at least 18 years old, have read and understood these Terms of Use and the SkyDeckAI Privacy Policy (which is incorporated into these Terms by reference), and agree to be legally bound by them.

In these Terms, "we," "us," and "our" refer to SkyDeckAI, while "you" refers to both you as an individual and any entity you represent. By using our platform, you confirm that you can accept these Terms on behalf of any such entity, thereby binding it to these Terms.

### 3. Contact Information

SkyDeck AI Inc. is the entity you are contracting with. Our mailing address and contact information are as follows:

SkyDeck AI Inc.\
548 Market St. PMB38234\
San Francisco, CA 94104\
Phone: 1.415.744.1557\
For legal inquiries: [legal@skydeck.ai](mailto:legal@skydeck.ai)

### 4. License Grant and Proprietary Rights

Subject to your full compliance with these Terms, any other policies or restrictions posted on the platform, and your timely payment of any fees agreed upon with SkyDeckAI, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the platform.

Unless otherwise noted, all content made available through the platform (including but not limited to software, submissions, information, user interfaces, graphics, trademarks, logos, images, artwork, videos, documents, and the overall "look and feel" of the platform) is owned, controlled, or licensed by or to SkyDeckAI. This content is protected by various laws including trade dress, copyright, patent and trademark laws, and other intellectual property rights and unfair competition laws. SkyDeckAI reserves all rights in and to this content.

Any unauthorized reproduction, redistribution, use, or exploitation of any part of the platform is expressly prohibited by law and may result in civil or criminal penalties.

### 5. Account Responsibility

If you open an account on the platform, you are responsible for maintaining the confidentiality of your account information and for all activity under your account. By accepting these Terms and creating an account, you agree to our collection, use, and disclosure of your information as described in the Privacy Policy. No one under age 18 may register for an account or provide any personal information to SkyDeckAI or the platform. Notify SkyDeckAI immediately of any unauthorized account use. You may be held liable for losses due to unauthorized use. Do not use anyone else’s account without pre-approval from SkyDeckAI Account registration is void where prohibited.

### 6. User Rights and Responsibilities

As a user, you have the right to use our AI tools for your legitimate business purposes. You are responsible for not misusing or abusing the tools, infringing on others' rights, or violating any laws. You are required to comply with all applicable laws and regulations in your use of the platform.

### 7. Provider Rights and Responsibilities

We, SkyDeckAI., reserve the right to monitor use, enforce these Terms, and update the platform and its terms as needed. We are responsible for providing a reliable service, respecting users' privacy, and responding to any issues or concerns.

### 8. Content Rules

Content generated by our AI tools is owned by you, the user, subject to any restrictions or conditions specified in these Terms. The content should not be used for illegal or inappropriate purposes.

### 9. Misuse and Breach

Misuse or breach of these Terms can result in penalties, including but not limited to, suspension or termination of access to the platform, legal action, and/or damages.

### 10. Disclaimer of Warranties

You agree that your use of the platform, including any content, is at your sole risk. The platform and content are provided on an “as is” and “as available” basis. SkyDeckAI makes no warranties, express or implied, and disclaims all possible warranties, including without limitation implied warranties of merchantability, fitness for a particular purpose, title and non-infringement. SkyDeckAI does not warrant that the platform or content are accurate, continuously available, complete, reliable, secure, current, error-free, or free of viruses or other harmful components.

### 11. Indemnification

You agree to indemnify, defend, and hold harmless SkyDeckAI, its officers, directors, shareholders, successors, employees, agents, subsidiaries, and affiliates, from any actual or threatened third-party claims, demands, losses, damages, costs, liability, proceedings, and expenses (including reasonable attorneys' and expert fees and costs of investigation), to the fullest extent permitted by law. This includes any issues arising out of or in connection with your use of the platform, your breach of these Terms, your violation of any law or regulation, your violation of any third-party rights, or the disclosure, solicitation, or use of any personal information by you, whether with or without your knowledge or consent. SkyDeckAI reserves the right to assume exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with SkyDeckAI's defense of such a claim. You may not agree to any settlement affecting SkyDeckAI. without SkyDeckAI's prior written consent.

### 12. Suspension or Termination of Access

SkyDeckAI reserves the right to suspend or terminate your access to any or all of the platform, with or without notice, for any reason. This includes but is not limited to breaches of these Terms, requests by law enforcement or other government agencies, discontinuation or significant modification of the platform, or unexpected technical issues. SkyDeckAI is not liable for any termination of your access to the platform. Any rights and obligations under these Terms that should naturally continue beyond your use of the platform will survive any termination of your access.

### 13. Limitation of Liability

To the maximum extent permitted by law, you agree to bear the entire risk arising out of your access to and use of the platform and content. SkyDeckAI or any of its directors, employees, agents or suppliers will not be liable for any special, indirect, incidental, exemplary, consequential or punitive damages of any kind arising out of or in connection with the platform, and any content, services or products included on or otherwise made available through the platform. SkyDeckAI's total cumulative liability to you arising out of or in connection with these Terms, or from the use of or inability to use the platform, will not exceed one hundred dollars ($100.00).

### 14. Dispute Resolution

Any disputes, controversies, or claims arising out of or in connection with these Terms, including their validity, invalidity, breach, or termination, shall be resolved by arbitration in accordance with the rules of the American Arbitration Association. The place of arbitration shall be San Jose, California, and the proceedings shall be governed by the laws of California. The arbitration award shall be final and binding upon both parties.

### 15. Changes to the Terms

SkyDeckAI reserves the right, at our discretion, to change these Terms at any time. Changes will be communicated to users through appropriate channels, such as email notifications, website banners, or in-app messages, and users will be given a reasonable period of time to accept the new terms.

### 16. Translations

For your convenience we provide machine translations of this document in languages other than English. At any time when there is a conflict or contradiction between the original English language version and a version in another language, the English language version will apply and prevail. By relying on a non-English translation of this document you accept that there could be unintended differences between the translated text and the actual terms to which you have agreed.


==> notices/privacy-policy.md <==
---
description: As of July 20, 2023
---

# Privacy Policy

## SkyDeck AI Inc. Privacy Policy

SkyDeck AI Inc. ("SkyDeck AI," "we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you use the SkyDeck.ai generative AI platform (our "Service") and our practices for collecting, using, maintaining, protecting, and disclosing that information.

### Information We Collect About You and How We Collect It

We collect several types of information from and about users of our Service, including:

* Personal information, such as your name, email address, and other identifiers by which you may be contacted online or offline.
* Technical data, such as information about your internet connection, the equipment you use to access our Service, and usage details.
* API keys and credentials for accessing third-party vendor generative AI models provisioned by you.

We collect this information:

* Directly from you when you provide it to us.
* Automatically as you navigate through the Service. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.

### How We Use Your Information

We use information that we collect about you or that you provide to us, including any personal information:

* To provide you with the Service and its contents, and any other information, products or services that you request from us.
* To fulfill any other purpose for which you provide it.
* To provide you with notices about your account.
* To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.
* To notify you about changes to our Service or any products or services we offer or provide through it.
* To improve our Service, products, or services.
* To allow you to participate in interactive features on our Service.

### Disclosure of Your Information

We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:

* To third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
* To fulfill the purpose for which you provide it. For any other purpose disclosed by us when you provide the information.
* With your consent.

### Your Rights

You have certain rights under applicable data protection laws. These may include the right to:

* Request access to your personal data.
* Request correction of the personal data that we hold about you.
* Request erasure of your personal data.
* Object to processing of your personal data.
* Request restriction of processing your personal data.
* Request transfer of your personal data.
* Right to withdraw consent.

### Data Security

We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions and API keys will be encrypted using SSL technology.

### Changes to Our Privacy Policy

It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Service home page.

### Contact Information

To ask questions or comment about this privacy policy and our privacy practices, contact us at:

SkyDeck AI Inc.\
548 Market St. PMB38234\
San Francisco, CA 94104\
Phone: 1.415.744.1557\
Email: [legal@skydeck.ai](mailto:legal@skydeck.ai)


==> notices/cookie-notice.md <==
---
description: As of July 20, 2023
---

# Cookie Notice

Notice of Cookie Use While you engage with SkyDeck AI Inc.'s websites and applications (collectively referred to as "**Sites**"), our data processing platform goods and services ("**Platform Services**") and our regular business operations, including events, sales, and marketing (collectively referred to as "**SkyDeck Services**"), we utilize automated data collection tools such as Cookies, Web Beacons, and other identifiers for the reasons detailed below.

"**Cookies**" are small text files downloaded onto your hard drive by a web server when you visit our Sites or use our Services. These cookies may either be first party cookies (set by us) or third party cookies (set by others), with several types (explained in the subsequent table).

"**Web beacons**" (also known as web bugs, pixel tags, or clear GIFs) are small graphics with a unique identifier, used on our Sites and Services for various purposes. These include delivering or communicating with cookies, tracking and measuring the performance of our Sites and Services, and monitoring the number of visitors on our Sites and Services. Unlike cookies, which are stored on the user’s hard drive, web beacons are typically embedded invisibly on web pages (or in an email).

**What types of cookies are used and what is their function?**

The following provides a representative but non-exhaustive overview of the cookies we might use:

**Cookie Types**

**Essential Cookies** These are necessary for certain features of our Sites and Services, and cannot be disabled in our systems. They are usually activated in response to actions taken by you, such as setting your privacy preferences, logging in, or filling out forms. If you block or alert these cookies on your browser, certain parts of the site may not function properly.

**Performance Cookies** These help us count visits and identify traffic sources, enabling us to enhance the performance of our site. They assist us in identifying the most and least visited pages and understanding visitor behavior on the site.

**Functionality Cookies** These enable our Sites and Services to offer improved functionality and personalization. They may be set by us or third-party providers whose services we have integrated into our pages. If these cookies are blocked, some or all of these services may not work properly.

**Advertising Cookies** These may be set through our Sites by our advertising partners. They can be used by these third parties to create a profile of your interests and display relevant ads on other sites. If these cookies are blocked, you might see less personalized advertising.

**What other identifiers are used and what is their function?**

Some of our Sites utilize Google Analytics, a web analytics service offered by Google, Inc. Google Analytics uses cookies to help us understand how users interact with our Sites. The data gathered by the cookies regarding your usage of our Sites (including your IP address) and collected through Google Analytics ("Google Analytics Data") may be transferred to and stored by Google on servers in the United States. Google utilizes the Google Analytics Data on behalf of SkyDeck AI Inc. to evaluate your usage of our Sites, compile reports for us on website activity, and offer other services relating to website activity and internet usage. Google may also use the collected Google Analytics Data to contextualize and personalize the ads of its own advertising network. You can opt out of Google’s collection and use of the Google Analytics Data by downloading and installing the browser plug-in available at [https://tools.google.com/dlpage/gaoptout](https://tools.google.com/dlpage/gaoptout).

If you have further inquiries, please see our [Privacy Policy](privacy-policy.md) or contact us at legal@skydeck.ai.



==> notices/README.md <==
---
description: Legal, Regulatory, and Customer Support Notices
cover: >-
  https://images.unsplash.com/photo-1526958097901-5e6d742d3371?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw1fHxoZWxwfGVufDB8fHx8MTY5MDIwMTI2NXww&ixlib=rb-4.0.3&q=85
coverY: 0
---

# Introduction



© 2023 SkyDeck AI Inc.


==> integrations/README.md <==
# Integrations



==> integrations/llms-and-databases/database-integration.md <==
---
description: Integration with Amazon AWS hosted databases.
---

# Database Integration

## **Purpose**

\
By adding one or more integrations to public or private databases you enable advanced apps and other capabilities to securely query your data using the power of AI agents.

### **Support**

SkyDeck AI currently supports Postgresql databases and Redshift datawarehouses hosted on AWS. It is not particularly hard to support other data sources, but we did have to start somewhere. If you have another data source you wish to use, please reach out to support to prioritize an integration that meets your needs.

### **Directions**

**The following are the steps to integrate your database with SkyDeck AI:**

1. Obtain or put together a connection URL.
2. Add the connection URL to the Integrations section in Control Center.
3. Assign that integration to a smart tool or AI agent in the Tools section of Control Center.

### Connection URL

If you are lucky, a database admin hands you a ready-to-use standard URL that points to your database. If not, you will need to put one together to add access SkyDeck access to your database. These directions will make that task rather easy.

\
\
To set up a connection URL to a PostgreSQL or Amazon Redshift database hosted on Amazon AWS, you need several pieces of information about your database: the host, port number, database name, username, and password. Here's a step by step guide:

#### PostgreSQL Database

1. **Host**: This is the address of the server where your database is hosted. It should be something like `your-db-instance-name.region-name.rds.amazonaws.com` for AWS RDS PostgreSQL or `your-cluster-name.region-name.redshift.amazonaws.com` for Amazon Redshift.
2. **Port Number**: This is the port on which your database server is listening. The default port for PostgreSQL is 5432, and for Amazon Redshift, it's 5439.
3. **Database Name**: This is the name of the database you want to connect to.
4. **Username & Password**: These are the credentials you need to authenticate with the database.

The general format of a connection URL is as follows:

||CODE_BLOCK||
protocol://username:password@host:port/database
||CODE_BLOCK||

Here's how you can create a connection URL:

1.  Start with the protocol, which is 'postgresql' for PostgreSQL and 'redshift' for Amazon Redshift:

    ||CODE_BLOCK||
     postgresql://
    ||CODE_BLOCK||
2.  Next, add your username and password, separated by a colon. If your username or password includes special characters, you'll need to URL encode them. For example, if your username is 'user' and your password is 'pass', it becomes:

    ||CODE_BLOCK||
     postgresql://user:pass@
    ||CODE_BLOCK||
3.  Then, add your host and port, separated by a colon:

    ||CODE_BLOCK||
     postgresql://user:pass@your-db-instance-name.region-name.rds.amazonaws.com:5432/
    ||CODE_BLOCK||
4.  Finally, add your database name:

    ||CODE_BLOCK||
     postgresql://user:pass@your-db-instance-name.region-name.rds.amazonaws.com:5432/your-database-name
    ||CODE_BLOCK||

That's it! You've created your connection URL. Be sure to replace 'user', 'pass', 'your-db-instance-name.region-name.rds.amazonaws.com', '5432', and 'your-database-name' with your actual database details.

Remember not to share this URL with anyone, as it contains sensitive information like your username and password.

#### RedShift DWH

The URL for a Redshift database would be very similar, but with a couple of key differences:

1. The protocol would be 'jdbc:redshift' instead of 'postgresql'. This is because JDBC (Java Database Connectivity) is commonly used to connect with Redshift databases.
2. The default port for Redshift is 5439, not 5432.

Here's the general format for a Redshift connection URL:

||CODE_BLOCK||
jdbc:redshift://host:port/database
||CODE_BLOCK||

So, if you were to create a connection URL for Redshift, it would look something like this:

||CODE_BLOCK||
jdbc:redshift://user:pass@your-cluster-name.region-name.redshift.amazonaws.com:5439/your-database-name
||CODE_BLOCK||

Remember to replace 'user', 'pass', 'your-cluster-name.region-name.redshift.amazonaws.com', '5439', and 'your-database-name' with your actual database details.

### Adding Your Integration

Paste your connection URL in the "Credentials" section of Add Integration. You can select PostgreSQL for either a postgresql or Redshift database. You can use any name you want for the Integration, but we suggest you pick something that will help you identify the specific database associated.

<figure><img src="../../.gitbook/assets/Add a DB Integration to Control Center.png" alt=""><figcaption></figcaption></figure>

### Accessing Your Data Through SkyDeckAI

Today users can access your database using the Analyst tools available to them in GenStudio. As an admin you can assign an integration to an analyst tool in Control Center's Tools section. You can then assign tags to that tool to ensure only authorized people have access to that tool and its database access in their SkyDeck AI GenStudio workspace.

<figure><img src="../../.gitbook/assets/Adding a DB Integration to Analyst Bob.png" alt=""><figcaption><p>Add a database integration to a tool that supports it in order to share access with your members of your organization.</p></figcaption></figure>

#### Security Notes

* Create a read-only user (role) on your database to use with your SkyDeck AI integration. SkyDeck does not need write to your system and it is safest if you use credentials that do not have more rights than necessary. However, the user should be able to query the structure of your data system in order to understand it.
* Do not share the access URL as it contains confidential connection information.
* You can limit which users in your organization have access to each database by ensuring that tools that use it, such as a copy of Analyst Bob, are assigned tags that correspond only to uers who you wish to have access.


==> integrations/llms-and-databases/together-ai-integration.md <==
---
description: Together AI integration with the SkyDeck AI Platform
---

# Together AI Integration

## **Together AI Integration with the SkyDeck AI Platform**

Together AI hosts a wide range of open source large language models on their platform. Integrating with SkyDeck AI will give you access to all the chat models of Together AI.

### **Generating a Together AI API Key**

\
To use the Together AI API, you need to generate an API key by following these 3 simple steps:

1. Create a free account on the Together AI website by signing up here: [https://api.together.xyz/](https://api.together.xyz/).&#x20;
2. Once you've signed up, visit your API key page here: [https://api.together.xyz/settings/api-keys](https://api.together.xyz/settings/api-keys). You should find your API key.
3. Once you have your API key, you can use Together AI's LLM in the SkyDeck AI Platform.

### **Adding the API Key to the SkyDeck AI Control Center**

API Keys are added to the Control Center Integrations Screen

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you are signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or click on the “Integrations” in the menu
3. Click on “+Add Integrations” button, select Together AI as the integration service, and enter your API Key in the Credential field.

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Together AI models.

NOTE: You will be charged based on your monthly usage of the Together AI API. The cost structure is based on the number of tokens used. For more details on their pricing policy, visit [https://api.together.xyz/playground](https://api.together.xyz/playground).


==> integrations/llms-and-databases/openai-integration.md <==
---
description: OpenAI (ChatGPT) integration with the SkyDeck AI Platform
---

# OpenAI Integration

## **OpenAI Integration with the SkyDeck AI Platform**

\
ChatGPT is an AI-powered chatbot developed by OpenAI. It is based on the GPT-4 language model and can generate human-like text, translate languages, and write different kinds of creative content. ChatGPT is a powerful tool for a variety of applications. OpenAI is a non-profit research company that develops and deploys AI in a safe and responsible way. Integrating with SkyDeck AI will give you access to all current models of ChatGPT.

### **Generating an OpenAPI API Key**

\
To use the OpenAI API, you need to generate an API key by following these 3 simple steps:

1. Create a free account on the OpenAI website by signing up here: [https://beta.openai.com/signup. ↗](https://beta.openai.com/signup) You can use your Google or Microsoft account to sign up, or create an account using an email/password combination.
2. Once you've signed up, visit your OpenAI key page here: [https://beta.openai.com/account/api-keys, ↗](https://beta.openai.com/account/api-keys) or click the menu item "View API keys."
3. Click the "Create new secret key" button to generate a new API key. This key gives you access to both GPT-4 and ChatGPT models, so you don't need separate API keys.

All done! Once you have your API key, you can use ChatGPT's LLM in the SkyDeck AI Platform.

### **Adding the API Key to the SkyDeck AI Control Center**

API Keys are added to the Control Center Integrations Screen

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you are signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or click on the “Integrations” in the menu
3. Click on “+Add Integrations” button and enter your API Key as instructed.

That’s it! You can now use the powerful SkyDeck AI tools and directly access the GPT-4 and ChatGPT models.

NOTE: You will be charged based on your monthly usage of the ChatGPT API. The cost structure is based on the number of tokens used, with 750 words (approximately 1000 tokens) being the minimum chargeable unit. The cost per 1000 tokens varies depending on the model used, with the current ChatGPT default model being GPT-3.5 Turbo. As of July 2023 you can start experimenting with $5 in free credit that can be used during your first 3 months. ChatGPT pricing for general use is very low, but if you plan to use the service regularly, you must add your credit card information and are advised to set up a usage limit on the OpenAI website.

OpenAPI ChatGPT Pricing [https://openai.com/pricing ↗](https://openai.com/pricing)


==> integrations/llms-and-databases/huggingface-integration.md <==
---
description: Using SkyDeck.ai as the front end for your HuggingFace models.
---

# HuggingFace Integration

After deploying your inference endpoint on HuggingFace, you should see the following user interface:

<figure><img src="../../.gitbook/assets/Screenshot 2023-09-25 at 10.08.46.png" alt=""><figcaption></figcaption></figure>

On this page, you will need the following information:

* Endpoint URL
* Model Repository
* API token. You can view this by checking the "Add API token" box in the Call Examples code block.

In addition to these, you will also need the context window of your model. This can be found on the model's information page.

After collecting this information, format it into JSON as shown in the example below:

||CODE_BLOCK||json
{
    "api_key":"your_api_key",
    "endpoint": "your_api_endpoint",
    "model_name": "meta-llama/Llama-2-7b-chat-hf",
    "context_window": 4096
}
||CODE_BLOCK||

Next, paste this into the Credential field of your integration.

<figure><img src="../../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

Once the credential is successfully validated, you should see your HuggingFace model listed in GenStudio's model list:

<figure><img src="../../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

### Scaling HuggingFace Endpoints to Zero

Scaling to 0 is a dynamic feature offered by Inference Endpoints, designed to optimize resource utilization and costs. By intelligently monitoring request patterns and reducing the number of replicas to none during idle times, it ensures that you only use resources when necessary.

However, this does introduce a cold start period when traffic resumes, and there are a few considerations to be mindful of. For an in-depth look at how this feature functions, its benefits, and potential challenges, please refer to [HuggingFace's guide on Autoscaling](https://huggingface.co/docs/inference-endpoints/autoscaling).

### Supported models

At the moment, we only support endpoints for models with a `text-generation` tag that are deployed as `text-generation-inference` containers. We are working to expand our list of supported models.

<figure><img src="../../.gitbook/assets/image (48).png" alt=""><figcaption><p>LLaMA 2 is a model with Text Generation tag</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (49).png" alt=""><figcaption><p>Make sure you select Text Generation Inference as the container type during deployment</p></figcaption></figure>


==> integrations/llms-and-databases/README.md <==
# LLMs and Databases



==> integrations/llms-and-databases/perplexity-integration.md <==
# Perplexity Integration

### Overview

Perplexity is an advanced AI language model that leverages large language models to provide comprehensive and factual responses, making it a powerful tool for various applications, including content generation, language translation, summarization, and more.

### Generating a Perplexity API Key

To integrate Perplexity with the SkyDeck AI Platform, you need to generate an API key:

1. **Create an Account**: Register for a free account on the [Perplexity website](https://www.perplexity.ai/).
2. **Access API Keys**:
   * Log in to your Perplexity account.
   * Navigate to the settings.
   * Click on the API tab.
3. **Generate a New Key**:
   * Click on the "+ Generate" button to create a new API key.

### Adding the API Key to SkyDeck AI

To integrate Perplexity with SkyDeck AI, follow these steps:

1. **Log in to SkyDeck AI**: Access your SkyDeck AI Admin account.
2. **Navigate to Integrations**: Go to the integrations page.
3. **Add Perplexity Integration**:
   * Click the "+Add Integration" button.
   * Select "Perplexity" from the list of available integrations.
   * Enter your Perplexity API Key.
   * Configure any additional settings, such as selecting the desired Perplexity model.
4. **Save and Confirm**: After entering the API key and configuring settings, click "Save" to complete the integration.

### Supported Models

Perplexity offers several models, each optimized for different use cases and performance requirements. The latest models (as of September 2024) that SkyDeck supports:

#### Online Models

* **`llama-3.1-sonar-small-128k-online`**: Suitable for general online queries with moderate complexity.
* **`llama-3.1-sonar-large-128k-online`** and **`llama-3.1-sonar-huge-128k-online`** : Designed for more complex online queries requiring deeper contextual understanding.

#### Chat Models

* **`llama-3.1-sonar-small-128k-chat`**: Ideal for chat-based interactions with moderate complexity.
* **`llama-3.1-sonar-large-128k-chat`**: Optimized for more complex chat-based interactions.

### Verification of Successful Integration

After integrating Perplexity with the SkyDeck AI Platform, you should see Perplexity models available for selection in your SkyDeck AI GenStudio. The presence of these models indicates a successful integration.

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

### Conclusion

Integrating Perplexity with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models to deliver accurate and reliable answers. Ensure you stay updated with the latest models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Perplexity Documentation](https://docs.perplexity.ai/) or contact their support team.


==> integrations/llms-and-databases/groq-integration.md <==
# Groq Integration

## Overview

Groq is revolutionizing the landscape of artificial intelligence with its fast AI inference capabilities, designed to empower developers and enterprises with instant intelligence. GroqCloud allows seamless integration with openly-available models like Llama 3.1, enabling users to harness the power of AI with minimal latency. With its innovative Language Processing Unit (LPU), Groq delivers unparalleled speed, affordability, and energy efficiency, fundamentally transforming how AI models are deployed in the cloud and on-premises. By making advanced AI technology accessible to all, Groq is driving a new wave of innovation, productivity, and discovery, while maintaining a commitment to open-source principles.

## Generating a Groq API Key

To use the Groq API, you need to generate an API key by following these simple steps:

1. Go to **GroqCloud** at [https://console.groq.com/](https://console.groq.com/) and sign in. If you don't have an account, you can sign up there.
2. Once you have signed in, go to **API Keys**. You can use a Free Plan with low rate limits APIs, or you can upgrade to higher plans for large-scale needs.
3. Click on the **Create API key** button to generate a new API key. Provide a name for the token. Copy the token for later use as it will not be shown again.

All done! Once you have your API key, you can use Groq's LLMs in the SkyDeck AI Platform.

## Adding the API Key to the SkyDeck AI Control Center

API Keys are added to the Control Center Integrations Screen.

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you have signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or select **Integrations** in the sidebar.
3. In the LLM Integration page, click on the **Add Integration** button, choose Groq as the Integration Service and enter your API Key in the Credentials key.

<figure><img src="../../.gitbook/assets/groq-integration.png" alt="" width="563"><figcaption></figcaption></figure>

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Groq's models.

## Conclusion

Integrating Groq with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models from Groq to deliver accurate and reliable answers. Ensure you stay updated with the latest models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Groq Documentation](https://console.groq.com/docs/) or contact their support team.


==> integrations/llms-and-databases/vertex-ai-integration.md <==
# Vertex AI Integration

## Overview

Vertex AI is a fully-managed, unified AI development platform for building and using generative AI. Access and utilize Vertex AI Studio, Agent Builder, and 150+ foundation models. After integrating Skydeck.AI with Vertex AI, you will be able to use the Gemini models from Google in your workspace.

## Generating a service account credential

To enable Vertex AI and generate the necessary credential, you can follow these steps:

1. **Set up your Google Cloud account:** Go to the [Google Cloud Console](https://console.cloud.google.com/) and sign in with your Google account.
2. **Select a project:** At the top of the page, click on the project dropdown and select an existing project. If you don’t have a project, you’ll need to create one by clicking on "New Project" and following the prompts.
3. **Enable Vertex AI API:** Go to the [APIs & Services Dashboard](https://console.cloud.google.com/apis/dashboard) (you can choose it from the Menu in the Google Cloud Console), click on the "**+ ENABLE APIS AND SERVICES**" button, search for "**Vertex AI API**" in the API Library, and then enable the API for your project. Please note that Vertex AI API requires a project with a billing account, so you have to set it up [here](https://console.cloud.google.com/billing). You will be charged based on your usage of Vertex AI, so please refer to [their documentation](https://cloud.google.com/vertex-ai) for the latest updates.
4. **Create a Service Account and get the credential:** Go to the **IAM & Admin** section to create a new service account, assign the appropriate role to use Vertex AI (typically the Vertex AI Administrator role), and then generate a JSON key. You can visit this [link](https://developers.google.com/workspace/guides/create-credentials#service-account) for more details. Save the key securely and see the following section to add it to SkyDeck.AI platform. Here is a sample JSON key:

||CODE_BLOCK||json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "your-private-key",
  "client_email": "the-email-of-the-service-account",
  "client_id": "the-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "your-client_x509_cert_url",
  "universe_domain": "googleapis.com"
}
||CODE_BLOCK||

## Adding the credential to SkyDeck AI

API Keys are added to the Control Center Integrations Screen

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you have signed in, visit the your Integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or select **Integrations** on the sidebar.
3. In the LLM Integration page, click on the **Add Integration** button, choose **VertexAI** as the Integration Service, and enter your entire JSON Key in the Credentials field.

<figure><img src="../../.gitbook/assets/vertex-ai-integration (1).png" alt="" width="563"><figcaption></figcaption></figure>

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Gemini models.

## Conclusion

Integrating Vertex AI with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models from Google to deliver accurate and reliable answers. Ensure you stay updated with the latest Gemini models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs) or contact their support team.


==> integrations/llms-and-databases/mistral-integration.md <==
# Mistral Integration

## Overview

Mistral is an AI research company that focuses on developing cutting-edge large language models with a strong emphasis on efficiency and scalability. Their mission is to make frontier AI ubiquitous, and to provide tailor-made AI to all the builders. This requires fierce independence, strong commitment to open, portable and customizable solutions, and an extreme focus on shipping the most advanced technology in limited time.

## Generating a Mistral API Key

To use the Mistral API, you need to generate an API key by following these simple steps:

1. Go to **La Plateforme** of Mistral at [https://console.mistral.ai/](https://console.mistral.ai/) and sign in. If you don't have an account, you can sign up there.
2. Once you have signed in, go to **API Keys**. Please note that you need to set up a [Billing Plan](https://console.mistral.ai/billing/) first to generate and use Mistral API keys.
3. Click on the **Create new key** button to generate a new API key. Provide a name and an expiration day for the token. Copy the token for later use as it will not be shown again.

All done! Once you have your API key, you can use Mistral's LLMs in the SkyDeck AI Platform.

{% hint style="info" %}
Note that the API key may take a few minutes to be usable, so you might see an error message if you immediately add it into the Control Center. Wait a few minutes after generating an API key before integrating Mistral with SkyDeck AI.
{% endhint %}

## Adding the API Key to the SkyDeck AI Control Center

API Keys are added to the Control Center Integrations Screen.

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you have signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or select **Integrations** in the sidebar.
3. In the LLM Integration page, click on the **Add Integration** button, choose Mistral as the Integration Service and enter your API Key in the Credentials key.

<figure><img src="../../.gitbook/assets/mistral-integration.png" alt="" width="563"><figcaption></figcaption></figure>

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Mistral's models.

## Conclusion

Integrating Mistral with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models from Mistral to deliver accurate and reliable answers. Ensure you stay updated with the latest Mistral's models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Mistral Documentation](https://docs.mistral.ai/) or contact their support team.


==> integrations/llms-and-databases/anthropic-integration.md <==
# Anthropic Integration

## Overview

Anthropic is an AI research organization focused on building reliable and interpretable artificial intelligence systems that prioritize safety and alignment with human values. The company is dedicated to addressing the ethical and safety challenges posed by increasingly powerful AI systems, working to ensure that their models behave predictably and in accordance with human intentions.

Anthropic's LLMs, notably the "Claude" series, are designed to process and generate human-like text for a wide range of applications, including natural language understanding, reasoning, and dialogue. These models are developed with a focus on safety and usability, incorporating mechanisms to prevent harmful or biased outputs. As Anthropic continues to evolve its LLMs, it remains committed to creating AI systems that are transparent, interpretable, and aligned with ethical standards, making them useful for both commercial and research purposes.

## Generating an Anthropic API Key

To use the Anthropic API, you need to generate an API key by following these simple steps:

1. Go to the Anthropic Console at [https://console.anthropic.com/](https://console.anthropic.com/) and sign in. If you don't have an account, you can sign up there.
2. Once you have signed in, go to **Settings** and select [**API keys**](https://console.anthropic.com/account/keys).
3. Click the **Create Key** button to generate a new API key. Provide a name and a workspace for that key. Copy the token for later use as it will not be shown again.

All done! Once you have your API key, you can use Anthropic's LLMs in the SkyDeck AI Platform.

## Adding the API Key to the SkyDeck AI Control Center

API Keys are added to the Control Center Integrations Screen.

1. Login to or Create a SkyDeck AI Admin account here: [https://admin.skydeck.ai/](https://admin.skydeck.ai/)
2. Once you have signed in, visit the your integrations page here [https://admin.skydeck.ai/integrations/ ↗](https://admin.skydeck.ai/integrations/)’, or select **Integrations** in the sidebar.
3. In the LLM Integration page, click on the **Add Integration** button, choose Anthropic as the Integration Service and enter your API Key in the Credentials key.

<figure><img src="../../.gitbook/assets/anthropic-integration.png" alt="" width="563"><figcaption></figcaption></figure>

That’s it! You can now use the powerful SkyDeck AI tools and directly access the Claude models.

## Conclusion

Integrating Anthropic with the SkyDeck AI Platform offers a robust set of features and capabilities, leveraging advanced language models from Anthropic to deliver accurate and reliable answers. Ensure you stay updated with the latest Claude models and features to maximize the benefits of this integration. For additional assistance or inquiries, please refer to the [Anthropic Documentation](https://docs.anthropic.com/) or contact their support team.


==> integrations/app-integrations/rememberizer-integration.md <==
# Rememberizer Integration

### Introduction

GenStudio offers two types of Rememberizer integrations: one for individual members and another for an entire workspace through the Control Center. This guide provides a comprehensive overview of both integration processes, enhancing search and memory capabilities across your workspace.

<figure><img src="../../.gitbook/assets/email masked.png" alt=""><figcaption></figcaption></figure>

### Steps to Authorize Rememberizer in GenStudio (Individual Members)

#### Step 1: Connect to Rememberizer

1. Go to the Rememberizer authorization page by clicking "Add account" to go to the Rememberizer authorization page.
2. Review the permissions that GenStudio will access, such as Mementos and Memory.

<figure><img src="../../.gitbook/assets/email masked 2.png" alt=""><figcaption></figcaption></figure>

#### Step 2: Configure Mementos

1. Select the "Change" option next to Memento.
2. Choose or create a new memento from the available list.
3. Confirm your selection.

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

#### Step 3: Set Memory Preferences

1. Click on "Change" next to Memory.
2. Select your preferred memory settings (e.g., Read All/Write Own).
3. Confirm the settings

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

#### Step 4: Authorize

1. Once you've configured your settings, click "Authorize" to complete the connection.

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

### Steps to Authorize Rememberizer in Control Center (Workspace-Wide)

#### Step 1: Access Integrations

1. Navigate to the **Integrations** section.
2. Click on the **Apps** tab.
3. Locate "Rememberizer" and click **Add**.

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

#### Step 2: Follow Authorization Steps

* The authorization process will follow the same steps as for individual members.
* Once authorized, Rememberizer will be available for the entire workspace.

### Rememberizer Integration Usage

Once authorized, SkyDeck will:

* Automatically call the Rememberizer API. For more details, please visit the [Rememberizer API Documentation](https://docs.rememberizer.ai/developer/api-documentations).
* Use the response to enhance interactions with the language model (e.g., GPT 4o).

#### Contextual LLM Integration

* The retrieved information is used to improve responses. For example, asking "What is my account?" will provide personalized details using Rememberizer's context.

<figure><img src="../../.gitbook/assets/email masked 3 (1).png" alt=""><figcaption></figcaption></figure>

### Conclusion

By following this guide, you can effectively integrate and utilize Rememberizer within GenStudio, leveraging advanced search capabilities and personalized memory sharing to enhance your application experience.


==> integrations/app-integrations/README.md <==
# App Integrations



==> integrations/app-integrations/slack-integration.md <==
# Slack Integration

To further enhance team collaboration, you can integrate Slack with Skydeck.ai to let your GenStudio conversations go directly to your Slack channel. This allows your team to collaborate seamlessly.

### Enable Slack from the Control Center

You must have admin access of your Slack workspace to perform this action. In the **Integrations** section of your Control Center, choose **Apps**, and then click the **Add** button of Slack.

<figure><img src="../../.gitbook/assets/image (57) (1).png" alt=""><figcaption></figcaption></figure>

After that, you will be redirected to a new page where you can allow SkyDeck.ai to access your Slack workspace. Click Allow and then check the Control Center again to check if Slack has been added successfully. This step is only required by the GenStudio workspace owner or admins. The following step can be done by any user in your workspace.

### Add SkyDeck.ai app to a Slack channel

In your Slack workspace, choose any channel that you want to receive GenStudio conversation messages, and add the **SkyDeck.ai** app to that channel. The channel can be public or private, and each one will have a different way to connect to Slack.

<figure><img src="../../.gitbook/assets/image (58) (1).png" alt=""><figcaption></figcaption></figure>

### Send messages to a public channel

For public channels, SkyDeck.ai has already been able to see all of them after you connect Slack in the Control Center, so you don't have to configure more. Any user in your GenStudio Workspace can choose to connect their conversations to a public Slack channel. Here are the steps they need to do:

1. Choose a conversation in the left sidebar and enable [Collaboration](../../genstudio-workspace/sharing-and-collaboration.md)
2. Toggle the **Share to Slack** button
3. In the **Pick a channel** dropdown, choose a public channel. Ensure that SkyDeck.ai app has been added to that channel as discussed in the previous section.
4. Click the **Send** button next to the dropdown. If successful, you will see new messages in that Slack channel posted by SkyDeck.ai. If you have not added the app, you will see a message right under the dropdown explaining why.

<figure><img src="../../.gitbook/assets/image (59).png" alt=""><figcaption></figcaption></figure>

### Authorize Slack to send messages to a private channel

For private channels, each user will have to authorize with Slack. The steps are slightly different:

1. Choose a conversation in the left sidebar and enable [Collaboration](../../genstudio-workspace/sharing-and-collaboration.md)
2. Toggle the **Share to Slack** button
3. In the **Authorized applications**, click **Authenticate** right next to Slack. The user will be redirected to a new page to authorize Slack.

<figure><img src="../../.gitbook/assets/image (60).png" alt=""><figcaption></figcaption></figure>

4. If the authorization succeeds, the **Pick a channel** dropdown will now contain additional private channels that the user is in and has the SkyDeck.ai app. User can now connect their private channel with a GenStudio conversation.

<figure><img src="../../.gitbook/assets/image (61).png" alt=""><figcaption></figcaption></figure>

### Disconnect the channel

In both cases, if you want to disconnect the channel and the conversation, you can either click the red <mark style="color:red;">**End share**</mark> button in the popup above, or remove the SkyDeck.ai app from that channel.

<figure><img src="../../.gitbook/assets/image (62).png" alt=""><figcaption><p>Click the End share button at the below right corner of the popup</p></figcaption></figure>


==> use-cases/creating-a-privacy-policy.md <==
---
description: A business and legal use case using Strategy Consultant
---

# Creating a Privacy Policy

{% hint style="info" %}
**Professional Services:** there are many complex issues that require the expertise of domain specialists or other professionals such as lawyers. Instead of waiting for access to these experts you can get a head start by using SkyDeck.ai GenStudio tools to write an initial draft or proposal that looks like a finished product. Shared with professionals, this can serve as a starting point for discussion, saving time and money. Or kept to yourself, this can serve as a way for you to be highly prepared before you engage with an expert.
{% endhint %}

## Strategy Consultant: Creating Legal Notices

The following conversation with the Strategy Consultant shows how you can use this tool to create a Privacy Policy from scratch that is compliant with European and U.S. privacy regulations. \
\
What we enter into the tool appears in _`italics and blocks`_.  The rest is produced by the Strategy Consultant tool and GenStudio using OpenAI GPT-4.

Strategy Consultant

Your questions or prompts: \
\
_`Help me develop a privacy policy for my generative AI platform for business users.`_

## Thoughts Decomposition:

1. What is the purpose and scope of the generative AI platform?
2. What type of data will the AI platform collect?
3. How will the collected data be used?
4. How will the data be stored and protected?
5. What are the user's rights regarding their data?
6. How will the platform comply with data protection laws?

## Thoughts Generation:

1. The generative AI platform allows businesses to generate AI models for various purposes such as data analysis, prediction, or automation.
2. The platform may collect data such as user information, user interaction with the platform, generated models and their outputs, and other usage data.
3. The collected data will be used for improving the platform, providing personalized service, troubleshooting, and potentially for research and development.
4. The data will be stored securely with encryption and access controls. Regular audits and security measures will be employed to protect the data.
5. The users have the right to access their data, correct inaccuracies, delete their data, and withdraw their consent at any time.
6. The platform will comply with data protection laws by informing users of the data collection and usage, obtaining consent when necessary, and providing mechanisms for users to exercise their rights.

## I want to know more about:

1. Do you have any specific data protection laws or regulations in mind that the platform needs to comply with?
2. Are there any specific types of data that the platform will collect or any specific ways in which the data will be used that haven't been mentioned already?
3. Will the data be shared with any third parties? If so, under what circumstances?
4. Do you have any specific data security measures in mind that the platform should implement?

_`We should comply with General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). The platform will additionally collect api keys and credential for access to third party vendor generative AI models for which customers have signed up. Data will be shared with the third party vendors that customers provision on our system. We may also share some data with outside services to support user requests such as urls submitted to direct scraping and ingestion into generative AI models. Site usage data may also be shared anonymously with analytics vendors such as Google to understand customer usage and help improve our product's design. The platform supports the ability for customers to completely delete their entire account and all associated information.`_

## Thoughts Decomposition:

Given the new information, let's decompose the thoughts again:

1. How will the platform comply with GDPR and CCPA?
2. How will the platform handle API keys and credentials for third-party vendors?
3. Under what circumstances and with whom will the data be shared?
4. How will the platform ensure anonymity when sharing data with analytics vendors?
5. How will the platform handle account deletion and data removal?

## Thoughts Generation:

1. To comply with GDPR, the platform will provide clear information about data collection and usage, obtain explicit consent before collecting personal data, allow users to access, correct, and delete their data, and implement data protection measures. For CCPA compliance, the platform will inform users about the categories of personal information to be collected, the purposes for which these categories will be used, and provide a "Do Not Sell My Personal Information" link to users.
2. API keys and credentials for third-party vendors will be stored securely with encryption, and will only be used for the purpose of providing the service requested by the user. These credentials will not be shared with any other parties without the explicit consent of the user.
3. Data will be shared with third-party vendors as provisioned by customers, and with outside services for specific user requests. The platform will inform users about these data sharing practices and obtain consent where necessary.
4. When sharing data with analytics vendors, all personally identifiable information will be removed or anonymized to protect user privacy.
5. The platform will provide a mechanism for users to completely delete their account and all associated information. This process will include deleting all stored data, including API keys and credentials, user information, and generated AI models.

## I want to know more about:

1. How are you planning to inform users about your data collection, usage, and sharing practices?
2. How will you obtain consent from users for data collection and sharing?
3. Can you provide more details on the "Do Not Sell My Personal Information" link for CCPA compliance?
4. What steps will the platform take to ensure that all user data is completely deleted upon account deletion?

_`We will inform users about our data collection, usage, and sharing practices through a web page that contains our privacy policy with a link to that page in our footer and our sign up page. 2. We will obtain consent for users for data collection and sharing by asking them to positively check a box which is not checked by default. The user will receive a confirmation of this approval in email when possible. 3. The "Do Not Sell My Personal Information" link will describe the data that will not be sold. It will provide a button to press to turn activate this request. When possible users will receive an email confirmation of this request. And the request will remain active for at least one year.`_

## Thoughts Decomposition:

With the new information, let's decompose the thoughts again:

1. How will the platform ensure that the privacy policy is easily accessible to the users?
2. How will the platform implement the user consent mechanism?
3. How will the "Do Not Sell My Personal Information" link work?
4. How will the platform handle consent withdrawal and the activation of the "Do Not Sell My Personal Information" request?

## Thoughts Generation:

1. The platform will keep the privacy policy visible and easily accessible by placing a link to it in the footer and on the sign-up page. The privacy policy will be written in clear, plain language so that users can understand how their data is collected, used, and shared.
2. The platform will implement a user consent mechanism where users have to actively check a box to give consent. This box will not be checked by default, ensuring that consent is given actively and not passively. Users will receive an email confirmation of their consent when possible.
3. The "Do Not Sell My Personal Information" link will provide information about what data is not sold and will provide a button for users to activate this request. Users will receive an email confirmation of this request when possible, and the request will remain active for at least one year.
4. The platform will honor consent withdrawals and activations of the "Do Not Sell My Personal Information" request promptly. Users will have the ability to change their consent status at any time, and the platform will reflect these changes in its data handling practices.

## Thoughts Evaluation:

The strategy seems to cover all important aspects of a privacy policy for a generative AI platform. It considers the nature of the platform, the type of data collected, user rights, and compliance with GDPR and CCPA.

## Search Algorithm:

The most promising thought to pursue would be to create a draft of the privacy policy based on the generated thoughts and information provided.

## Examples:

Here's a potential starting point for your privacy policy:

"Our generative AI platform is committed to protecting your privacy and handling your data in an open and transparent manner. The personal data that we collect and process depends on how you use our services.

We collect and process your data for the purposes of providing you with our services, improving the platform, and for our research and development efforts. We may also share your data with third-party vendors as provisioned by you, and with outside services to support your requests.

We take your privacy very seriously and will always handle your data in accordance with applicable data protection laws, including GDPR and CCPA. We will always inform you about how we use your data, and we will only process your data if we have a lawful basis to do so.

For more information on how we handle your data, please see our Privacy Policy \[Link]. Please note that by using our services, you agree to our data practices as set out in our Privacy Policy.

You have the right to access, correct, or delete your data at any time. You can also withdraw your consent to data processing at any time. If you wish to do so, please contact us at \[Contact Information]."

_`Please write the privacy policy as it would appear using the following information:`_ \
\
_`Service: SkyDeck.ai`_ \
_`Location: https://skydeck.ai`_ \
_`Company Name: SkyDeck AI Inc`_ \
_`Company mailing address: SkyDeck AI Inc., 548 Market St. PMB38234, San Francisco, CA 94104`_ \
_`Contact email: legal@skydeck.ai`_ \
_`Phone: 1.415.744.1557`_ \
\
_`Do not make the privacy policy recursive, as you have done above, by having a policy that refers the reader to follow a link to see the privacy policy.`_

## SkyDeck AI Inc. Privacy Policy

SkyDeck AI Inc. ("SkyDeck AI," "we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you use the SkyDeck.ai generative AI platform (our "Service") and our practices for collecting, using, maintaining, protecting, and disclosing that information.

### Information We Collect About You and How We Collect It

We collect several types of information from and about users of our Service, including:

* Personal information, such as your name, email address, and other identifiers by which you may be contacted online or offline.
* Technical data, such as information about your internet connection, the equipment you use to access our Service, and usage details.
* API keys and credentials for accessing third-party vendor generative AI models provisioned by you.

We collect this information:

* Directly from you when you provide it to us.
* Automatically as you navigate through the Service. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.

### How We Use Your Information

We use information that we collect about you or that you provide to us, including any personal information:

* To provide you with the Service and its contents, and any other information, products or services that you request from us.
* To fulfill any other purpose for which you provide it.
* To provide you with notices about your account.
* To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.
* To notify you about changes to our Service or any products or services we offer or provide through it.
* To improve our Service, products, or services.
* To allow you to participate in interactive features on our Service.

### Disclosure of Your Information

We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:

* To third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
* To fulfill the purpose for which you provide it. For any other purpose disclosed by us when you provide the information.
* With your consent.

### Your Rights

You have certain rights under applicable data protection laws. These may include the right to:

* Request access to your personal data.
* Request correction of the personal data that we hold about you.
* Request erasure of your personal data.
* Object to processing of your personal data.
* Request restriction of processing your personal data.
* Request transfer of your personal data.
* Right to withdraw consent.

### Data Security

We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions and API keys will be encrypted using SSL technology.

### Changes to Our Privacy Policy

It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Service home page.

### Contact Information

To ask questions or comment about this privacy policy and our privacy practices, contact us at:

SkyDeck AI Inc. 548 Market St. PMB38234 San Francisco, CA 94104 Phone: 1.415.744.1557 Email: legal@skydeck.ai


==> use-cases/README.md <==
---
description: >-
  The following sections provide some concrete examples of the many ways SkyDeck
  GenStudio tools and features can be used to make your life easier.
---

# Introduction



==> control-center/README.md <==
---
description: How to get quickly setup with your control center.
---

# SkyDeck AI Control Center

We've put together some helpful guides for you to get set up with our product quickly and easily.\
\
You can sign in to the Control Center to administer your account, billing, integration, tool allocation and users (members) by going to admin.skydeck.ai and signing in with an Admin or Owner account such as the one you set up when first encountering SkyDeck AI.\
\
At [docs.skydeck.ai/genstudio](https://docs.skydeck.ai/genstudio) you can learn more about interacting with models using the SkyDeck AI user workspace we call GenStudio. You can reach your organization or company's workspace by going to your\_company\_domain.skydeck.ai where your\_company\_domain was the sub-domain name set up by the account owner during the onboarding process.

©2023 SkyDeck AI Inc.


==> control-center/admin-and-owner-tools.md <==
---
description: Control Center
---

# Admin & Owner Tools

The Control Center is a part of the Skydeck.ai system, located at admin.skydeck.ai that is intended for use by account owners and designated administrators. This is where an owner sets up their account and from where they invite users into this system. The Control Center is not normally accessed by users of the GenStudio workspace, although owners and admins may choose to use both. This is the first part of the Skydeck.ai system that is seen by account owners. They may, however, quickly move on to a pre-configured trial of the GenStudio workspace before returning to the Control Center to really get started.


==> control-center/setup-guide/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Setup Guide

Upon creating your SkyDeck AI account, you'll be introduced to the Setup Guide. This guide outlines the 5 core steps that ensure you get the most out of your SkyDeck AI experience. Whenever you need a refresher or want to check your progress, the Setup Guide is there to assist.

* [**Set Up Account**](set-up-account.md)
* [**Set Up Integrations**](set-up-integrations/)
* [**Set Up Security**](security/)
* [**Organize Teams**](organize-teams/)
* [**Curate Tools**](curate-tools/)
* [**Manage Members**](manage-members/)

<figure><img src="../.gitbook/assets/startup.png" alt=""><figcaption></figcaption></figure>


==> control-center/setup-guide/set-up-account.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Set Up Account

From the **Account** page, you can select the **Company Profile** or **Billing** tabs.

<figure><img src="../../.gitbook/assets/admin-account.png" alt=""><figcaption></figcaption></figure>

***

### Account Information

Within the **Company Profile** tab, you can fill out the following fields:

* **Account Name** – Add your company name
* **Subdomain** – Select the subdomain you would like to use for SkyDeck AI — for example, google.skydeck.ai
* **Timezone** – Choose the appropriate timezone
* **Upload your logo** – Upload a PNG or JPEG image that is at least 100x100 pixels and less than 10MB in size.

<figure><img src="../../.gitbook/assets/admin-account-2.png" alt="" width="375"><figcaption></figcaption></figure>

When these four fields are complete, click **Save**. The page will then update to provide a link to your current workspace URL.

<figure><img src="https://lh6.googleusercontent.com/wRmj6kbqQaPY2yiFexvYjJIloet9K6Zi2ZZYaEONtMbRygmW02cGSjEt4DRthL_Er5ajQClssfUCqMYKmSww1Q1_qB9n3vLKS0XhNR5c5Ri_CsdfJaqpxp5vjR-nfh87ahPb_zLQzr6Tx_D6rpFv9xM" alt=""><figcaption></figcaption></figure>


==> control-center/setup-guide/security/authentication-setup.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Authentication Setup Guide

## Guidance

The members you invite to use the GenStudio workspace need to authenticate themselves when they initially sign up and when they later sign in. You can choose one or more allowed methods that are consistent with the way users normally identify themselves in your organization. Enterprise Single Sign On (SSO) methods are available in advanced plans.

### Google Authentication

If your organization has assigned IDs to your team such as Jane.Doe@yourcompany.com then you should use one (and just one) of our SSO methods. If your organization is a Google Workspace user then choose “Google” as an allowed authentication method.

### Microsoft Authentication

Choose “Azure AD” if your organization uses Microsoft’s enterprise Azure AD (Active Directory) authentication service (soon to start being called Microsoft Entra ID). This usually applies to business or academic deployments of Microsoft oriented SSO. Do not confuse this with the Microsoft individual consumer authentication method called “Microsoft Account” assigned to individuals when they sign up for Outlook.com, Microsoft 365, Xbox, etc. A consumer Microsoft account holder will not be able to sign in with Azure AD.

With Azure Active Directory, Microsoft provides the identity platform as a service but you can modify some of the configuration and settings, such as adding your own custom domain name (to get @yourcompany.com) or requiring multi-factor authentication. Your Azure Active Directory instance is available via the Azure Portal and other management tools like PowerShell, the Azure CLI and the REST API.

### Pick One SSO

If yours is a Google workspace shop, pick Google athentication. If yours is a Microsoft identity service shop, pick AD. This is the “Single” in SSO. It is the way you would primarily want members to sign in and sign up.

### Alternate Authentication

If you do not have any single source of identity, or use a method we do not support (contact us and let us know) then you might choose multiple methods or all methods for authentication. Or if members will join your GenStudio workspace who are not part of your regular organization you will need to choose alternative authentication methods for them to use.

Generally, if your organization uses Microsoft Azure AD, you might choose email or email and Google as supported authentication. If your organization uses Google authentication, you might add email to allowed options.

One downside to allowing alternative authentication methods is that some of your organization members might become confused and try to sign in with an alternative method. You might find it easier to manage allowing only your primary authentication method and providing identities (email addresses) to outside users you invite to your workspace.

**TL;DR**

- Email: Useful for 3rd party users or for hetrogeneous teams.
- Azure AD: The primary choice for organizations with enterprise Microsoft authentication.
- Google: Useful for 3rd party users, hetrogeneous teams, or organizations using Google Workspace.


==> control-center/setup-guide/security/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Set Up Security

Select **Security** from the sidebar.



==> control-center/setup-guide/curate-tools/assign-tags.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Assign Tags

Tags allow you to associate the tools with one or many group of members in your organization. After a tag is assigned to a tool, it can only be used by members who are also assigned that tag.

In the Tools page, click on the **Assign** button for each tool you want to manage. In the pop-up window, you can choose multiple tags from the multi-select dropdown. Toggle between selection and deselection for the tags as needed. Then click **Save**.

<figure><img src="../../../.gitbook/assets/admin-tags-4.png" alt="" width="563"><figcaption></figcaption></figure>

Repeat this process for each AI tool to create customized permission groups.


==> control-center/setup-guide/curate-tools/system-tools.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# System Tools

SkyDeck AI's [GenStudio workspace](https://eastagile.skydeck.ai/) comes with several default AI tools. Here's a quick overview of these tools to help you understand how to set up your permissions.

<table data-full-width="false"><thead><tr><th width="190" align="center">Icon</th><th width="190.33333333333331" align="center">Name</th><th align="center">Description</th></tr></thead><tbody><tr><td align="center"><img src="../../../.gitbook/assets/sql-assistant-logo.png" alt="" data-size="original"></td><td align="center"><strong>SQL Assistant</strong></td><td align="center">Provide the DDL that defines the tables in your database, then ask your SQL Assistant to write SQL code to produce any result.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/legal-agreement-review-logo.png" alt=""></td><td align="center"><strong>Legal Agreement Review</strong></td><td align="center">Evaluate a clause in your legal document. Have it explained to you. Modify it to change the document’s provisions.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/strategy-consultant.png" alt="" data-size="original"></td><td align="center"><strong>Strategy Consultant</strong></td><td align="center">Assists users by generating thoughtful responses to a specific question that lead you through a consultative approach to the request.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/teach-me-anything-logo.png" alt="" data-size="original"></td><td align="center"><strong>Teach Me Anything</strong></td><td align="center">This AI tutor will provide a lesson on any topic under the sun. You can choose the teaching style, language, and sophistication of the lesson.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/pair-programmer-logo.png" alt="" data-size="original"></td><td align="center"><strong>Pair Programmer</strong></td><td align="center">Your AI pair programmer will review your code, help you add new features, modify existing features, add test coverage, add comments or documentation, and more.</td></tr><tr><td align="center"><img src="../../../.gitbook/assets/image-generator-logo.png" alt="" data-size="original"></td><td align="center"><strong>Image Generator</strong></td><td align="center">Generated an image based on the description with OpenAI's DALL-E model.</td></tr></tbody></table>

You can add a custom tool in the Control Center and it will be enabled in your entire workspace. Learn more at [Develop Your Own Tools](https://docs.skydeck.ai/developers/develop-your-own-tools).


==> control-center/setup-guide/curate-tools/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Curate Tools

The Tool feature helps to construct more complex prompts easily by asking users for a few brief inputs and then generating the complete, detailed prompt.

Select **Tools** from the sidebar. From this page, you can manage the tools for the entire organization, including uploading, editing, duplicating, and deleting tools. You can also use the tags you created within [**Organize**](../organize-teams/) to determine which AI tools are available to specific groups or individuals.

<figure><img src="https://lh4.googleusercontent.com/ETDbRxZdiQPH3nrVpku_6EYP7FOlgS8BHUF5-euuHuy3rHnVwG5kW2UzOvm10lLK9KN0FDOh5wqpm59cCBxn9tjvMoHk8K7twj6bX_Mec2JP57MxLXdWnVkAc3mnDjIEQIUUegl_ZciqCfINB1XAqD4" alt=""><figcaption></figcaption></figure>


==> control-center/setup-guide/set-up-integrations/integration-assistance.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Integration Assistance

When you select a service (LLM or SQL database), a prompt labeled **Where can I get these credentials?** will appear. This is a dynamic link that directs you to the specific documentation for the selected service, guiding you on how to generate or find your API key.

As you switch between LLM Services, the link updates accordingly, ensuring you always have quick access to the right information within SkyDeck AI.

<figure><img src="../../../.gitbook/assets/admin-integrations-3.png" alt="" width="563"><figcaption></figcaption></figure>

This information on public pay-as-you-go conversational services is also linked here for easy reference:

* [**OpenAI**](../../../integrations/llms-and-databases/openai-integration.md)
* [**Vertex**](https://developers.google.com/workspace/guides/create-credentials#service-account)
* [**Anthropic**](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)
* [**HuggingFace**](../../../integrations/llms-and-databases/huggingface-integration.md)


==> control-center/setup-guide/set-up-integrations/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Set Up Integrations

Head back to the Setup Guide and click **Add Integration** or select **Integrations** from the sidebar. On the Integrations page, click on the **Add Integrations** button.

<figure><img src="../../../.gitbook/assets/admin-integrations-1.png" alt="" width="563"><figcaption></figcaption></figure>

In the **Add Integration** pop-up window, fill out the following fields:

* **Integration Service** – Choose an LLM service such as OpenAI, VertexAI, Anthropic... or a database service from the dropdown menu.
* **Integration Name** – Create a recognizable name for your integration.
* **Credentials** – Enter your [API credentials](integration-assistance.md).

<figure><img src="../../../.gitbook/assets/admin-integrations-2.png" alt="" width="563"><figcaption></figcaption></figure>


==> control-center/setup-guide/organize-teams/remove-groups.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Remove Groups

If you need to remove specific tags, click on the **Trash** icon next to the tag name and confirm the deletion. This action will also remove all the tag associations and cannot be undone.

<figure><img src="../../../.gitbook/assets/admin-tags-3.png" alt="" width="563"><figcaption></figcaption></figure>


==> control-center/setup-guide/organize-teams/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Organize Teams

In SkyDeck.AI Control Center, tags are a way to organize the members of your company. A tag (or group) represents a team within your organization. You can assign a tag to a member or a tool, and members can only use tools that are assigned the same tag.

Select **Organize** from the sidebar. From this page, you can create tags to define and structure various teams within your organization. You will notice that the **All** tag already exists and cannot be removed. This is the default tag that applies to all members of your organization.

<figure><img src="../../../.gitbook/assets/admin-tags-1.png" alt=""><figcaption></figcaption></figure>


==> control-center/setup-guide/organize-teams/add-new-group.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Add New Group

Click on the **Add tag** button and a popup will appear. Provide a name for a high level group within your organization. Press **Enter** or click on the Add button to create the tag.

<figure><img src="../../../.gitbook/assets/admin-tags-2.png" alt="" width="563"><figcaption></figcaption></figure>

***

> **Tip** – Create one or two high level groups, then add a new group with more tags if you need more granular access control.


==> control-center/setup-guide/manage-members/add-members.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Add Members

Click on the **Add members** button on the Members page and then enter the new member’s **Name** and **Email**. You can also [Import a file](import-file.md) to add multiple members at the same time.

<figure><img src="../../../.gitbook/assets/admin-members-2.png" alt="" width="563"><figcaption></figcaption></figure>


==> control-center/setup-guide/manage-members/README.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Manage Members

## Overview

Select **Members** from the sidebar. From this page, you can manually add members, import member files, send invites to members, and assign tags to members.

<figure><img src="../../../.gitbook/assets/admin-members-1.png" alt=""><figcaption><p>Add people to Members to invite them and manage their roles in your SkyDeck AI</p></figcaption></figure>

At the top of the screen you will see guidance about your account in terms of having enough paid seats to invite more members.

## Available Actions

The buttons (Add Member, Export members, Transfer Ownership, Edit, Invite, Revoke, Delete, Cancel) will be active or inactive depending on whether they are relevant to the members you have checked (or not checked) in the list below.

If you have not selected any members then relevant actions at the moment will be to add a single person via email or import a csv file of people to invite, and to export the current members of your workspace.

If you have selected one or more member, some actions are available on the list page such as inviting or revoking access. More advanced features that take up more space to work with are found using the **Edit** button. In particular, this is where Role and Tags can be changed to manage permissions within Control Center and access to tools and integrations via the GenStudio workspace.

All these actions will be discussed more in the following sections, which explain what can be done in the Members page.

## Guide action

In the list of members, pay particular attention to the **Guide** column. This provides a quick suggestion about what you should do next with that particular person.

There are different Guide actions:

1. When a member is added, the Guide action is **Invite**. We need to invite that member.
2. When a member is invited, the Guide action is **Wait**. We need to wait for that member to accept their email invitation.
3. When a member accepts their invitation, the Guide action is **OK**. It is ok now, we don't need to do anything more.
4. When a member's invitation expires, the Guide action is **Re-invite**. We need to re-invite them by sending another email.
5. When a member is revoked, they are still in the list, and the Guide action is back to Invite because you might want to invite them again next.

## Roles

A member can have one or multiple roles, each granting different levels of access to the Control Center and GenStudio Workspace. The roles are defined as follows:

* Member: Grants access to the GenStudio Workspace, provided the user has been invited and has set up their account.
* Admin: Provides access to the Control Center, enabling the management of the account, integrations, security, tags, tools, and members.
* Owner: Includes all admin permissions, plus the ability to manage billing, delete the account, and transfer ownership to another admin.


==> control-center/setup-guide/manage-members/import-file.md <==
---
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Import File

Before you import, check that your CSV file has the **name** and **email** fields in the following format:

<figure><img src="https://lh6.googleusercontent.com/UWhLOPa6UdBzO66s17El9htjl_JHS95Y4shkQ9nvuHYo8NlUdvAodSZ8nZ5zNgZbFEg2tjvdRZUm4SFP1rKmXNzoO-zRUzT275VOUNeVqTmyr-2ILt0hfkihnavR3BNzg26VUDHyXklms0eOzTC7Le8" alt=""><figcaption></figcaption></figure>

> **Tip** – Your file must be in CSV format or SkyDeck AI will not accept your import.

***

Select **Import File** tab in the Add member popup. Then click **Upload File** from the pop-up window and locate your CSV file.

<figure><img src="../../../.gitbook/assets/admin-members-3.png" alt="" width="563"><figcaption></figcaption></figure>

If the import is successful, you will see a **Success banner** at the top of the screen, and the page will populate with the new members' information.

{% hint style="info" %}
You can optionally include a third field named **tags** in the CSV file to assign tags to the added members. If not, you can [assign them later](edit-members.md).
{% endhint %}


==> control-center/setup-guide/manage-members/edit-members.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Edit Members

After adding members to your workspace, you can manage them such as changing displayed names, assigning tags, revoking accesses, etc. Each action may be available or not depending on the selected members and their current states (which is implied by their Guide actions).

### Change displayed name

You can change the name of any member after they are added to your workspace. Select one member from the list, click on the **Edit** button, change the user's name and click **Save**.

<figure><img src="../../../.gitbook/assets/edit-members-1.png" alt="" width="563"><figcaption></figcaption></figure>

### Assign Admin role

A member can be granted the admin role, and they will be able to access Control Center of your organization. Select one member from the list, click on the **Edit** button, toggle the **Administrator role** button and click **Save**. Then that user can sign in the Control Center and manage the account.

<figure><img src="../../../.gitbook/assets/edit-members-2.png" alt="" width="563"><figcaption></figcaption></figure>

### Assign tags

[Tags (or groups)](../organize-teams/) are used to curate which [AI tools](../curate-tools/system-tools.md) are accessible by whom. They can also provide groups for analytics and reporting. Members can be assigned multiple tags. Typically tags will define roles or departments in your organization.

There are 2 ways to assign tags to a user.

You can directly assign or remove tags of a user on the member list. Choose one member (without needing to select the checkbox), and in the **Tags** column, click the "+" icon. You can then see the current tags assigned to that member and will be able to assign or remove the tags by simply checking/unchecking the tags. The All tag is enabled by default for all members.

<figure><img src="../../../.gitbook/assets/edit-members-3.png" alt="" width="563"><figcaption><p>Assign tags on the member list</p></figcaption></figure>

The second way is to select a member by clicking a checkbox next to their name and click on the **Edit** button. You can then see the same interface as the above option, and you can manage the tags similarly. Once changes are complete, click **Save**.

<figure><img src="../../../.gitbook/assets/admin-members-5.png" alt="" width="563"><figcaption><p>Assigning tags in Edit popup</p></figcaption></figure>

Removing every tag from a member will remove their access to all tools and remove them from all reporting groups. You might wish to do this to limit access to a minimal level. Or to remove a member from global reports. Reports can still be produced for such members by naming them explicitly.

### Revoke access

You can revoke access of your members from GenStudio Workspace, after which they won't be able to it anymore. Select one or several invited members, click on the **Revoke** button and confirm the action. When the access is revoked, the user is still in the member list with the Guide action of **Invite**. You might want to invite them again later, so they are not removed completely.

### Delete a member

If you want to completely remove some members, select them and click on the **Delete** button. Once deleted, they will not appear on the list anymore. You will have to re-add them later if you want to using the [Add member](add-members.md) button.

### Transfer ownership

If the owner wish to transfer the ownership of the account to another user, they can select one admin and click on the **Transfer Ownership** button.


==> control-center/setup-guide/manage-members/invite-members.md <==
---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Invite Members

After adding members to SkyDeck.AI, they are not able to use your workspace yet. Their current Guide action is **Invite**, which indicates that you as an admin or owner will have to invite them by sending an email.

To invite members to use the [GenStudio workspace](https://eastagile.skydeck.ai/), check the first box next to **Name and Email** to select all members or select individual checkboxes for individual members. Then, the **Invite** button will appear at the top of the page. Click on that button to send email invites to all of the selected members.

In the pop-up window, click **Confirm**.

<figure><img src="../../../.gitbook/assets/admin-members-4.png" alt="" width="563"><figcaption></figcaption></figure>

After that, their Guide action will change to **Wait**, which means that you will be waiting for the members' responses. You can also resend the emails for those users if they miss their previous emails. After a member completes their signup process, their Guide action will change to **OK**, and they will be able to access your GenStudio workspace. You cannot resend an email to a member with Guide action of OK.

If the previous link expires, the Guide action will change to **Re-invite**. For more details about each Guide action, please refer to [.](./ "mention").


==> ai-documentations/llm-evaluation-report.md <==
# LLM Evaluation Report

| Model                      | Date       |   Total Response Time (s) |   Tests Passed |   Mean CodeBLEU (0-1) |   Mean Usefulness Score (0-4) |   Mean Functional Correctness Score (0-4) |
|:---------------------------|:-----------|--------------------------:|---------------:|----------------------:|------------------------------:|------------------------------------------:|
| o1-preview                 | 2024-11-14 |                  1912.99  |            135 |              0.312213 |                      3.65244  |                                  3.7439   |
| o1-mini                    | 2024-11-14 |                   665.408 |            131 |              0.336815 |                      3.71951  |                                  3.76829  |
| gpt-4o                     | 2024-11-14 |                   237.915 |            121 |              0.316501 |                      3.71951  |                                  3.65854  |
| gpt-4o-mini                | 2024-11-14 |                   199.287 |            117 |              0.337357 |                      3.65854  |                                  3.7378   |
| claude-3-5-sonnet-20240620 | 2024-11-14 |                   476.683 |            112 |              0.301742 |                      3.66463  |                                  3.68293  |
| claude-3-5-sonnet-20241022 | 2024-11-14 |                   344.884 |            116 |              0.326506 |                      3.70732  |                                  3.66463  |
| gemini-1.5-pro             | 2024-11-14 |                   568.082 |             95 |              0.330655 |                      3.47561  |                                  3.38415  |
| gemini-1.5-flash           | 2024-11-14 |                   781.461 |              1 |              0.255924 |                      0.646341 |                                  0.792683 |

**Total Response Time (s):** The total time taken by the model to generate all the outputs.

**Tests passed:** The number of unit tests that the model has passed during evaluation, out of a total of 164 tests.

**Mean [CodeBLEU](https://arxiv.org/abs/2009.10297):** Average CodeBLEU score, a metric for evaluating code generation quality based on both syntactic and semantic correctness.

**Mean [Usefulness Score](https://arxiv.org/abs/2304.14317):** Average rating of the model's output usefulness as rated by a LLM model.

- **0:** Snippet is not at all helpful, it is irrelevant to the problem.
- **1:** Snippet is slightly helpful, it contains information relevant to the problem, but it is easier to write the solution from scratch.
- **2:** Snippet is somewhat helpful, it requires significant changes (compared to the size of the snippet), but is still useful.
- **3:** Snippet is helpful, but needs to be slightly changed to solve the problem.
- **4:** Snippet is very helpful, it solves the problem.

**Mean [Functional Correctness Score](https://arxiv.org/abs/2304.14317):** Average score of the functional correctness of the model's outputs, assessing how well the outputs meet the functional requirements, rated by a LLM model.

- **0 (failing all possible tests):** The code snippet is totally incorrect and meaningless.
- **4 (passing all possible tests):** The code snippet is totally correct and can handle all cases.



==> ai-documentations/README.md <==
# AI Documentations

This directory contains key documents related to LLM:

1. [LLM Evaluation Report](llm-evaluation-report.md)
2. [SkyDeck.ai LLM Ready Documentation](skydeckai-llm-ready-documentation.md)

## LLM Evaluation Report

Presents a comparative analysis of various LLM models, including:

* Performance metrics (response time, tests passed)
* Quality assessments (CodeBLEU, usefulness, functional correctness)
* Detailed explanations of scoring methodologies

## LLM-Ready Documentation

Provides a consolidated reference document designed for LLM consumption, combining various documentation into a single, easily accessible format.

These documents offer insights into LLM performance and provide resources for LLM interactions. They may be updated as new evaluations are conducted or documentation is revised.


==> genstudio-workspace/conversations.md <==
# Conversations

### Interact with LLM

This is where you interact with your Large Language Model (LLM) Artificial Intelligence (AI) models. You do so in a conversational _chat_ fashion. You can 'talk' directly to your models using the "default" tool. This is how your session starts out.

<figure><img src="../.gitbook/assets/conversation-start.png" alt=""><figcaption><p>The beginning of a conversation</p></figcaption></figure>

Start a conversation by clicking the **New conversation** button, or you can resume an existing conversation by choosing one on the Sidebar.

Just ask your LLM anything. These are your "prompts" to the model. But there are best practices you can follow to get better results. For example, just asking for better results can produce better results, for example, "As an expert in physics explaining to a child, explain why the sky is blue."\
\
Your input should be entered in the input field at the bottom of the screen. You submit it to your LLM for a response by clicking the **Ask AI** button on the right hand side of the input field, or by pressing **Enter** while focusing the input.

You can select which model is to be used from the middle menu below the input field. You can change your model choice at any time. Some models will be more appropriate than others. For example, GPT-4 is one of the most advanced models to date and tends to produce more carefully thought out responses. However, Anthropic's Claude models can support much larger context windows (about as much as an entire book) which allows you to submit large documents in your prompt for review, background, or modification.

<figure><img src="../.gitbook/assets/models-menu.png" alt=""><figcaption><p>Choose your LLM for different messages</p></figcaption></figure>

### Regenerate and Edit the prompt

If you do not like the result your model produces, you can ask it to regenerate the response using the **Regenerate** button. You can also change your model and send another response.

<figure><img src="../.gitbook/assets/regenerate.png" alt="" width="563"><figcaption><p>Regenerate AI response</p></figcaption></figure>

Skydeck.AI also let you edit your prompt and try again. You can click the **Edit message** button, change the input and resubmit.

<figure><img src="../.gitbook/assets/edit-message.png" alt="" width="563"><figcaption></figcaption></figure>

### Sending non-AI messages

You can also sending your messages without asking the AI, and it will just appear like a normal message with no response in the conversation. This is useful when you want to take some notes directly in the conversation, or working with other members (Learn more in [Sharing and Collaboration](sharing-and-collaboration.md)).

To send a non-AI message, simply enter the texts in the input field and click **Send chat message** button, or you can press **Ctrl + Enter** while focusing the input.

<figure><img src="../.gitbook/assets/chat-buttons.png" alt=""><figcaption><p><strong>Send chat message (1) and Ask AI (2) buttons</strong></p></figcaption></figure>

### Retrieve the chat content

You can copy all the text of your prompts and responses to your clipboard using the icon in the upper right hand side. This is a handy way to include your work in other documents. You can also download the conversation content into a markdown file by clicking the **Download** button.

<figure><img src="../.gitbook/assets/copy-download-conversation.png" alt="" width="326"><figcaption><p>Download (1) and Copy (2) a conversation</p></figcaption></figure>

© 2023 SkyDeck AI Inc.


==> genstudio-workspace/README.md <==
---
description: GenStudio
---

# GenStudio Workspace

* [**Conversations**](conversations.md)
* [**Sharing and Collaboration**](sharing-and-collaboration.md)
* [**Slack Synchronization**](slack-synchronization.md)
* [**Public Snapshots**](public-snapshots.md)
* [**Web Browsing**](web-browsing.md)
* [**Document Upload**](document-upload.md)
* [**Tools**](tools/)
* [**Data Security**](data-security/)


==> genstudio-workspace/public-snapshots.md <==
# Public Snapshots

The snapshot feature provides users with the ability to create a static, comprehensive view of a conversation and share it through a publicly accessible URL. It enhances collaboration by allowing users to disseminate their work quickly and efficiently to your colleagues and even external stakeholders.

### Create a Snapshot

When snapshot of a conversation is created, the system captures the current state of the conversation thread, including messages, timestamps, the LLMs that respond to the messages. Optionally, you can choose to include the participants' names or sharing anonymously. The snapshot is immutable, as it will not be updated when you continue your conversation. If you want to include the new messages, you have to create another snapshot.

To create a snapshot, choose a conversation that you want to share from the left sidebar and click the blue **Collaborate** button in the upper right corner.

<figure><img src="../.gitbook/assets/public_snapshot1.png" alt=""><figcaption><p>Click the Collaborate button</p></figcaption></figure>

A popup will appear. Choose the **Share publicly** tab and then click **Create new snapshot**. You have to options: **Share anonymously** or **Share with your name**. Choose the former if you do not want to include your name in the snapshot, and choose the latter if you are willing to share it.

<figure><img src="../.gitbook/assets/public_snapshot2.png" alt=""><figcaption><p>Click Create new snapshot and choose a sharing option</p></figcaption></figure>

{% hint style="info" %}
Once created, the snapshot will not include changes from the conversation, such as message addition or deletion.
{% endhint %}

A unique URL is generated for each snapshot so that you can give it to anyone to allow access to the conversation snapshot. The URL generation process employs cryptographic hashing techniques to ensure the uniqueness and integrity of each link.

<figure><img src="../.gitbook/assets/public_snapshot3.png" alt=""><figcaption></figcaption></figure>

### Snapshot View

If you choose **Share anonymously**, the participants' names of the conversation will not appear. Instead, you will see User 1, User 2... as the owner of the messages.

<figure><img src="../.gitbook/assets/public_snapshot4.png" alt=""><figcaption><p>Anonymized View</p></figcaption></figure>

If you choose **Share with your name**, the participants' names will appear.

<figure><img src="../.gitbook/assets/public_snapshot5.png" alt=""><figcaption><p>Unanonymized View</p></figcaption></figure>

{% hint style="info" %}
If you wish to anonymize the participants later, you have to create another snapshot. You can [disable](public-snapshots.md#disable-a-snapshot) or [delete](public-snapshots.md#delete-a-snapshot) the current one later.
{% endhint %}

### Continue from a Snapshot

When someone accesses your snapshot, they are able to continue the conversation from that point. Click **Continue this conversation** at the bottom of the page, and a popup will appear asking for your workspace account.

If you don't have one, you can sign up by entering your email address, and we will guide you through the process of [Setting up an account](../control-center/setup-guide/). After that, you can continue the snapshot once signed up.

<figure><img src="../.gitbook/assets/public_snapshot6.png" alt=""><figcaption></figcaption></figure>

### Disable a Snapshot

Users have the ability to toggle the accessibility of a snapshot via the management interface. Disabling a snapshot renders the URL inactive, and any attempt to access the URL afterwards will be responded with not found resources. You can choose to re-enable it later.

<figure><img src="../.gitbook/assets/public_snapshot7.png" alt=""><figcaption><p>Click the "Eye" icon to disable/enable a Snapshot</p></figcaption></figure>

### Delete a Snapshot

You can choose to delete a snapshot if you don't want to share it anymore. Be cautious that this action is irreversible, which means that you cannot regain the deleted snapshot with the same URL. When clicking the "Trash" icon, you have to confirm the deletion to avoid unintended removal.

<figure><img src="../.gitbook/assets/public_snapshot8.png" alt=""><figcaption><p>Click the "Trash" icon to delete a Snapshot</p></figcaption></figure>



==> genstudio-workspace/document-upload.md <==
# Document Upload

SkyDeck.AI allows you to add different types of documents and images to your conversations with AI. You can ask your favourite LLM to analyze your file, and you will be able to receive its summary, interpretation, or answers for your questions about its content.

### Add a document

To add a document, open a conversation and click **Add** next to the prompt input. Then, choose **Upload documents**. We are currently supporting these files extensions: PDF, DOC, DOCX, PPTX, and simple text files.

<figure><img src="../.gitbook/assets/image (57).png" alt="" width="563"><figcaption></figcaption></figure>

The document will be attached with your message and sent to LLM. You can see the file associated with the message and you can even re-download it.

<figure><img src="../.gitbook/assets/attached-document.png" alt=""><figcaption></figcaption></figure>

### Add an image

To add an image, click **Add** and then, choose **Upload images**. We are currently supporting these files extensions: JPEG, JPG, WEBP, PNG.

<figure><img src="../.gitbook/assets/image (58).png" alt="" width="563"><figcaption></figcaption></figure>

The image will be attached with your message and sent to LLM. Additionally, you can also click on the image, which will open a new popup window displaying it in more clearly.

<figure><img src="../.gitbook/assets/attached-image.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/preview-image.png" alt="" width="375"><figcaption><p>View the image directly in GenStudio</p></figcaption></figure>

### Restrictions <a href="#h_52e5a07158" id="h_52e5a07158"></a>

* Total size of all files per message: up to 20MB

<figure><img src="../.gitbook/assets/error1.png" alt="" width="490"><figcaption></figcaption></figure>

* If the file is less than 20MB but still exceeds the token limit, another error will be displayed:

<figure><img src="../.gitbook/assets/error2.png" alt=""><figcaption></figcaption></figure>

* Total number of files: up to 10

<figure><img src="../.gitbook/assets/error3.png" alt="" width="488"><figcaption></figcaption></figure>

### Rememberizer - Extending AI knowledge

You can utilize [Rememberizer](https://rememberizer.ai/), our solution for giving AI your own knowledge and information and allowing SkyDeck.AI to learn from your documents and discussions. Learn more about Rememberizer [here](https://docs.rememberizer.ai/).


==> genstudio-workspace/sharing-and-collaboration.md <==
# Sharing and Collaboration

SkyDeck.AI is committed to breaking down silos and promoting a culture of collaborative innovation. You don't have to work in isolation when using the GenStudio Workspace. Whether you are working on a general conversation with one of the LLM models or diving deep into one of the six specialized tools for targeted tasks, GenStudio provides a cohesive and intuitive platform for real-time collaboration.

### How to Invite Collaborators

To add collaborators to any existing conversation, select the conversation from the left sidebar and click the blue **Collaborate** button in the upper right corner.

<figure><img src="../.gitbook/assets/public_snapshot1.png" alt=""><figcaption><p>Click the Collaborate button</p></figcaption></figure>

A popup will appear with the default tab of **Invite to collaborate**. Toggle the **Collaboration** slider and then click the blue **Copy link** button.

{% hint style="info" %}
Should you wish to discontinue collaboration at any point, simply switch the slider to the off position. Please note that this will invalidate the current link, and it will be different if you generate a new one.
{% endhint %}

<figure><img src="../.gitbook/assets/collab2.png" alt="" width="563"><figcaption><p>Enable collaboration and copy the link</p></figcaption></figure>

With this link, you can invite any colleagues with ease. There is no need to add each collaborator's email address manually.

{% hint style="info" %}
All invitees must have an account registered in the same SkyDeck.AI workspace as the conversation owner. This protects organizational assets and confidential information that may be contained within the GenStudio Workspace conversation.
{% endhint %}

{% hint style="info" %}
You can further enhance collaboration by synchronizing Slack channels with your GenStudio conversations. To learn more, please visit [Slack Synchronization](slack-synchronization.md) and [Slack Integration](../integrations/app-integrations/slack-integration.md).
{% endhint %}

### Collaborator View

Collaborators can only see the conversation they have been invited to. They will not be able to see the rest of your GenStudio conversations. To include them in additional conversations, you must provide separate links for each respective dialogue.

<figure><img src="../.gitbook/assets/collab3.png" alt="" width="563"><figcaption></figcaption></figure>

Invited collaborators can exit a conversation whenever they want by clicking the **Collaborate** button and then the red **Leave this conversation** button.

<figure><img src="../.gitbook/assets/collab4.png" alt="" width="563"><figcaption></figcaption></figure>

### Your View

Once a colleague contributes to the conversation, you will see a notification bubble on the conversation in your GenStudio Workspace.

<figure><img src="../.gitbook/assets/collab6.png" alt="" width="563"><figcaption></figcaption></figure>

Each individual's input or contributions will be marked by their respective initials. Hovering over the initials will reveal your colleague's name.

<figure><img src="../.gitbook/assets/collab5.png" alt=""><figcaption></figcaption></figure>

### Working with your colleagues

In GenStudio conversations, not every message needs to be sent to AI. Sending non-AI messages can enhance personal and direct interactions. Whether you're sharing updates, giving feedback, or simply having a chat, relying on non-AI messages ensures clarity and authenticity, allowing for meaningful connections and effective communication without the influence of artificial intelligence.

You can simply send non-AI messages as discussed in this [page](conversations.md), but collaboration enables a more powerful way to interact with you colleagues. When writing a message, you can use the @ notation followed by the member's name to mention them for the next message. This method ensures that specific individuals are alerted about pertinent information, updates, or actions that require their attention. It streamlines communication by directly tagging the involved parties, reducing the chance of important messages being overlooked and ensuring that everyone stays informed and engaged.

<figure><img src="../.gitbook/assets/collab-mentioning.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/web-browsing.md <==
# Web Browsing

Scraping content from websites to include in your prompts is a very helpful feature of GenStudio. Any URL you include in curly brackets will be replaced by the content scraped from that site. For example, you could write "Summarize the most important news from the following \{{https://nytimes.com\}}."

<figure><img src="../.gitbook/assets/web-scraping1.png" alt=""><figcaption><p>Web browsing with SkyDeck AI</p></figcaption></figure>

© 2023 SkyDeck AI Inc.


==> genstudio-workspace/slack-synchronization.md <==
# Slack Synchronization

By integrating with Slack, you can send your GenStudio conversations to a Slack channel and vice versa. This allows your team to collaborate seamlessly.

{% hint style="info" %}
This page will discuss about how you can synchronize between Slack and GenStudio. To learn more about how to set up Slack, please visit [Slack Integration](../integrations/app-integrations/slack-integration.md).
{% endhint %}

### Sending GenStudio conversations messages to Slack

Once you have connect a conversation with a public or private Slack channel, SkyDeck.AI will send all the current messages to that channel. This will only be done once at the beginning of the connection.

<figure><img src="../.gitbook/assets/sync-to-slack.png" alt="" width="563"><figcaption></figcaption></figure>

After that, for every new message that is sent to the conversation, it will also be sent to that Slack channel as well as its response.

<figure><img src="../.gitbook/assets/new-msg-from-conv.png" alt="" width="563"><figcaption></figcaption></figure>

### Sending Slack messages to GenStudio conversations

To send a message from Slack to the connected conversation:

1. Open the thread of that conversation
2. Tag the **SkyDeck.ai** app and write your prompt.
3. The message will be sent to GenStudio and you will receive the response back.

<figure><img src="../.gitbook/assets/new-msg-from-slack (1).png" alt="" width="563"><figcaption><p>Open the thread (1) - Send a message (2) - Response from GenStudio (3)</p></figcaption></figure>

Here is how the message will appear on GenStudio:

<figure><img src="../.gitbook/assets/gen-view.png" alt="" width="563"><figcaption></figcaption></figure>

### Formatting

Markdown does not work automatically in Slack when we send content from GenStudio Collaboration. So you will see `*hello*` instead of \*hello\*. This is a recent change in Slack. But there is a solution. In the desktop app you may manually turn markdown recognition \*on\* in the Advanced settings in Slack.

<figure><img src="../.gitbook/assets/Screenshot 2023-12-15 at 10.26.02 PM (1).png" alt=""><figcaption><p>Select "Format messages with markup"</p></figcaption></figure>

<figure><img src="../.gitbook/assets/Screenshot 2023-12-15 at 10.26.58 PM.png" alt=""><figcaption><p>An example of the improvement seen from turning on "Format messages with markdown".</p></figcaption></figure>


==> genstudio-workspace/tools/README.md <==
# Tools

### Introduction

The Tool feature helps to construct more complex prompts easily. Generally, a tool includes one or many input fields, which serve as variables for crafting a more detailed prompt. This simplifies the interaction with AI, as users only need to provide the dynamic content, and our tool handler will take care of the rest. There are two types of tools: **LLM Tools** and **Smart Tools**.

* LLM tools allow users to only need to give some small of inputs, and these will be sent to predefined prompts to be processed by LLMs. Each tool acts as a template that outlines the necessary components of a prompt, allowing users to focus on content rather than format. It is is especially beneficial for users who frequently generate similar prompts and wish to streamline their workflow.
* Smart Tools extend the capabilities of LLM Tools by incorporating Python code execution for data extraction and processing. The integration of Python enables users to perform complex calculations, data transformations, and other advanced operations beyond the scope of standard LLM Tools functionality.

### Usage

To use a tool, click on **Default tool** button below the prompt input field and you will see a list of available tools in the right column of the page. When you click on one of these tools, the input section is modified and you will see the inputs that the tool expects. After you fill these in and submit your choices, the tool will respond with output in your current conversation. You will then fall back into the default conversation mode and you can interact with the response from your tool with replies or follow up.

<figure><img src="../../.gitbook/assets/tools-menu.png" alt=""><figcaption><p>The Tools menu</p></figcaption></figure>

Within a conversation you might find you benefit from using many tools. You might start with one tool to get strategy advise. Then you might use a SQL tool to write a query to produce some follow up analysis. And finally you might use a writing tool to take your results and write them up in fashion targeted to the audience for your results.

### Define your own tools

In the following sections, we will show you how to use our default tools for your daily tasks. To define a custom tool, learn more at [develop-your-own-tools](../../developers/develop-your-own-tools/ "mention").

© 2023 SkyDeck AI Inc.


==> genstudio-workspace/tools/strategy-consultant/README.md <==
# Strategy Consultant

Strategy Consultant serves as your digital advisory partner, delivering insightful recommendations to address your unique challenges and requests. Drawing from a wealth of business training data, this tool guides you through consultations that simulate the thought processes of high-end consultants. This LLM offers a holistic view of opportunities, risks, and actionable strategies to help you make decisions that are informed, strategic, and aligned with your objectives.

<figure><img src="../../../.gitbook/assets/strategy-consultant-1.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can Strategy Consultant Help With?

**Market Analysis and Entry**

* What factors should I consider before entering the Asian market with a new product?
* How do I evaluate the competitive landscape in the e-commerce sector in Europe?

**Business Growth and Expansion**

* What strategies can I employ to scale my startup in its next phase?
* Which acquisition targets might be suitable for my company to expand its reach?

**Branding and Positioning**

* How can I differentiate my brand in an oversaturated market?
* What are the key elements of a successful rebranding campaign?

**Operational Efficiency**

* How can I streamline my company's supply chain operations?
* Are there best practices to improve my inventory turnover rate?

**Financial Strategy**

* How can I optimize my business's capital structure?
* What pricing strategies could boost my product's profitability?

**Digital Transformation**

* What are the steps to successfully digitize my traditional retail business?
* How can I leverage emerging technologies like AI and blockchain for my services?

**Talent Management and Organizational Structure**

* How can I restructure my organization for better agility and innovation?
* What strategies can aid in employee retention during corporate transitions?

**Innovation and Product Development**

* How can I foster a culture of innovation within my company?
* Which markets or segments should I target with my new product line?

**Risk Management**

* How do I assess and mitigate risks when expanding to a new region?
* What strategies can help in managing currency fluctuation risks for my export-heavy business?

**Customer Experience and Loyalty**

* How can I improve customer satisfaction in my service industry?
* What are the key drivers of customer loyalty in the digital age?

**Stakeholder and Investor Relations**

* How can I effectively communicate a major strategic shift to my investors?
* What are best practices for managing stakeholder expectations during mergers?

**Sustainability and Corporate Social Responsibility**

* How can my business pivot towards more sustainable practices without compromising profitability?
* What are the tangible benefits of integrating CSR into my business model?


==> genstudio-workspace/tools/strategy-consultant/example-employee-retention.md <==
---
description: Follow along with a step-by-step demonstration of Strategy Consultant
---

# Example – Employee Retention

In this example, we are asking Strategy Consultant that will help a company retain employees during a corporate transition.

<figure><img src="../../../.gitbook/assets/strategy-consultant-3.png" alt=""><figcaption></figcaption></figure>

Strategy Consultant starts by decomposing the question down into a few sub-questions:

<figure><img src="../../../.gitbook/assets/strategy-consultant-4.png" alt=""><figcaption></figcaption></figure>

The AI then addresses each of those sub-questions:

<figure><img src="../../../.gitbook/assets/strategy-consultant-5.png" alt=""><figcaption></figcaption></figure>

And finally, Strategy Consultant asks for specific types of additional information that would help improve the strategy to match your specific needs:

<figure><img src="../../../.gitbook/assets/strategy-consultant-6.png" alt=""><figcaption></figcaption></figure>

We then added some extra background information and context, so the AI would better understand the situation:

<figure><img src="../../../.gitbook/assets/strategy-consultant-7.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/strategy-consultant/how-to-use.md <==
# How to Use

To get started with Strategy Consultant, you just need to provide your questions or prompts!

<figure><img src="../../../.gitbook/assets/strategy-consultant-2.png" alt=""><figcaption></figcaption></figure>

The AI will follow a structured flow of operations to generate insightful responses:

1. **Thoughts Decomposition** – Break down the information given or the problem into smaller sub-questions or 'thoughts'.
2. **Thoughts Generation** – Generate potential answers or 'thoughts' for each of these sub-questions.
3. **Thoughts Evaluation** – Evaluate the relevance and potential impact of each thought.
4. **Search Algorithm** – Choose the most promising thought to further develop into a detailed response.
5. **I want to know more about** – If there are any knowledge gaps or specific types of information needed to provide a well-informed response, I will request additional information from you.

If the output seems to be missing some nuance or perspectives, you can submit additional information and Strategy Consultant with refine the strategies it presents.


==> genstudio-workspace/tools/legal-agreement-review/example-nda-clause.md <==
---
description: Follow along with a step-by-step demonstration of Legal Agreement Review
---

# Example – NDA Clause

In this example we are asking Legal Agreement Review to review this section of an NDA to see if there are any loopholes.

<figure><img src="../../../.gitbook/assets/legal-agreement-review-3.png" alt=""><figcaption></figcaption></figure>

The AI examines the clause and then outputs a thorough answer that looks at the clause from a few different angles.

<figure><img src="../../../.gitbook/assets/legal-agreement-review-4.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/legal-agreement-review/README.md <==
# Legal Agreement Review

Legal Agreement Review is your on-demand legal assistant, meticulously scanning contracts and agreements for potential pitfalls, inconsistencies, or non-standard clauses. By leveraging its vast knowledge base, Legal Agreement Review can help ensure that your legal documents are robust and compliant, offering clarity on intricate terms and providing recommendations that align with context.

<figure><img src="../../../.gitbook/assets/legal-agreement-review-1.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can Legal Agreement Review Help With?

**Clause Interpretation**

* What does this indemnification clause imply?
* How does this confidentiality clause impact my obligations?

**Comparison and Consistency**

* Is this non-compete clause standard for contracts in my industry?
* How does this termination provision compare to typical agreements?

**Legal Term Definitions**

* What is "force majeure"?
* Can you explain "fiduciary duty"?

**Risk Analysis**

* What potential liabilities does this contract expose me to?
* Are there any clauses that might be unfavorable in a dispute?

**Jurisdictional Queries**

* Is this choice of law clause advantageous for my business location?
* What does this arbitration provision mean for dispute resolution?

**Operational Implications**

* How does this service level agreement impact my business operations?
* What are the implications of this data protection clause on my company's IT policies?

**Compliance and Regulation**

* Does this contract comply with GDPR provisions?
* Are there any clauses that could be in conflict with local labor laws?

**Amendments and Changes**

* How can I modify this clause to be more favorable to my position?
* What's the process outlined in the contract for making amendments?

**Financial Queries**

* What does this payment term imply for cash flow?
* Are there any hidden fees or charges in this agreement?

**Terminology and Wording**

* Can this clause be simplified for better clarity?
* Is the wording of this provision legally binding or just a guideline?


==> genstudio-workspace/tools/legal-agreement-review/how-to-use.md <==
# How to Use

To get started with Legal Agreement Review provide an **Introduction** prompt, which is just any background information, questions, or specific concerns you want to address and the **Clause**, or section of the legal text you want to review.

<figure><img src="../../../.gitbook/assets/legal-agreement-review-2.png" alt=""><figcaption></figcaption></figure>

After the initial review, the AI may ask for more information or context to improve it's recommendations for a clause. As always, the more specifics you can provide, the better.


==> genstudio-workspace/tools/teach-me-anything/example-intro-to-programming.md <==
---
description: Follow along with a step-by-step demonstration of Teach Me Anything
---

# Example – Intro to Programming

In this example, we are interested in learning about Python Programming at an undergraduate level:

* **Lesson** – Introduction to Python Programming
* **Language** – English
* **Education Level** – Undergraduate
* **Learning Style** – Mixed - Visual (infographics, charts) and Lecture
* **Communication Style** – Informal
* **Tone Style** – Encouraging
* **Reasoning Framework** – Practical (step-by-step, actionable insights)
* **Using Emojis** – Yes

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-1.png" alt=""><figcaption></figcaption></figure>

Teach Me Anything generates a curriculum:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-2.png" alt=""><figcaption></figcaption></figure>

Once the lesson is started, the AI will work through each section of the curriculum:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-3.png" alt=""><figcaption></figcaption></figure>

At any time you can ask for more help or test your understanding, and Teach Me Anything will cover the topic or question with more depth:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-4.png" alt=""><figcaption></figcaption></figure>

You can then test your understanding:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-5.png" alt=""><figcaption></figcaption></figure>

When you are happy with your progress, jump back into the next curriculum topic any time:

<figure><img src="../../../.gitbook/assets/teach-me-anything-ex-6.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/teach-me-anything/README.md <==
# Teach Me Anything

Teach Me Anything is an LLM tutor offering personalized learning experiences on any topic you can imagine. Tailor each lesson to your preferences, selecting the teaching style, linguistic nuances, and depth of content. Then dive into /test mode, and the AI will asses your grasp of the subject.

<figure><img src="../../../.gitbook/assets/teach-me-anything-1.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can Teach Me Anything Help With?

Teach Me Anything has a wide scope, so there’s no end to what kinds of lessons you can request. Here is a list of general topics to give you an idea of how you can utilize this tool to learn:

* Sciences and Mathematics
* History
* Literature
* Technology and Computers
* Philosophy and Social Sciences
* Arts and Music
* Languages and Linguistics
* Geography and Earth Sciences
* Religion and Spirituality
* Sports and Recreation
* Health and Wellness
* Space and Astronomy
* Law and Governance
* Travel and Culture
* Business and Finance


==> genstudio-workspace/tools/teach-me-anything/how-to-use.md <==
# How to Use

Teach Me Anything offers 8 different categories to help you create a personalized learning experience. Here's an overview of each field, along with some example selections you might consider:

{% hint style="info" %}
These examples are not exhaustive, you can enter anything that you think is appropriate, and the AI will adjust.
{% endhint %}

* **Lesson** – the specific subject or topic you want to learn about.
  * The History of Renaissance Art
  * Macroeconomics
* **Language** – the language in which you want the information to be presented.
  * Spanish
  * English
  * French
* **Education Level** – the complexity and depth of the lesson designed to match a specific educational background or understanding.
  * Elementary
  * High School
  * Undergraduate
  * Postgraduate
* **Learning Style** – the preferred method or approach through which you best understand and retain information.
  * Visual (infographics, charts)
  * Auditory (spoken explanations, podcasts)
  * Kinesthetic (interactive exercises, simulations)
  * Reading/Writing (textual content, worksheets)
* **Communication Style** – The manner in which the information is articulated or conveyed.
  * Formal (academic, business-like)
  * Informal (casual, conversational)
  * Succinct (brief, to-the-point)
  * Detailed (comprehensive, in-depth)
* **Tone Style** – The emotional quality or mood of the lesson.
  * Professional (neutral, objective)
  * Friendly (warm, approachable)
  * Humorous (light-hearted, funny)
  * Enthusiastic (passionate, animated)
* **Reasoning Framework** – The logical structure or method used to present and make sense of the information.
  * Analytical (break down of components)
  * Critical (evaluating pros and cons)
  * Conceptual (big picture, overarching themes)
  * Practical (step-by-step, actionable insights)
* **Using Emojis** – Incorporating emojis to add an expressive or illustrative element to the content.
  * True or False

{% hint style="info" %}
You don't have to fill out every category, but make sure to remove the default text if you don't want it to impact the results of your lesson.
{% endhint %}

<figure><img src="../../../.gitbook/assets/teach-me-anything-2.png" alt=""><figcaption></figcaption></figure>

After you've personalized these categories and pressed the **Generate button**, Teach Me Anything will reiterate your preferences and tell you how to create a lesson plan.

<figure><img src="../../../.gitbook/assets/teach-me-anything-3.png" alt=""><figcaption></figcaption></figure>

### /plan

The `/plan` command asks the AI to create a lesson plan that matches your preferences. The output will vary widely depending on your initial inputs.

<figure><img src="../../../.gitbook/assets/teach-me-anything-4.png" alt=""><figcaption></figcaption></figure>

### /change

The `/change` command allows you to modify your preferences. For example, you could change Learning Style by entering `/change learning style=Active`.

### /skip

The `/skip` command allows you to skip a certain part of the lesson For example, if Teach Me Anything is suggesting pre-requisite content that you already feel comfortable with, type `/skip` to move forward.

### /start

The `/start` command is used to officially start the lesson once you are happy with your preferences and the lesson plan.

<figure><img src="../../../.gitbook/assets/teach-me-anything-5.png" alt=""><figcaption></figcaption></figure>

### /continue

The `/continue` command is used to move the lesson forward to the next topic.

<figure><img src="../../../.gitbook/assets/teach-me-anything-6.png" alt=""><figcaption></figcaption></figure>

### /test

The `/test` command is used to test your understanding of a lesson section. Teach Me Anything will create questions or open-ended dialogue to test if you fully comprehend the curriculum or need more review/practice.

<figure><img src="../../../.gitbook/assets/teach-me-anything-7.png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/sql-assistant/example-query-debugging.md <==
---
description: Follow along with a step-by-step demonstration of SQL Assistant
---

# Example – Query Debugging

In this example, we are asking SQL Assistant to debug a query that is not working as intended.

<figure><img src="../../../.gitbook/assets/sql-assistant-3.png" alt="" width="563"><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/sql-assistant-4.png" alt="" width="563"><figcaption></figcaption></figure>

SQL Assistant identifies what is wrong and provides the correct query needed to fetch the intended customer emails.

<figure><img src="../../../.gitbook/assets/sql-assistant-5.png" alt="" width="563"><figcaption></figcaption></figure>


==> genstudio-workspace/tools/sql-assistant/README.md <==
# SQL Assistant

SQL Assistant is an innovative SQL database LLM that serves as your virtual database consultant, aiding in query optimization, schema design, and data management tasks. Whether you're troubleshooting performance bottlenecks or seeking advice on relational design principles, SQL Assistant empowers you to harness the full potential of your data through efficient database operations.

<figure><img src="../../../.gitbook/assets/sql-assistant-1.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can SQL Assistant Help With?

SQL Assistant can help with a range of SQL-related questions including, but no limited to:

* **Writing SQL queries** – Assist in writing various SQL queries like SELECT, INSERT, UPDATE, DELETE, ALTER, CREATE, DROP, etc.
* **Explaining SQL concepts** – Explain various SQL concepts, such as joins, normalization, indexing, transactions, stored procedures, etc.
* **Troubleshooting SQL queries** – Help debug and provide solutions or workarounds for queries that aren’t working as expected.
* **Optimizing SQL queries** – Suggest ways to optimize your SQL queries for better performance.
* **Data modeling** – Assist in designing database schemas and offer advice on best practices.
* **SQL for Data Analysis** – Write complex queries to perform data analysis tasks.
* **Database Management** – Help with concepts related to managing databases like backups, replication, partitioning, etc.


==> genstudio-workspace/tools/sql-assistant/how-to-use.md <==
# How to Use

To get started with SQL Assistant, you will need to provide a Data Definition Language (DDL) segment and a task description.

* **DDL** **segment** – a subset of SQL commands, objects, attributes, and constraints that is focused on defining or modifying the structure of database objects.
* **Task description** – instructions related to the DDL that tells SQL Assistant what you need help with.

<figure><img src="../../../.gitbook/assets/sql-assistant-2.png" alt=""><figcaption></figcaption></figure>

The default placeholder prompt that loads whenever you create a new chat with SQL Assistant, models how to create your own prompts:

* The DDL statement creates a table called ‘transactions’ with 5 columns (transaction\_id, customer\_id, transaction\_date, amount, and description).
* The task description asks SQL Assistant to provide a query that will print all the transactions higher than 1000 dollars.


==> genstudio-workspace/tools/image-generator/README.md <==
# Image Generator

Image Generator uses OpenAI's DALL-E model to produce visual content based on textual prompts. Unlike traditional LLMs that generate textual outputs, this specialized model can understand descriptive prompts and translate them into corresponding images.

<figure><img src="../../../.gitbook/assets/image-generator-1.png" alt=""><figcaption></figcaption></figure>

Its capabilities encompass a wide range of applications, including:

* **Concept Visualization** – Turn abstract ideas or textual descriptions into visual representations.
* **Design Mockups** – Provide a brief, and the model can generate initial design concepts or mockups.
* **Artistic Creations** – Describe a scene, mood, or style, and the LLM can craft a piece of art aligned with that vision.
* **Educational Diagrams** – Generate diagrams or illustrations for educational content based on specific topics or concepts.
* **Entertainment** – Create character designs, landscapes, or any visual content based on fictional narratives or stories.

Image Generator opens up a realm of possibilities for professionals, educators, artists, and enthusiasts, making the process of visual creation more accessible to all. By simply providing a detailed prompt, you can obtain custom visuals without the need for advanced design skills or software.


==> genstudio-workspace/tools/image-generator/example-winter-wonderland.md <==
---
description: Follow along with a step-by-step demonstration of Image Generator
---

# Example – Winter Wonderland

In this example, we are being as specific as possible to create an artistic image:

<figure><img src="../../../.gitbook/assets/image-generator-2.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
The image link will expire in 1 hour. Save the picture before it expires if you would like to use it or review it later.
{% endhint %}

Image Generator created the following image:

<figure><img src="../../../.gitbook/assets/image (46).png" alt=""><figcaption></figcaption></figure>

If you don't like the exact composition of the image, click **Regenerate** to create a new image with the same prompt:

<figure><img src="../../../.gitbook/assets/image (47).png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/tools/image-generator/how-to-use.md <==
# How to Use

To get started with Image Generator, you need to provide a description of the image you wish to create. Here are some general guidelines for terms:

* **Objects** – Use names of objects such as apple, car, house, etc.
* **Colors** – Specify colors such as red, blue, green, etc.
* **Sizes** – Specify sizes like large, small, tall, etc.
* **Shapes** – Specify shapes like square, round, rectangular, etc.
* **Materials** – Specify types of materials like wooden, metal, glass, etc.
* **Animals/People** – Specify different types of animals or people like cat, dog, woman, man, etc.
* **Scenery** – Specify different types of scenery like sunset, beach, mountain, etc.
* **Moods** – Specify different moods like happy, sad, angry, etc.
* **Realism** – Specify the degree of accuracy or abstractness like photorealistic, cartoonish, impressionist, etc.

{% hint style="info" %}
You can only generate one image per request based on the provided description.
{% endhint %}

Remember, the more specific your description, the more accurate the generated image will be. For example, instead of just saying "cat", you might say "a large orange cat sitting on a blue sofa". This will give the model a more specific image to generate.

![](<../../../.gitbook/assets/image (43).png>)![](<../../../.gitbook/assets/image (44).png>)


==> genstudio-workspace/tools/pair-programmer/README.md <==
# Pair Programmer

Pair Programmer is an advanced AI programming tool that acts as your coding companion, providing immediate assistance with code-related queries, debugging challenges, and optimization tips. Whether you're grappling with complex algorithms or seeking best-practice advice, Pair Programmer is designed to improve your coding and streamline your development process, making software creation more efficient and intuitive.

<figure><img src="../../../.gitbook/assets/pair-programmer.png" alt=""><figcaption></figcaption></figure>

## What Type of Questions Can Pair Programmer Help With?

Pair Programmer can help with tons of questions across the software development spectrum, from foundational concepts to advanced topics. While the following list of topics and examples is extensive, it doesn’t come close to covering every use case. We invite you to plug in any of these examples and explore the depth of Pair Programmer.

**Syntax and Semantics**

* What's the correct syntax for a for-loop in Java?
* How does Python's list comprehension work?

**Debugging and Troubleshooting**

* Why am I getting a "Segmentation fault" error in my C code?
* What causes a "NullPointerException" in Java?

**Best Practices**

* How should I structure a RESTful API?
* What are the recommended naming conventions for SQL tables?

**Libraries and Frameworks**

* How do I start a new project with React?
* Can you explain how Flask routing works?

**Algorithms and Data Structures**

* How does a quicksort algorithm work?
* Can you help me implement a binary tree?

**Performance Optimization**

* Why is my SQL query running slowly?
* How can I optimize my Python script for better memory management?

**Software Architecture**

* What's the difference between MVC and MVVM patterns?
* How can microservices benefit my application?

**Tooling and Environment Setups**

* How do I set up a virtual environment in Python?
* What's the difference between npm and yarn?

**Version Control**

* How do I resolve a git merge conflict?
* What's the best way to structure branch workflows in git?

**Deployment and Operations**

* How can I deploy my web application using Docker?
* What's the role of Kubernetes in modern software architecture?

**Security**

* How can I prevent SQL injection in my web application?
* What are best practices for securely storing user passwords?

**Languages and Paradigms**

* Can you explain functional programming concepts in JavaScript?
* What's the difference between Procedural and Object-Oriented programming?

**Databases and Storage**

* How do I normalize a relational database?
* What are the benefits of using a NoSQL database like MongoDB over traditional relational databases?

**Hardware and System-Level Questions**

* How does garbage collection work in programming languages?
* What's the difference between parallel and concurrent processing?

**Trends and Updates**

* What are the new features in the latest version of Python?
* How is WebAssembly changing web development?


==> genstudio-workspace/tools/pair-programmer/how-to-use.md <==
# How to Use

To get started with Pair Programmer, you will need to specify programming language you are using or want to use. By default, the field is set to Python.

Once you submit your programming language, you will receive a message similar to the one below (although the exact wording may differ) that details what Pair Programmer has to offer and provides some useful commands:

<figure><img src="../../../.gitbook/assets/pair-programmer-2.png" alt=""><figcaption></figcaption></figure>

If everything looks correct, you can then write your programming question into the prompt area.

### /change

The `/change` command allows you to modify your preferences when interacting with Pair Programmer. Currently, it supports two options:

* **Programming language** – Switch programming language. For example, enter `/change language=Java` to switch to Java.
* **Interaction language** – Change the communication language. For example, enter `/change language=Spanish` to switch to Spanish.

### /implement

The `/implement` command is used when you want to create a new program. It follows a five-step procedure to ensure a thorough approach:

For example, you could input`/implement task=TaskDescription`. Please replace `TaskDescription` with a description of the task you want to be implemented.

#### Example

Let's say you want to implement a program that calculates the sum of all elements in a list.

{% code overflow="wrap" %}
||CODE_BLOCK||
/implement task=Create a Python function that calculates the sum of all elements in a list. The function should take a list of integers as input and return an integer as output.
||CODE_BLOCK||
{% endcode %}

### /modify

The `/modify` command is used when you want changes or adjustments made to an existing program. Input `/modify code=ProgramCode modifications=ProgramModification`. Please replace `ProgramCode` with the program you want to modify, and `ProgramModification` with a description of what you want to change.

#### Example

For example, imagine you have a Python function that calculates the area of a rectangle, and you want to modify it to calculate the area of a circle instead.

{% code overflow="wrap" %}
||CODE_BLOCK||
/modify code=
def rectangle_area(length, width):
    return length * width

modifications=
Change the function to calculate the area of a circle instead, using the formula `pi * radius^2`. The function should take a single argument for the radius.
||CODE_BLOCK||
{% endcode %}

### /test

The `/test` command is used when you want me to create test cases for a given program. Input `/test code=ProgramCode description=ProgramDescription`. Please replace `ProgramCode` with the program you want to test, and `ProgramDescription` with a description of what the program does.

#### Example

Let's say you have a Python function that calculates the factorial of a number and you want to create test cases for it

{% code overflow="wrap" %}
||CODE_BLOCK||
/test code=
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

description=
This function calculates the factorial of a given number. The factorial of a number n is the product of all positive integers less than or equal to n.
||CODE_BLOCK||
{% endcode %}


==> genstudio-workspace/tools/pair-programmer/example-python-script-assistance.md <==
---
description: Follow along with a step-by-step demonstration of Pair Programmer
---

# Example – Python Script Assistance

In this example, we are asking Pair Programmer to help with a Python script that is not working as intended in relation to large CSV files.

<figure><img src="../../../.gitbook/assets/pair-programmer-3.png" alt=""><figcaption></figcaption></figure>

The tool takes a second to analyze your prompt. Every response is customized, so no prompts will have the exact same output. For this prompt, Pair Programmer started with Requirements that reiterated what we asked.

<figure><img src="../../../.gitbook/assets/pair-programmer-4.png" alt=""><figcaption></figcaption></figure>

Sometimes you may ask for a solution that does not exist. Pair Programmer may let you know if it can provide an adequate answer and how the tool is going to answer your prompt.

<figure><img src="../../../.gitbook/assets/pair-programmer-5.png" alt=""><figcaption></figcaption></figure>

For our Python script prompt, Pair Programmer is explaining different ways we can modify our script, complete with code examples.

<figure><img src="../../../.gitbook/assets/pair-programmer-6.png" alt=""><figcaption></figcaption></figure>

Pair Programmer may also provide us some follow-up questions so that AI can understand the specific needs of your situation. You can then ask those questions to request further assistance.

<figure><img src="../../../.gitbook/assets/pair-programmer-7.png" alt=""><figcaption></figcaption></figure>

Pair Programmer then provides updated strategies that better suit your needs. There may be more follow-up questions. As you answer more questions and provide further information, your output will be more specific. Pair Programmer automatically understands the context for each additional query.

<figure><img src="../../../.gitbook/assets/pair-programmer-8 (1).png" alt=""><figcaption></figcaption></figure>


==> genstudio-workspace/data-security/data-loss-prevention.md <==
# Data Loss Prevention

Our data loss prevention system helps users safeguard their personal identifiable information (PII). It works by scanning user input for sensitive data, and provides real-time warnings to help prevent unintentional data exposure.

The system is designed to detect a wide range of sensitive data types. When a user's input includes these types of data, our system will alert the user. The user then has the option to send the message anyway, anonymize the text, or choose not to send the message at all.

## List of supported entities:

### **Global Entities:**

* Credit Card Numbers
* Crypto Wallet Numbers
* Email Addresses
* International Bank Account Numbers (IBAN)
* Phone Numbers
* Medical License Numbers

### **Country Specific Entities:**

#### USA:

* US Bank Account Numbers
* US Driver License Numbers
* US Individual Taxpayer Identification Numbers (ITIN)
* US Passport Numbers
* US Social Security Numbers (SSN)

#### UK:

* UK National Health Service (NHS) Numbers

#### Spain:

* Spanish Tax ID (NIF) Numbers

#### Italy:

* Italian Personal Identification Codes
* Italian Driver License Numbers
* Italian VAT Code Numbers
* Italian Passport Numbers
* Italian Identity Card Numbers

#### Singapore:

* Singapore National Registration Identification Card Numbers

#### Australia:

* Australian Business Numbers (ABN)
* Australian Company Numbers (ACN)
* Australian Tax File Numbers (TFN)
* Australian Medicare Numbers

© 2023 SkyDeck AI Inc.


==> genstudio-workspace/data-security/README.md <==
---
description: >-
  Every part of the SkyDeck AI system is designed to allow enhanced security
  over activities and data protection for all users.
---

# Data Security

## OpenAI API Usage

One of the key advantages of using your OpenAI api key in **SkyDeck AI** is that it **enables private access to OpenAI systems**. If one uses free or paid ChatGPT services OpenAI makes no promises about data security. But if one uses an OpenAI API key in Control Center then all of the chat interaction by your users in GenStudio remains private. \
\
This is what [OpenAI writes](https://openai.com/security) on the subject:\
\
"Data submitted through the OpenAI API is not used to train OpenAI models or improve OpenAI’s service offering. Data submitted through non-API consumer services ChatGPT or DALL·E may be used to improve our models."


==> developers/README.md <==
# Developers



==> developers/develop-your-own-tools/json-format-for-tools.md <==
---
description: As of July 26, 2023
---

# JSON format for Tools

## Introduction

This documentation outlines the JSON structures supported by SkyDeck AI for two distinct types of tools: LLM Tools and Smart Tools. The purpose of this page is to provide a brief introduction to these tool categories and their respective JSON structures. Detailed information and examples for each tool type can be found in the corresponding sub-pages.

***

#### LLM Tools

LLM (Large Language Model) Tools are designed to facilitate user interaction with LLM models by sending user input to predefined prompts.

{% content-ref url="json-format-for-llm-tools.md" %}
[json-format-for-llm-tools.md](json-format-for-llm-tools.md)
{% endcontent-ref %}

#### Smart Tools

Smart Tools extend the capabilities of LLM Tools by incorporating Python code execution for data extraction and processing. The integration of Python enables users to perform complex calculations, data transformations, and other advanced operations beyond the scope of standard LLM Tools functionality.

{% content-ref url="json-format-for-smart-tools.md" %}
[json-format-for-smart-tools.md](json-format-for-smart-tools.md)
{% endcontent-ref %}


==> developers/develop-your-own-tools/example-text-based-ui-generator.md <==
---
description: >-
  This tool generates a text-based user interface based on description. Full
  source code is provided for you to try out.
---

# Example: Text-based UI Generator

We are advocates of AI Driven Development as practiced by https://eastagile.com. To support that we use AI to help us develop user interfaces. This tool generates a text-based user interface based on description and an (optionl) request for certain user interface elements. The prompt for the tool asks for design elements as well as appropriate UI text.\
\
This example is presented as a concete and practical example of a tool that one might create and deploy throughout your team.\
\
Here is an example of its usage.\
\
User Input:

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-07 at 9.26.08 PM.png" alt=""><figcaption><p>Sample input using the specified input fields.</p></figcaption></figure>

Generated Output:

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-07 at 9.26.33 PM.png" alt=""><figcaption><p>A text-based user interface with text generated by our app.</p></figcaption></figure>

You add your custom tool json inside Genstudio.

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-07 at 9.44.56 PM.png" alt=""><figcaption><p>Upload json to define a custom tool</p></figcaption></figure>

\
\
Here is the actual json that you would update in a file (i.e. text-based-ux-designer.json).&#x20;

||CODE_BLOCK||json
{
"version": "0.1",
"metadata": {
"avatar": "",
"creator": {
"name": "Inspired by Khoa Tran",
"email": "admin@eastagile.com",
"organization": "East Agile"
},
"timestamp": "2023-06-01T10:00:00Z",
"variables": [
{
"name": "Feature Description",
"type": "text",
"default": "",
"description": "A brief description of the feature or functionality."
},
{
"name": "UI Components",
"type": "text",
"default": "Anything appropriate and conventional",
"description": "The type of user interface components (e.g., radio button, multi-select list)."
}
],
"parameters": {
"top_p": 1,
"max_tokens": 1024,
"temperature": 0.7,
"presence_penalty": 0,
"frequency_penalty": 0
},
"avatar_type": "base64",
"description": "This tool generates a text-based user interface based on your description and user interface components specified.",
"prompt_name": "Text-based User Interface Generator",
"usage_notes": "Provide a description of what sort of interface, feature, or app you want to generate (Feature Description) and any specific type of user interface elements you wish to use (UI Components). This application is designed to support AI Driven Development (AiDD) as practiced by East Agile https://eastagile.com.",
"model_version": [
"gpt-3.5",
"gpt-4",
"claude",
"palm"
],
"expected_output": {
"type": "text"
}
},
"model_prompt": "Generate a text-based user interface with wording for the following feature or functionality:\n\nFeature Description: {{Feature Description}}\nUser Interface Elements: {{UI Components}}.\n\nPlease follow these best practices for creating effective UX writing:\n1. Make it usable: Prioritize functionality and ease of use over clever language or unconventional design.\n2. Make it helpful: Provide useful information that guides users and helps them accomplish their goals.\n3. Make it accessible: Use simple, clear language and conentional design elements that make it easy for all users to understand, including those with disabilities.\n4. Make it clear: Avoid jargon and ambiguity; users should be able to understand the content and UI quickly and easily. When possible UI affordances should be obvious without needing to read text.\n5. Make it appropriate: Consider the cultural background and context of your users, if provided, and ensure the content is inclusive and respectful.\n6. Use the active voice: Prompt users to take action by using active, direct language.\n7. Write positively: Focus on affirmative statements and avoid negative phrases unless absolutely necessary.\n8. Be concise: Keep sentences short and to the point, eliminating unnecessary words and phrases.\n9. Perform constant A/B testing: Continuously test and refine the content to ensure it is effective and user-friendly.\n10. Keep brand voice and tone consistent: Ensure the content aligns with the overall brand personality and maintains a consistent tone throughout the user experience.\n11. Use action-oriented language: Encourage users to take action by using language that is clear, direct, and focused on specific tasks.\n12. Maintain contextual relevance: Provide relevant context to ensure the content is easily localizable and translatable for different languages and cultures.\n\nGenerated UX Writing Content:\n"
}

||CODE_BLOCK||

You could create your own icon and enter it as a base64 block of text to this json. Otherwise a nice default will be used.


==> developers/develop-your-own-tools/json-format-for-smart-tools.md <==
---
description: A portable way to share SkyDeck.AI smart tools written in Python code
---

# JSON Format for Smart Tools

## Overall <a href="#lgmg27qgfdrg" id="lgmg27qgfdrg"></a>

To create a smart tool on SkyDeck.AI, you need to upload a set of files according to the specifications mentioned in the File Structure section. Once uploaded, our platform will perform the initial setup, which may take a few minutes. Afterward, the tool will be available in the GenStudio Workspace.

## File Structure <a href="#id-7dcm0ac78x60" id="id-7dcm0ac78x60"></a>

### \<tool\_name>.json <a href="#xvdq6eic1eed" id="xvdq6eic1eed"></a>

The tool's behavior is also configured through a JSON file. Here is a brief overview of the key fields in the configuration:

* **version**: The current version of the tool.
* **tool\_name**: The name of the tool. This name should be unique in your workspace.
* **tool\_code**: Contains the Python code to be executed. More details on this field will be on the next section.
* **description**: A brief description of what the tool does.
* **usage\_notes**: Instructions on how to use the tool.
* **model\_version**: Specify the models that are allowed to use for follow-up questions. To specify all models, use _\["gpt-4", "gpt-3.5", "claude", "chat-bison"]_.
* **creator**: Information about the creator of the tool, including name, email, and organization.
* **variables**: An array of variables used by the tool. Each variable has a name, description, and default value. The order of variables in the UI follows the order in this array.
* **expected\_output**: The type of output produced by the tool. During the development stage, the value should always be text.
* **avatar\_type**: The format of the avatar used in the tool's UI.
* **timestamp**: The date and time when the tool was last updated.
* **requirements:** specifies the required packages to run the script in tool\_code.
* **avatar**: the string representing the logo of this tool

### tool\_code convention: <a href="#id-177qobv2sfe9" id="id-177qobv2sfe9"></a>

This script outlines the functioning of your tool. The main component of this script is the _execute_ function, which has the following requirements:

* The function should have a single input parameter called _variables_, which is a dictionary. Each key in this dictionary corresponds to a field that the user would input into your tool.
* The function should return a string, which will be displayed as the response on the GenStudio UI.

## Example Tools <a href="#h9o86a5lgfut" id="h9o86a5lgfut"></a>

### Image generation using DALL-E 2 <a href="#quzi31gwxka6" id="quzi31gwxka6"></a>

**Description:**

This tool accepts an image description as input and generates a corresponding URL for the image. The output includes the URL along with an expiration note. The tool functions by sending the query to the OpenAI DALL-E API and retrieving the response.

**Input:**

* Description: Image description, e.g., "A white furry cat"

**Output:**

* A message with the generated URL for the image along with the expiration note.

#### Python script (which would be a field inside image\_generation.json): <a href="#qw9m9923kptk" id="qw9m9923kptk"></a>

||CODE_BLOCK||python
import openai
def execute(variables):
    openai.api_key = '<USER API KEY>'
    description = variables['Description']
    response = openai.Image.create(
        prompt=description,
        n=1,
        size="1024x1024"
    )
    image_url = response['data'][0]['url']
    return f"Here is the link to your image:{image_url}. The link will expire in 1 hour."
||CODE_BLOCK||

#### image\_generation.json <a href="#id-4q3mtb2zf8gt" id="id-4q3mtb2zf8gt"></a>

||CODE_BLOCK||json
{
    "version": "0.1",
    "metadata": {
        "tool_name": "Image generation",
        "tool_code": "import openai\n\ndef execute(variables):\n openai.api_key = ''\n description = variables['Description']\n response = openai.Image.create(\n prompt=description,\n n=1,\n size=\"1024x1024\"\n )\n\n image_url = response['data'][0]['url']\n return f\"Here is the link to your image:{image_url}. The link will be expired in 1 hour.\"\n",
        "description": "Generated an image based on the description with OpenAI's DALL-E model.",
        "usage_notes": "Describe the image in detail and put it in the description field. An URL of the image will be returned. The lifetime of the URL is about 1 hour, so make sure to download it before expired",
        "model_version": ["gpt-3.5","gpt-3.5-turbo", "gpt-4", "claude"],
        "creator": {
            "name": "SkyDeck AI",
            "email": "skydeck@eastagile.com",
            "organization": "East Agile"
        },
        "variables": [
            {
                "name": "Description",
                "description": "Image description",
                "default": "a white siamese cat"
            }
        ],
        "expected_output": {
            "type": "text"
        },
        "avatar_type": "base64",
        "timestamp": "2023-05-23T10:00:00Z",
        "requirements": "openai>=0.27.4",
        "avatar": ""
    }
}
||CODE_BLOCK||

### Real-time weather report with Open-Meteo API <a href="#yhjv7lbl4mu0" id="yhjv7lbl4mu0"></a>

**Description**:

This tool leverages the Open-Meteo API to provide real-time weather information based on users' questions. By asking a question about the weather, such as temperature, precipitation, or wind conditions, the tool retrieves the most relevant and up-to-date data.

The functioning of this tool relies on APIChain - a feature from the LangChain library - to access the Open-Meteo API documentation. This enables the tool to learn how to make the correct API calls and retrieve the required information seamlessly.

**Input**:

* Question: Ask a specific question about the weather, e.g., "What is the current temperature in New York City?"

**Output**:

* A response providing the requested weather information.

#### Python script (which would be a field inside weather\_reporter.json): <a href="#qw9m9923kptk" id="qw9m9923kptk"></a>

||CODE_BLOCK||python
from langchain.chains.api import open_meteo_docs
from langchain.chat_models import ChatOpenAI
from langchain.chains import APIChain
def execute(variables):
    question = variables['Question']
    llm = ChatOpenAI(
        model_name='gpt-3.5-turbo',
        openai_api_key='<USER API KEY>'
    )
    api_chain = APIChain.from_llm_and_api_docs(
        llm, open_meteo_docs.OPEN_METEO_DOCS, verbose=False
    )
    result = api_chain.run(question)
    return result
||CODE_BLOCK||

{% hint style="info" %}
Note that Langchain is now integrated with Rememberizer. See [https://python.langchain.com/docs/integrations/retrievers/rememberizer/](https://python.langchain.com/docs/integrations/retrievers/rememberizer/)
{% endhint %}

#### weather\_reporter.json <a href="#bgnhw14oi99h" id="bgnhw14oi99h"></a>

||CODE_BLOCK||json
{
  "version": "0.1",
  "metadata": {
    "tool_name": "Weather Reporter",
    "tool_code": "from langchain.chains.api import open_meteo_docs\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.chains import APIChain\n\n\ndef execute(variables):\n question = variables['Question']\n llm = ChatOpenAI(model_name='gpt-3.5-turbo',\n openai_api_key='')\n api_chain = APIChain.from_llm_and_api_docs(\n llm, open_meteo_docs.OPEN_METEO_DOCS, verbose=False)\n result = api_chain.run(question)\n return result\n",
    "description": "Leverage the Open-Meteo API to retrieve real-time weather details",
    "usage_notes": "Enter your weather-related question in the provided field",
    "model_version": ["gpt-3.5", "gpt-3.5-turbo", "gpt-4", "claude"],
    "creator": {
      "name": "SkyDeck AI",
      "email": "skydeck@eastagile.com",
      "organization": "East Agile"
    },
    "variables": [
      {
        "name": "Question",
        "description": "Inquire about the weather conditions",
        "default": "What is the current temperature in Munich, Germany, expressed in degrees Celsius?"
      }
    ],
    "expected_output": {
      "type": "text"
    },
    "avatar_type": "base64",
    "timestamp": "2023-07-13T10:00:00Z",
    "requirements": "openai>=0.27.4\nlangchain>=0.0.229",
    "avatar": ""
  }
}
||CODE_BLOCK||

## Limitations <a href="#g32lfwd6xlxx" id="g32lfwd6xlxx"></a>

AWS Lambda only allows a function to run for a maximum of 15 minutes and 10GB of RAM. Therefore, the tools should finish their execution within this constraint.


==> developers/develop-your-own-tools/README.md <==
---
description: >-
  You can create custom prompts, and advanced tools for use in SkyDeckAI or to
  share with other elsewhere.
---

# Develop Your Own Tools

You upload json that defines custom tools inside GenStudio.&#x20;

<figure><img src="../../.gitbook/assets/Custom Tools Upload Screen - GenStudio.png" alt=""><figcaption><p>Uploading json that defines a custom tool</p></figcaption></figure>


==> developers/develop-your-own-tools/json-format-for-llm-tools.md <==
---
description: A Portable Way to Share Tools
---

# JSON Format for LLM Tools

## Introduction

Sharing a tool in a way that could be quickly added to a program or tool editor would be greatly improved with a standard way to represent a tool and how to use it. We want to enable features such as the following:

* An icon to visually represent the tool
* Metadata for the prompt:
  * A name for the tool
  * A description for the tool
  * Usage notes for the tool
* Placeholder parameters that are included in the tool string
* Expected output
* Versioning and timestamps.

## JSON Format Specification

||CODE_BLOCK||json
{
  "version": "string or integer",
  "model_prompt": "string with {{variable_name}} placeholders",
  "metadata": {
    "prompt_name": "string",
    "description": "string",
    "usage_notes": "string",
    "model_version": ["string", "string", …],
    "creator": {
      "name": "string",
      "email": "string",
      "organization": "string"
    },
    "parameters": {
      "temperature": "float",
      "max_tokens": "integer",
      "top_p": "float",
      "frequency_penalty": "float",
      "presence_penalty": "float"
    },
    "variables": [
      {
        "name": "variable name 1",
        "type": "text",
        "description": "string",
        "default": "string",
      },
      {
        "name": "variable name 2",
        "type": "single-select",
        "description": "string",
        "default": "value1",
        "allowed_values": ["value1", "value2", "value3"]
      },
      {
        "name": "variable name 3",
        "type": "multi-select",
        "description": "string",
        "default": ["value1", "value2"]
        "allowed_values": ["value1", "value2", "value3"]
      },
      ...
    ],
    "expected_output": {
      "type": "string (e.g., text, code, limited)",
      "format": "string (optional, e.g., JSON, XML, CSV)",
      "language": "string (optional, e.g., Python, JavaScript)",
      "allowed_values": ["string1", "string2", ...] (optional)
    },
    "avatar_type": "string (e.g., url, base64)",
    "avatar": "string (URL or base64-encoded image), 256x256 pixels recommended",
    "timestamp": "string (ISO 8601 format)"
  }
}
||CODE_BLOCK||

You can download our sample JSON [here](https://skydeck-public-assets.s3.amazonaws.com/sample\_tool.json).

## Fields Description

* **model\_prompt**: A string containing the GPT model prompt.
* **metadata**: An object containing additional information about the GPT model prompt, including the following sub-fields:
  * **model\_version**: A string indicating the version of the GPT model used.
  * **creator**: An object containing information about the creator of the GPT model prompt, with the following sub-fields:
    * **name**: A string representing the name of the creator.
    * **email**: A string representing the email of the creator.
    * **organization**: A string representing the organization the creator is affiliated with.
  * **parameters**: An object containing information about the GPT model parameters, with the following sub-fields:
    * **temperature**: A float indicating the temperature used for controlling the randomness of the output.
    * **max\_tokens**: An integer indicating the maximum number of tokens in the generated response.
    * **top\_p**: A float representing the nucleus sampling probability threshold.
    * **frequency\_penalty**: A float representing the penalty applied to tokens based on their frequency in the dataset.
    * **presence\_penalty**: A float representing the penalty applied to new tokens based on their presence in the prompt.
  * **timestamp**: A string in ISO 8601 format representing the date and time when the GPT model prompt was created or last modified.
  * **expected\_output (Optional)**: An object containing fields related to the expected output from the model\_prompt, including the following sub-fields:
    * **type**: A string indicating the type of output expected from the model\_prompt.
    * **format (Optional)**: A string representing the format of the expected output if applicable.
    * **language (Optional)**: A string representing the programming language of the expected output if the type is `code`.
    * **allowed\_values (Optional)**: An array of strings containing a list of allowed output values if the type is `limited`.
  * **variables (Optional)**: A list containing variables that might be inserted into the `model_prompt` string in an f-string style. Each variable contains the following sub-fields:
    * **name**: A string representing the variable name.
    * **type**: A string showing the type of variable. Currently the possible values of `type` are `text` for default variable, and `single-select` or `multi-select` for selection variables.
    * **description**: A string showing the description of the variable, including usages and examples.
    * **default**: A value showing the default value of the variable. This value is a string if `type` is `text` or `single-select`, and an array of strings for `multi-select`.
    * **allowed\_values**: An array of strings containing a list of allowed values if the variable type is `single-select` or `multi-select`
  * **avatar (Optional)**: An object containing fields related to the graphic image acting as an avatar or icon for the prompt, including the following sub-fields:
    * **avatar\_type**: A string specifying the type of avatar data included.
    * **avatar**: A string containing the URL pointing to the image if the avatar\_type is `url`, or a base64-encoded string representing the image if the avatar\_type is `base64`.
  * **prompt\_name (Optional)**: A string representing the name of the prompt.
  * **description (Optional)**: A string providing a brief description of the tool and its purpose.
  * **usage\_notes (Optional)**: A string containing free-form notes from the creator about the usage or any specific considerations related to the tool.

To specify the format of the expected output from the model\_prompt, you can add an `expected_output` object within the `metadata` object. Depending on the type of expected output, you can include the relevant sub-fields in the `expected_output` object.

To include fields for variables that might be inserted into the `model_prompt` string in an f-string style, you can add a separate `variables` list within the `metadata` object.

To include a graphic image acting as an avatar or icon for the prompt, you can add an `avatar` field within the `metadata` object.

Including the `expected_output`, `variables`, `avatar`, `prompt_name`, `description`, and `usage_notes` fields within the `metadata` object helps keep all the contextual information about the prompt in one place, making it easier to manage and understand.

You can use the `version` field at the top level of the JSON object to explicitly track the version of the entire JSON file


||CODE_BLOCK||


||CODE_BLOCK||


```
