# An action to generate short season's greetings using Azure OpenAI



## Inputs

### `prompt`

**Required** Your prompt should include the name of the person and some context for the AI

### `api-key`

**Required** Your API key for Azure OpenAI

### `endpoint`

**Required** Your endpoint for Azure OpenAI. Please use the full URL including the version number and https://

## Outputs

### `seasons-greeting`

The seasons greeting generated by the AI

## Example usage

```yaml
uses: malantin/ai-seasons-greeting-action@v0.4
with:
    prompt: 'Malte, a dear friend of mine,'
    api-key: ${{ secrets.AI_API_KEY }}
    endpoint: ${{ secrets.AI_ENDPOINT }}
```
