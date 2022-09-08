## Aragon Core

###  contract `CounterV1`

The first version of example plugin - CounterV1.

#### public variable `MULTIPLY_PERMISSION_ID`

```solidity
bytes32 MULTIPLY_PERMISSION_ID 
```

#### public variable `count`

```solidity
uint256 count 
```

#### public variable `multiplyHelper`

```solidity
contract MultiplyHelper multiplyHelper 
```

#### external function `initialize`

```solidity
function initialize(contract MultiplyHelper _multiplyHelper, uint256 _num) external 
```

#### public function `multiply`

```solidity
function multiply(uint256 a) public returns (uint256) 
```

#### public function `execute`

```solidity
function execute() public 
```

