import { ref, readonly } from 'vue'
import { OPERATORS, DIGITS } from '../constants/calculatorData'

export function useCalculate() {

    let memory = ref('')
    let payable = ref('100')
    let balance = ref('')
    let error = ref(false)
    let clearOnNextDigit = ref(false)

    function isOperator(string: string) {
      return OPERATORS.includes(string)
    }

    function isDigit(string: string) {
      return DIGITS.includes(string)
    }

    function lastCharIsOperator(string: string) {
      const stringNormalized = string.replace(/\s/g, '')
      return isOperator(stringNormalized[stringNormalized.length - 1])
    }

    function addDigit(digit: string) {
      if (!isDigit(digit)) {
        throw new Error('Invalid param, is not a valid digit')
      }

      const lastDigit = memory.value[memory.value.length - 1]

      if (lastDigit === '.' && digit === '.') return
      if (lastDigit === '0' && memory.value.length === 1) clear()
      if (clearOnNextDigit.value) clear()
      if ((!memory.value || lastCharIsOperator(memory.value)) && digit === '.')
        memory.value += '0'

      clearOnNextDigit.value = false
      memory.value += `${digit}`

    }

    function addOperator(operator: string) {
      if (!isOperator(operator)) {
        throw new Error('Invalid param, is not a valid operator')
      }

      if (!memory.value && operator !== '-') return
      if (lastCharIsOperator(memory.value)) eraseLast()

      clearOnNextDigit.value = false
      memory.value += `${operator}`
    }

    function handlePlus(digit: string){
      const previous = Number(memory.value)
      const upcomingDigit = Number(digit)

      const result = previous + upcomingDigit
      memory.value = result.toString()
    }

    function handleMinus(){
      const cash = Number(memory.value)
      const payableAmount = Number(payable.value)

      const result = cash - payableAmount
      balance.value = result.toString()
    }

    function handleEqual(){
      memory.value = payable.value
    }

    function calculateResult() {
      if (!memory.value || !payable.value) return balance.value = ''

      try {
        handleMinus()
      } catch (_) {
        error.value = true
        memory.value = ''
      }
    }

    function eraseLast() {
      if (!memory.value.length) return

      memory.value = memory.value.slice(0, memory.value.length - 1)
      clearOnNextDigit.value = false
    }

    function clear() {
      memory.value = ''
      error.value = false
    }
    return {
      memory: readonly(memory),
      error: readonly(error),
      payable: readonly(payable),
      balance: readonly(balance),
      handleEqual,
      handlePlus,
      addDigit,
      addOperator,
      calculateResult,
      eraseLast,
      clear,
    }
}