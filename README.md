# 1inch Transfer Subgraph

### Logging out a transaction of first 1000 transfer function call from 1inch smart contract

### usuage
- Visit subgraph studio link from https://thegraph.com/studio/subgraph/1inchtrx/
- Inside the playground box replace with the lines of code below
- Click on play

```javascript 
{
  allTransfers(first: 1000) {
    id
    from
    value
  }
}```