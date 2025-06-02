import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {

    /* input = {
        initialInvestment:  เงินลงทุนเริ่มต้น (เงินก้อนแรกที่ลงทุนในปีแรก) ,
        annualInvestment: 	เงินลงทุนประจำปี (เติมเข้าไปทุกปี เช่น 1,200 บาทต่อปี),
        expectedReturn: ผลตอบแทนที่คาดหวัง (ดอกเบี้ยหรือกำไรที่คาดว่าจะได้รับต่อปี เช่น 6%),
        duration: ระยะเวลาการลงทุน (ปี)
        }

     */
    const resultsData = calculateInvestmentResults(input);

    console.log(resultsData)

    const initialInvestment = input.initialInvestment
    // resultsData[0].valueEndOfYear -
    // resultsData[0].interest -
    // resultsData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => {

                    /* ดอกเบี้ยสะสม = เงินปลายปี - (เงินลงทุนประจำปี * ปี) - เงินต้น */
                    const totalInterest =
                        yearData.valueEndOfYear -
                        yearData.annualInvestment * yearData.year -
                        initialInvestment;

                    /* ทุนรวมทั้งหมด = เงินปลายปี - ดอกเบี้ยสะสม */
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest

                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}