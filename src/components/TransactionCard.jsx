const TransactionCard = ({ transaction }) => {
    const transactionType = transaction.amount < 0 ? "negative" : "positive";
    return (
        <div className={`transaction-card ${transactionType}`}>
            <span>{transaction.title}</span>
            <span>${transaction.amount}</span>
        </div>
    );
};

export default TransactionCard;
