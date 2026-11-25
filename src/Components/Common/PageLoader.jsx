import "./PageLoader.css";

export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading">
      <div className="page-loader__inner">
        <img
          className="page-loader__logo"
          src={`${import.meta.env.BASE_URL}codetrios_logo.svg`}
          alt="CodeTrios"
          width="180"
          height="42"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <span className="page-loader__bar" aria-hidden="true" />
      </div>
    </div>
  );
}