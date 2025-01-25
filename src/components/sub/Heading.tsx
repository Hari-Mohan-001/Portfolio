import {motion} from 'framer-motion'

interface Props {
  heading: string;
}

const Heading: React.FC<Props> = (props) => {
  return (
    <motion.h1
      className="text-2xl sm:text-3xl font-bold mb-0 self-start"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {props.heading}
    </motion.h1>
  );
}

export default Heading