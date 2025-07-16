type SummaryProps = {
    title: string;
    placeholder: string;
    value: string | number;
}
const ModalSummaryContent = ({title, value}: SummaryProps) => {
    return(
        <div>
            <h1>Total number of {title}:</h1>
            <span>
                {value}
            </span>
        </div>
    )
};
export default ModalSummaryContent;