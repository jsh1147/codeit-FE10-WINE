import SearchIcon from '@/public/icons/search.svg';
import CancelIcon from '@mui/icons-material/Cancel';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as S from './SearchBar.css';

interface SearchBarProps {
  searchByKeyword: (keyword?: string) => void;
}

export default function SearchBar({ searchByKeyword }: SearchBarProps) {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const currentKeyword = (router.query.name as string) || '';
    setKeyword(currentKeyword);
  }, [router.query.name]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === ' ' && keyword.length === 0) return;
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const searchKeyword = keyword.trim();
      setKeyword(searchKeyword);
      searchByKeyword(searchKeyword);
    }
  };

  const handleCancelButton = () => {
    setKeyword('');
    searchByKeyword();
  };

  return (
    <S.Container>
      <SearchIcon
        className="search-icon"
        alt="검색"
        style={{ fill: `var(--gray-500)` }}
      />
      <S.SearchBarInput
        value={keyword}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="검색할 키워드를 입력해 주세요"
      />
      <CancelIcon
        className="cancel-icon"
        style={{
          visibility: keyword === '' ? 'hidden' : 'visible',
          fill: `var(--gray-300)`,
        }}
        onClick={handleCancelButton}
      />
    </S.Container>
  );
}
