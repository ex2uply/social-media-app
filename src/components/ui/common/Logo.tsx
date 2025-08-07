const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={`text-4xl row-center ${className} font-bold`}>
      <div className="rounded-lg shadow-[0px_0px_15px_1px_rgba(147,51,234,0.3)] bg-gradient-to-br text-center flex-center h-max from-purple-500 to-purple-600">
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Speech bubble shape */}
          <div className="absolute inset-0 bg-white rounded-lg"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-white transform rotate-45 translate-x-1 translate-y-1"></div>
          {/* Smiley face inside speech bubble */}
          <div className="relative z-10 flex flex-col items-center justify-center w-6 h-6">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
              <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
            </div>
            <div className="w-3 h-1 bg-purple-600 rounded-full mt-1"></div>
          </div>
        </div>
      </div>
      <div className="text-gradient-r from-purple-500 to-purple-600 py-2 ml-2">
        Chatter
      </div>
    </h1>
  );
};

export default Logo;
