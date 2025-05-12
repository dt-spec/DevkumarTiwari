import { motion } from 'framer-motion';

const TreeAnimation = () => {
  const branches = [
    { delay: 0, length: 100, angle: -45 },
    { delay: 0.2, length: 80, angle: 45 },
    { delay: 0.4, length: 60, angle: -30 },
    { delay: 0.6, length: 40, angle: 30 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {branches.map((branch, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-1/2 origin-bottom"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: branch.delay,
            ease: "easeOut"
          }}
        >
          <motion.div
            className="w-1 bg-gradient-to-t from-purple-500 to-pink-500"
            style={{
              height: `${branch.length}px`,
              transform: `rotate(${branch.angle}deg)`,
            }}
            animate={{
              height: [`${branch.length}px`, `${branch.length + 20}px`, `${branch.length}px`],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: branch.delay,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TreeAnimation; 